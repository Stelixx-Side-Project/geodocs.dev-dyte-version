import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const GEO_AUDIT_TOOL_URL =
  'https://geolify.ai/geo-ai-visibility-audit?utm_source=geodocs.dev&utm_medium=referral&utm_campaign=brand_audit&utm_content=hero_cta';

const PRODUCTS = [
  {
    title: 'GEO Fundamentals',
    link: '/guides/geo/fundamentals',
    icon: VideoRegular,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Understand the shift from ranking-centric SEO to citation-centric GEO in AI search.',
  },
  {
    title: 'Execution Checklists',
    link: '/guides/geo/execution',
    icon: MicRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Turn strategy into tactical weekly actions with templates, scripts, and operational guides.',
  },
  {
    title: 'Case Signals and Proof',
    link: '/guides/geo/proof',
    icon: LiveRegular,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Measure citation outcomes and prove GEO impact with reporting frameworks and matrices.',
  },
  {
    title: 'GeolifyAI',
    link: '/guides/geo/operations',
    icon: ChatMultipleRegular,
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Use GeolifyAI to navigate references, extract artifacts, and speed up GEO decision making.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'w-[90vw] border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800 sm:w-[440px]',
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {/* {beta && <span className="font-normal text-text-400"> (Beta)</span>} */}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

function openDocSearch() {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
      cancelable: true,
    }),
  );

  window.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    }),
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links mx-auto max-w-6xl px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/docs/geo-audit-checklist"
            className="mb-6 rounded-full bg-secondary-900 px-4 py-1.5 text-sm font-medium text-primary shadow-sm hover:no-underline dark:bg-secondary-800"
          >
            ✨ Just launched: GEO Audit Checklist v1 - Download now →
          </Link>

          <h1 className="heading-serif mb-6 max-w-4xl text-5xl leading-tight tracking-tight lg:text-7xl">
            The definitive GEO knowledge hub.<br />
            <span className="bg-gradient-to-r from-[#00ED64] to-[#00684A] bg-clip-text text-transparent lg:whitespace-nowrap">
              Built for humans. Parsed by AI.
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-text-400">
            Playbooks and templates that help teams move from
            ranking optimization to citation optimization across AI engines.
          </p>

          <div className="w-full max-w-2xl">
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50"
              role="button"
              tabIndex={0}
              onClick={openDocSearch}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openDocSearch();
                }
              }}
            >
              <div className="flex w-full items-center gap-3">
                <ChatMultipleRegular className="h-5 w-5 text-[#00ED64]" />
                <input
                  type="text"
                  readOnly
                  value="✨ Ask GeolifyAI or search docs (Cmd + K)..."
                  className="w-full bg-transparent text-sm text-zinc-500 outline-none dark:text-zinc-400"
                  aria-label="Assistant search"
                />
              </div>
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              GeolifyAI is in beta and may make mistakes. Please verify critical information.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href={GEO_AUDIT_TOOL_URL}
              className="flex items-center justify-center rounded-md bg-[#00ED64] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#00c553] hover:no-underline"
              target="_blank"
            >
              Start GEO Audit
            </Link>
            <Link
              to="/guides/geo"
              className="flex items-center justify-center rounded-md border border-zinc-300 px-8 py-3 font-semibold text-black transition-colors hover:bg-zinc-100 hover:no-underline dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Browse Artifacts
            </Link>
          </div>

          <div className="mt-8 w-full max-w-4xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
              <img
                src="https://svgl.app/library/perplexity.svg"
                alt="Perplexity"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <img
                src="https://svgl.app/library/openai.svg"
                alt="ChatGPT"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <img
                src="https://svgl.app/library/google.svg"
                alt="Google AI Overviews"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <img
                src="https://svgl.app/library/anthropic_white.svg"
                alt="Claude"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <img
                src="https://svgl.app/library/gemini.svg"
                alt="Gemini"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
