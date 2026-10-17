import Link from "next/link";
import { BASE_URL } from "@/lib/services-data";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: it.label,
      item: it.href ? (it.href.startsWith("http") ? it.href : `${BASE_URL}${it.href}`) : undefined,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={it.label}>
                <span className="crumb-sep" aria-hidden="true">/</span>
                {isLast || !it.href ? (
                  <span aria-current="page" className="crumb-current">{it.label}</span>
                ) : (
                  <Link href={it.href}>{it.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
