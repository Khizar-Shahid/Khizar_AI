import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import { BASE_URL, SERVICES_HUB_DATA, SERVICES_LIST } from "@/lib/services-data";
import { delay } from "@/components/site";
import { Bolt, Check, Inbox, Shield } from "@/components/Icons";

export const metadata: Metadata = {
  title: SERVICES_HUB_DATA.title,
  description: SERVICES_HUB_DATA.metaDescription,
  alternates: {
    canonical: SERVICES_HUB_DATA.url,
  },
  openGraph: {
    title: SERVICES_HUB_DATA.title,
    description: SERVICES_HUB_DATA.metaDescription,
    url: SERVICES_HUB_DATA.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICES_HUB_DATA.title,
    description: SERVICES_HUB_DATA.metaDescription,
  },
};

const hubFaqs = [
  {
    question: "How to use GoHighLevel CRM?",
    answer:
      "Use GoHighLevel to manage leads, track sales pipelines, automate follow-ups, and schedule appointments in one place.",
  },
  {
    question: "How to set up a CRM system?",
    answer:
      "Set up your contacts, sales pipelines, follow-up automations, and appointment calendar. Realtor-Go can customize the system for your business.",
  },
  {
    question: "Is GoHighLevel a good CRM?",
    answer:
      "Yes, GoHighLevel is useful for managing leads, automating follow-ups, and tracking customer relationships, especially for real estate and mortgage businesses.",
  },
  {
    question: "Which is better, HubSpot or GoHighLevel?",
    answer:
      "It depends on your needs. GoHighLevel focuses on CRM, marketing automation, and lead follow-ups, while HubSpot offers CRM tools for sales, marketing, and customer service.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "GoHighLevel CRM Setup & Automation Services",
    provider: {
      "@type": "Organization",
      name: "Realtor-Go",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description: SERVICES_HUB_DATA.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main id="top">
        <ServiceHero
          primaryKeyword={SERVICES_HUB_DATA.primaryKeyword}
          badge="USA Real Estate & Mortgage Specialization"
          h1={SERVICES_HUB_DATA.h1}
          lede={SERVICES_HUB_DATA.lede}
          stats={SERVICES_HUB_DATA.stats}
        />

        {/* Pillars Overview */}
        <section className="band band-pine pillars-band" aria-labelledby="pillars-heading">
          <div className="wrap">
            <div className="section-head text-center" data-r style={delay(0)}>
              <span className="eyebrow">End-to-End CRM Engineering</span>
              <h2 id="pillars-heading">Complete GoHighLevel Systems Tailored to Your Pipeline</h2>
              <p className="section-sub">
                Explore our specialized CRM services to automate follow-ups, manage leads efficiently, reduce manual work, and turn more prospects into clients.
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card" data-r style={delay(1)}>
                <div className="pillar-icon"><Inbox /></div>
                <h3>CRM Setup & Architecture</h3>
                <p>
                  Custom buyer, listing, and loan origination pipelines mapped to your actual transaction stages with smart custom fields and lead tags.
                </p>
              </div>

              <div className="pillar-card" data-r style={delay(2)}>
                <div className="pillar-icon"><Bolt /></div>
                <h3>Lead Follow-Up & Marketing</h3>
                <p>
                  Sub-minute speed-to-lead auto-replies, multi-touch email/SMS nurture campaigns, and missed-call text-back to capture every deal.
                </p>
              </div>

              <div className="pillar-card" data-r style={delay(3)}>
                <div className="pillar-icon"><Shield /></div>
                <h3>Safe CRM Data Migration</h3>
                <p>
                  Flawless data transfer from Follow Up Boss, kvCORE, Jungo, LionDesk, or spreadsheets into GoHighLevel with 100% field preservation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog of all 8 specialized services */}
        <ServicesGrid
          services={SERVICES_LIST}
          title="All Realtor-Go Specialized Services"
          subtitle="Select a practice area below to learn more about our tailored GoHighLevel architectures and deliverables."
        />

        <ServiceFaq faqs={hubFaqs} title="GoHighLevel Services FAQ" />

        <ServiceCta
          headline="Ready to build your ultimate real estate or mortgage CRM?"
          subhead="Schedule a Free Strategy Call. We'll review your current software, uncover automation gaps, and present a custom GoHighLevel roadmap."
        />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
