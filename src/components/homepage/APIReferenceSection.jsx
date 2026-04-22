import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';

const metadataSample = `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "GEO Audit Checklist v1",
  "role": "SEO Specialist",
  "artifact": "Checklist",
  "journey": "Execution"
}`;

export default function APIReferenceSection() {
  return (
    <section className="no-underline-links relative px-6">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/guides/geo/operations"
          aria-label="Metadata Protocol"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="heading-serif text-4xl">Readable by Humans. Parsed by Machines.</h2>
          <p className="text-zinc-400">
            Do not force AI systems to guess your meaning. Use Geodocs metadata
            protocol to preserve structure and improve citation accuracy.
          </p>
          <div className="mt-10 flex flex-col gap-3 text-left lg:pl-0">
            <div className="rounded-lg border border-zinc-700 px-4 py-2 font-jakarta font-semibold text-current">
              Metadata Schema
            </div>
            <div className="rounded-lg border border-zinc-700 px-4 py-2 font-jakarta font-semibold text-zinc-400">
              Entity Extraction
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <pre className="w-full max-w-xl overflow-x-auto rounded-xl border border-zinc-700 bg-black/50 p-6 text-sm leading-relaxed text-zinc-200">
            <code>{metadataSample}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
