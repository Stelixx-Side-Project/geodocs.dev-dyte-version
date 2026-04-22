import React from 'react';
import Link from '@docusaurus/Link';
import {
  Code,
  HelpCircle,
  Layers,
  FileText,
  Link2,
  Terminal,
} from 'react-feather';

function SDK({ icon: Icon, to, name }: { icon: any; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="homepage__layer-card flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <Icon className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        TECHNICAL STANDARDS
      </span>

      <h3 className="heading-serif mb-12 text-4xl">
        Optimization Layers
      </h3>

      <p className="mb-12 max-w-3xl text-text-400">
        Technical standards that make your content communicate effectively with
        LLM systems.
      </p>

      <div className="mb-10">
        <h4 className="heading-serif mb-2 text-2xl">Semantic Markup</h4>

        <p className="mb-6 text-text-400">
          Declare entities and intent with machine-readable structures.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="JSON-LD Entities"
            to="/guides/geo/fundamentals"
            icon={Code}
          />
          <SDK
            name="FAQ Schema"
            to="/guides/geo/strategy"
            icon={HelpCircle}
          />
          <SDK
            name="Organization Schema"
            to="/guides/geo/execution"
            icon={Layers}
          />
        </div>
      </div>

      <div>
        <h4 className="heading-serif mb-2 text-2xl">Content Protocols</h4>

        <p className="mb-6 text-text-400">
          Authoring rules that improve retrieval, grounding, and citation quality.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="Markdown-First Formatting"
            to="/guides/geo/execution"
            icon={FileText}
          />
          <SDK
            name="Entity Linking"
            to="/guides/geo/operations"
            icon={Link2}
          />
          <SDK
            name="Robot Directives"
            to="/guides/geo/operations"
            icon={Terminal}
          />
        </div>
      </div>
    </section>
  );
}
