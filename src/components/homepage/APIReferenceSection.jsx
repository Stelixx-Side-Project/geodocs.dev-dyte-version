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
          className="homepage__hero-cta-link absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
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
          <div className="w-full max-w-xl rounded-2xl border border-zinc-700 bg-black/70 p-4 text-zinc-200 shadow-2xl">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-2 text-zinc-400">metadata.protocol.jsonld</span>
              </div>
              <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
                VECTOR-READY
              </span>
            </div>

            <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full border border-zinc-600 px-2 py-1">metadata schema</span>
              <span className="rounded-full border border-zinc-600 px-2 py-1">entity extraction</span>
              <span className="rounded-full border border-zinc-600 px-2 py-1">citation readiness</span>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-zinc-700 bg-black/60 p-4 text-sm leading-relaxed">
              <code>{metadataSample}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
