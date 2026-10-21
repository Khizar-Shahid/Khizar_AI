import { Check } from "@/components/Icons";
import { delay } from "@/components/site";
import type { ServiceDeliverable } from "@/lib/services-data";

interface ServiceFeaturesProps {
  problem: {
    headline: string;
    description: string;
    stats?: { value: string; label: string };
  };
  deliverables: ServiceDeliverable[];
  deliverablesHead?: {
    headline: string;
    subheadline?: string;
  };
}

export default function ServiceFeatures({ problem, deliverables, deliverablesHead }: ServiceFeaturesProps) {
  return (
    <>
      {/* Problem / Context Band */}
      <section className="band band-pine problem-band" aria-labelledby="problem-heading">
        <div className="wrap">
          <div className="problem-grid">
            <div className="problem-copy" data-r style={delay(0)}>
              <span className="eyebrow">The challenge we eliminate</span>
              <h2 id="problem-heading" className="problem-title">
                {problem.headline}
              </h2>
              <div className="problem-desc space-y-4">
                {problem.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            {problem.stats && (
              <div className="problem-stat-box" data-r style={delay(1)}>
                <div className="stat-big">{problem.stats.value}</div>
                <p className="stat-caption">{problem.stats.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Deliverables / Setup Grid */}
      <section id="deliverables" className="band band-light deliverables-band" aria-labelledby="deliverables-heading">
        <div className="wrap">
          <div className="section-head text-center" data-r style={delay(0)}>
            <span className="eyebrow">What we build for you</span>
            <h2 id="deliverables-heading">
              {deliverablesHead?.headline ?? "Turnkey deliverables engineered for your business"}
            </h2>
            <p className="section-sub">
              {deliverablesHead?.subheadline ??
                "No generic templates or broken workflows. Every component is custom-configured, tested with real data, and handed over ready to produce."}
            </p>
          </div>

          <div className="deliverables-grid">
            {deliverables.map((item, idx) => (
              <article key={item.title} className="deliverable-card" data-r style={delay(idx)}>
                {item.badge && <span className="deliverable-badge">{item.badge}</span>}
                <h3 className="deliverable-title">{item.title}</h3>
                <p className="deliverable-desc">{item.description}</p>
                <ul className="deliverable-bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>
                      <Check />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
