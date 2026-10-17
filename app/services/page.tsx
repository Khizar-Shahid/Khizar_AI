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
    question: "What makes Realtor-Go different from standard GoHighLevel agencies?",
    answer:
      "We specialize exclusively in US real estate agents, teams, brokerages, and mortgage loan officers. We don't use generic templates—we build custom pipelines, 10DLC compliant messaging cadences, and deep integrations (Zillow, Realtor.com, LOS systems) configured specifically for how you do deals.",
  },
  {
    question: "Do you build the system in our own GoHighLevel account?",
    answer:
      "Yes. We can install and configure the entire system within your existing GoHighLevel agency account or sub-account, or provide a fully managed account hosted on our high-performance infrastructure.",
  },
  {
    question: "Are your text messaging workflows 10DLC compliant?",
    answer:
      "100%. We handle your brand verification, campaign submission with The Campaign Registry (TCR), and ensure carrier compliance with opt-out mechanisms so your text messages get delivered reliably.",
  },
  {
    question: "How long does a complete setup take?",
    answer:
      "Standard deployments take between 10 and 14 business days from kickoff call to final delivery. This includes all pipeline builds, automation sequences, third-party integrations, data testing, and team training.",
  },
  {
    question: "What kind of ongoing support do you offer?",
    answer:
      "We operate month-to-month with no long-term contracts. You have direct access to the exact systems specialist who architected your account for optimizations, workflow tweaks, and support.",
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
                Explore our core practice areas built to scale your transactions, eliminate manual tasks, and protect client relationships.
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
          subhead="Schedule a 20-minute fit call. We'll review your current software, uncover automation gaps, and present a custom GoHighLevel roadmap."
        />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
