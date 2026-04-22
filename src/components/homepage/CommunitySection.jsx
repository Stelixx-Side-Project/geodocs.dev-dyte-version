import React from 'react';
import Link from '@docusaurus/Link';

import { Linkedin, Twitter } from 'react-feather';

const aiAvatars = [
  'atlas',
  'nova',
  'orion',
  'zenith',
  'lyra',
  'ember',
  'pixel',
  'quartz',
  'neon',
  'aether',
  'cosmo',
  'vanta',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#262626] to-black px-4 py-16 pt-64 text-white dark:from-zinc-200/90 dark:to-white dark:text-zinc-700">
        <h2 className="heading-serif text-3xl">
          Join the <span className="text-primary-100">community</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Engage with our ever-growing community to get the latest updates,
          product support, and more.
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {aiAvatars.map((seed) => (
            <img
              key={seed}
              src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${seed}`}
              alt={`AI avatar ${seed}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://x.com/GeolifyAI"
            target="_blank"
          >
            <Twitter className="h-5 w-5" /> X &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://www.linkedin.com/groups/17784036/"
            target="_blank"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
