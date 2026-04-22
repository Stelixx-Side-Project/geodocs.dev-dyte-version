import React from 'react';
import Link from '@docusaurus/Link';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';
import ThemedImage from '@theme/ThemedImage';

const geolifyBase =
  'https://geolify.ai/geo-ai-visibility-audit?utm_source=geodocs.dev&utm_medium=referral&utm_campaign=brand_audit';

const playbooks = [
  { name: 'Fundamentals', href: '/guides/geo/fundamentals' },
  { name: 'Strategy', href: '/guides/geo/strategy' },
  { name: 'Execution', href: '/guides/geo/execution' },
  { name: 'Proof', href: '/guides/geo/proof' },
];

const artifacts = [
  { name: 'Checklists', href: '/guides/geo/execution' },
  { name: 'Templates', href: '/guides/geo/operations' },
  { name: 'Scripts', href: '/guides/geo/proof' },
  { name: 'Comparisons', href: '/guides/geo/strategy' },
];

const geolify = [
  { name: 'Platform', href: `${geolifyBase}&utm_content=footer_platform` },
  { name: 'Audit Tool', href: `${geolifyBase}&utm_content=footer_cta` },
  { name: 'Terms', href: 'https://geolify.ai/terms' },
  { name: 'Privacy', href: 'https://geolify.ai/privacy' },
];

const geodocs = [
  { name: 'About Geodocs', href: '/guides/geo' },
  { name: 'Contribute', href: '/community-packages' },
  { name: 'AI & Content Policy', href: '/guides/geo/operations' },
];

function FooterLinks({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400 dark:text-[#fff]">
        {name}
      </h3>
      <div className="mt-3 flex flex-col gap-3">
        {links.map(({ name: itemName, href }) => (
          <Link
            key={itemName}
            href={href}
            className="homepage__hero-cta-link text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
            target={href.startsWith('http') ? '_blank' : undefined}
          >
            {itemName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="homepage-footer bg-[#F4F7FF] dark:bg-[#191919]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ThemedImage
            alt="Geodocs"
            className="h-9 w-fit lg:h-12"
            sources={{
              light: '/logo/geodocs-logo-full-rectangle-transparentbg.svg',
              dark: '/logo/geodocs_dark_logo.svg',
            }}
          />

          <Link
            href="https://www.google.com/preferences/source?q=geodocs.dev"
            target="_blank"
            className="homepage__hero-cta-link inline-flex items-center gap-2 rounded-lg border border-secondary-700 px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-primary hover:text-primary hover:no-underline dark:text-zinc-100"
          >
            <span>G</span>
            <span>Add Geodocs as a preferred source on Google</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 lg:grid-cols-4">
          <FooterLinks name="Playbooks" links={playbooks} />
          <FooterLinks name="Artifacts" links={artifacts} />
          <FooterLinks name="Geolify" links={geolify} />
          <FooterLinks name="Geodocs" links={geodocs} />
        </div>

        <hr className="my-12 !bg-gray-300 dark:!bg-[#999]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-[#999]">
            <span>Geodocs is a knowledge hub operated by Geolify.</span>
            <span>&bull;</span>
            <span>
              © 2026 Geodocs is a trademark of{' '}
              <Link
                href="https://geolify.ai/geo-ai-visibility-audit?utm_source=geodocs.dev&utm_medium=referral&utm_campaign=brand_audit&utm_content=copyright_geolify"
                className="homepage__hero-cta-link text-inherit underline"
                target="_blank"
              >
                Geolify
              </Link>
              . All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/dyte-io"
              aria-label="GitHub"
              target="_blank"
              className="homepage__hero-cta-link"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/dyteio"
              aria-label="LinkedIn"
              target="_blank"
              className="homepage__hero-cta-link"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://twitter.com/dyte_io"
              aria-label="Twitter"
              target="_blank"
              className="homepage__hero-cta-link"
            >
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/company/dyteio"
              aria-label="YouTube"
              target="_blank"
              className="homepage__hero-cta-link"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
