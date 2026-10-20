import { ArrowRight, Check } from "@/components/Icons";
import { SITE, delay } from "@/components/site";
import Breadcrumbs from "./Breadcrumbs";

interface ServiceHeroProps {
  primaryKeyword: string;
  badge: string;
  h1: string;
  lede: string;
  breadcrumbLabel?: string;
  stats?: { value: string; label: string }[];
}

export default function ServiceHero({
  primaryKeyword,
  badge,
  h1,
  lede,
  breadcrumbLabel,
  stats,
}: ServiceHeroProps) {
  return (
    <section className="band hero service-hero" aria-labelledby="service-h1">
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            ...(breadcrumbLabel ? [{ label: breadcrumbLabel }] : []),
          ]}
        />

        <div className="service-hero-content">
          <div data-r style={delay(0)}>
            <div className="pill service-pill">
              <span className="pill-dot" />
              <span>{primaryKeyword}</span>
              <span className="pill-divider">·</span>
              <span className="pill-sub">{badge}</span>
            </div>
          </div>

          <div data-r style={delay(1)}>
            <h1 id="service-h1" className="service-heading">
              {h1}
            </h1>
          </div>

          <div data-r style={delay(2)}>
            <p className="lede service-lede">{lede}</p>
          </div>

          <div data-r style={delay(3)} className="cta-row">
            <a className="btn btn-primary" href={SITE.bookingUrl}>
              Book a Free Strategy Call <ArrowRight />
            </a>
            <a className="btn btn-ghost" href="#deliverables">
              Explore what we build
            </a>
          </div>

          <div data-r style={delay(4)} className="fine service-trust-row">
            <span>
              <Check /> Built across the USA
            </span>
            <span>
              <Check /> Month-to-month, no lock-in
            </span>
            <span>
              <Check /> 100% data ownership
            </span>
          </div>

          {stats && stats.length > 0 && (
            <div data-r style={delay(5)} className="service-stats-grid">
              {stats.map((st) => (
                <div key={st.label} className="service-stat-card">
                  <div className="service-stat-value">{st.value}</div>
                  <div className="service-stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
