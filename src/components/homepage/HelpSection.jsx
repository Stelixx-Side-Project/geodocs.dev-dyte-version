import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className,
        )}
      >
        <h2 className="heading-serif mb-12 text-center lg:text-3xl">
          How can we help your GEO workflow today?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/calendar.svg"
              alt="Contribute content"
              width="48"
              height="48"
            />
            <h3 className="my-3">Contribute Content</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Propose a checklist, template, or brief that improves the shared
              GEO knowledge base.
            </p>
            <Link
              href="/guides/geo"
              className="text-primary dark:text-primary-100"
            >
              Go to GEO hub &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/customer.svg"
              alt="Community"
              width="48"
              height="48"
            />
            <h3 className="my-3">Join the Community</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Discuss GEO playbooks, share learnings, and improve standards with
              the wider contributor community.
            </p>
            <Link
              href="/community-packages"
              className="text-primary dark:text-primary-100"
            >
              Explore community &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/chat.svg"
              alt="FAQs"
              width="48"
              height="48"
            />
            <h3 className="my-3">FAQs</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Browse common GEO/AEO implementation questions and practical
              answers.
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              View FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
