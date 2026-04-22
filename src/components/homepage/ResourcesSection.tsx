import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: '/guides/geo/fundamentals',
    type: 'comparison',
    title: 'GEO vs SEO Comparison Table',
    description:
      'Compare ranking-focused and citation-focused systems to decide your GEO transition path.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2023/02/Dyte-Blog---v2-APIs.jpg',
    duration: '3 min',
  },
  {
    url: '/guides/geo/proof',
    type: 'script',
    title: 'Weekly Reporting Script',
    description:
      'A reusable reporting script for weekly GEO visibility tracking and team review.',
    image:
      'https://dyte.io/blog/content/images/size/w1000/2023/07/HLS--indepth--header--1.png',
    duration: '10 min',
  },
  {
    url: '/guides/geo/execution',
    type: 'case signal',
    title: 'Entity Coverage Impact',
    description:
      'Measure how entity coverage quality affects retrieval and citation consistency.',
    image: 'https://img.youtube.com/vi/eVUqkNNHh1o/hqdefault.jpg',
    duration: '5 min',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} read`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'comparison' | 'script' | 'case signal'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6 ">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="heading-serif mb-6 text-4xl">Want to see the impact?</h2>
          </div>
          <Link
            to="/guides/geo/proof"
            className="homepage__hero-cta-link font-jakarta text-sm font-semibold text-primary"
          >
            Measurement resources <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black',
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'comparison' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black',
            )}
            onClick={() => setActiveType('comparison')}
          >
            Comparison
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'script' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black',
            )}
            onClick={() => setActiveType('script')}
          >
            Script
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'case signal' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black',
            )}
            onClick={() => setActiveType('case signal')}
          >
            Case Signal
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
