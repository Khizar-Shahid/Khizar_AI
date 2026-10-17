import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { delay } from "@/components/site";
import type { ServiceItem } from "@/lib/services-data";

interface ServicesGridProps {
  services: ServiceItem[];
  title?: string;
  subtitle?: string;
  categoryFilter?: "CRM Setup" | "Automation" | "Migration" | "All";
}

export default function ServicesGrid({
  services,
  title,
  subtitle,
  categoryFilter = "All",
}: ServicesGridProps) {
  const filtered =
    categoryFilter === "All"
      ? services
      : services.filter((s) => s.category === categoryFilter);

  return (
    <section className="band services-catalog-band" aria-labelledby="catalog-heading">
      <div className="wrap">
        {title && (
          <div className="section-head text-center" data-r style={delay(0)}>
            <span className="eyebrow">Our Specializations</span>
            <h2 id="catalog-heading">{title}</h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </div>
        )}

        <div className="services-card-grid">
          {filtered.map((service, idx) => (
            <article key={service.slug} className="service-card" data-r style={delay(idx % 4)}>
              <div className="service-card-meta">
                <span className="service-category-tag">{service.category}</span>
                <span className="service-kw-tag">{service.primaryKeyword}</span>
              </div>
              <h3 className="service-card-title">
                <Link href={`/services/${service.slug}/`}>{service.h1}</Link>
              </h3>
              <p className="service-card-desc">{service.metaDescription}</p>
              <div className="service-card-footer">
                <Link href={`/services/${service.slug}/`} className="service-link-btn">
                  <span>View service details</span>
                  <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
