import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServicePipelineVisual from "@/components/services/ServicePipelineVisual";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import ServicesGrid from "@/components/services/ServicesGrid";
import { BASE_URL, SERVICES_LIST, getServiceBySlug } from "@/lib/services-data";

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Realtor-Go",
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: service.url,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: service.url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_LIST.filter(
    (s) => service.relatedSlugs.includes(s.slug) && s.slug !== service.slug
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.primaryKeyword,
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Realtor-Go",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: service.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main id="top">
        <ServiceHero
          primaryKeyword={service.primaryKeyword}
          badge={service.badge}
          h1={service.h1}
          lede={service.lede}
          breadcrumbLabel={service.primaryKeyword}
        />

        <ServiceFeatures
          problem={service.problemStatement}
          deliverables={service.deliverables}
          deliverablesHead={service.deliverablesHead}
        />

        <ServicePipelineVisual
          stages={service.pipelineStages}
          serviceTitle={service.primaryKeyword}
        />

        <ServiceFaq faqs={service.faqs} title={`${service.primaryKeyword} FAQ`} />

        {relatedServices.length > 0 && (
          <ServicesGrid
            services={relatedServices}
            title="Explore Related Services"
            subtitle="Combine workflows and pipelines to build a unified revenue engine for your business."
          />
        )}

        <ServiceCta
          headline={`Ready to launch your ${service.primaryKeyword.toLowerCase()}?`}
          subhead="Book a Free Strategy Call. We'll map your current workflow, identify quick wins, and share an exact blueprint tailored for your team."
        />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
