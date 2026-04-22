#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = process.env.GEODOCS_CONTENT_SOURCE || path.resolve(root, '../geodocs.dev-docs/docs');
const targetRoot = path.resolve(root, 'docs/guides/geo');
const allowedDirs = ['fundamentals', 'strategy', 'execution', 'proof', 'operations'];
const manifestFile = '_manifests/articles.json';
const dryRun = process.argv.includes('--dry-run');

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function cleanTargetSubdir(name) {
  const dir = path.join(targetRoot, name);
  if (await exists(dir)) {
    if (!dryRun) await rm(dir, { recursive: true, force: true });
    console.log(`${dryRun ? '[dry-run] ' : ''}removed ${dir}`);
  }
}

async function copyAllowedDirs() {
  for (const dirName of allowedDirs) {
    const src = path.join(sourceRoot, dirName);
    const dest = path.join(targetRoot, dirName);

    if (!(await exists(src))) {
      console.log(`skip ${dirName}: source missing`);
      continue;
    }

    await cleanTargetSubdir(dirName);
    if (!dryRun) await cp(src, dest, { recursive: true });
    console.log(`${dryRun ? '[dry-run] ' : ''}copied ${src} -> ${dest}`);
  }
}

async function syncManifest() {
  const src = path.join(sourceRoot, manifestFile);
  const dest = path.join(targetRoot, manifestFile);

  if (!(await exists(src))) {
    console.log(`skip manifest: ${src} missing`);
    return;
  }

  if (!dryRun) {
    await mkdir(path.dirname(dest), { recursive: true });
    const body = await readFile(src, 'utf8');
    await writeFile(dest, body, 'utf8');
  }

  console.log(`${dryRun ? '[dry-run] ' : ''}synced manifest ${src} -> ${dest}`);
}

async function writeIndex() {
  const file = path.join(targetRoot, 'index.md');
  const lines = [
    '# GEO Knowledge Hub',
    '',
    'This folder is synced from `../geodocs.dev-docs/docs`.',
    '',
    'Do not edit synced program folders directly in this repository.',
    '',
    'Programs:',
    '- Fundamentals',
    '- Strategy',
    '- Execution',
    '- Proof',
    '- Operations',
    ''
  ];

  if (!dryRun) {
    await mkdir(targetRoot, { recursive: true });
    await writeFile(file, lines.join('\n'), 'utf8');
  }

  console.log(`${dryRun ? '[dry-run] ' : ''}updated ${file}`);
}

async function run() {
  if (!(await exists(sourceRoot))) {
    console.error(`source folder not found: ${sourceRoot}`);
    process.exit(1);
  }

  await mkdir(targetRoot, { recursive: true });
  await copyAllowedDirs();
  await syncManifest();
  await writeIndex();

  // quick summary
  const entries = await readdir(targetRoot, { withFileTypes: true });
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  console.log(`sync done. target folders: ${folders.join(', ')}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
