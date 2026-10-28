import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/components/site";
import { BASE_URL } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Contact | Realtor-Go — Tell Us About Your Business",
  description:
    "Get in touch with Realtor-Go to discuss custom GoHighLevel CRM setup, automation workflows, and past-client reactivation for your real estate or mortgage business.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | Realtor-Go — Request a Custom CRM Proposal",
    description:
      "Get in touch with Realtor-Go to discuss custom GoHighLevel CRM setup, automation workflows, and past-client reactivation.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
};

interface ContactPageProps {
  searchParams?: {
    service?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const service = searchParams?.service;

  return (
    <div className="contact-page-wrapper">
      <Header theme="dark" />
      <main className="contact-main">
        <div className="contact-wireframe-grid">
          {/* Left card: Value prop & overview */}
          <div className="contact-text-card">
            <p className="eyebrow">Contact Realtor-Go</p>
            <h1>
              Let&apos;s build your <em>CRM engine</em>.
            </h1>
            <p className="contact-lede">
              Tell us what you want to automate. We will review your current systems, calculate deal recovery potential, and propose a concrete implementation plan.
            </p>

            <div className="contact-value-points">
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Fast Response</strong>
                  <p>Inquiries reviewed within one business day.</p>
                </div>
              </div>
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Zero Obligation</strong>
                  <p>Clear pricing and recommendations upfront with no high-pressure sales.</p>
                </div>
              </div>
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Specialized For US Real Estate</strong>
                  <p>Pre-configured for 10DLC compliance, MLS lead routing, and GHL pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right card: Form */}
          <div className="contact-form-card">
            <ContactForm initialService={service} />
          </div>
        </div>
      </main>

      {/* Alternate contact section just above footer */}
      <section className="band band-pine contact-alt-section" aria-labelledby="h-alt-contact">
        <div className="wrap">
          <div className="contact-alt" data-r>
            <div className="contact-alt-text">
              <h2 id="h-alt-contact">Prefer direct <em>email</em>?</h2>
              <p>
                You can also email our engineering and strategy team directly. Send us your role, current CRM, and what you&apos;re looking to solve.
              </p>
            </div>
            <div className="contact-alt-actions">
              <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Reveal />
    </div>
  );
}
