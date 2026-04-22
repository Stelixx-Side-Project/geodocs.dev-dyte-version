import React from 'react';
import Link from '@docusaurus/Link';
import {
  ArrowRightFilled,
  CalendarRegular,
  TargetRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight } from 'react-feather';

interface Guide {
  title: string;
  icon: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'What Changed in AI Search?',
    icon: TargetRegular,
    text: 'Fundamentals',
    link: '/guides/geo/fundamentals',
  },
  {
    title: '30/60/90 GEO Rollout Plan',
    icon: CalendarRegular,
    text: 'Strategy',
    link: '/guides/geo/strategy',
  },
];

interface Sample {
  title: string;
  format?: string;
  actionLabel: string;
  actionLink: string;
}

const samples: Sample[] = [
  {
    title: 'GEO Audit Checklist v1',
    format: 'Markdown',
    actionLabel: '↓ Download',
    actionLink: '/docs/geo-audit-checklist',
  },
  {
    title: 'Citation Measurement Matrix',
    format: 'Sheets',
    actionLabel: '⎘ Copy',
    actionLink: '/guides/geo/proof',
  },
  {
    title: 'Entity Coverage Tracker',
    format: 'Sheets',
    actionLabel: '⎘ Copy',
    actionLink: '/guides/geo/execution',
  },
];

function Guide({ title, text, icon: Icon, link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className="homepage__toolkit-card group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Sample({ title, format, actionLabel, actionLink }: Sample) {
  return (
    <div className="homepage__toolkit-card group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-text-400">{format}</div>
      </div>

      <div className="flex items-center gap-2.5">
        <Link
          to={actionLink}
          className="homepage__hero-cta-link flex items-center gap-1 rounded-lg border border-secondary-700 py-1 px-3 font-semibold text-inherit transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
        >
          <span>{actionLabel}</span>
        </Link>
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  return (
    <section className="no-underline-links my-40 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="heading-serif m-0">Build your GEO Strategy</h3>

          <Link
            to="/guides/geo/strategy"
            className="homepage__hero-cta-link font-jakarta text-sm font-semibold"
          >
            View all playbooks <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block',
        )}
      />

      <div className="w-full md:max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="heading-serif m-0">Tactical Artifacts</h3>

          <Link
            to="/guides/geo/execution"
            className="homepage__hero-cta-link font-jakarta text-sm font-semibold"
          >
            View all artifacts <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {samples.map((sample) => (
            <Sample {...sample} key={sample.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
