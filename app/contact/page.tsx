import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE } from "@/components/site";
import { BASE_URL } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Contact | Realtor-Go — Book a Fit Call",
  description:
    "Schedule a free 30-minute fit call to see if Realtor-Go is right for your real estate or mortgage business. Pick a time that works for you.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | Realtor-Go — Book a Fit Call",
    description:
      "Schedule a free 30-minute fit call to see if Realtor-Go is right for your real estate or mortgage business.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <Header theme="dark" />
      <main className="contact-main">
        <div className="contact-wireframe-grid">
          {/* Left card: Text here (heading and para) */}
          <div className="contact-text-card">
            <p className="eyebrow">Contact</p>
            <h1>
              Let&apos;s find out if this <em>fits</em>.
            </h1>
            <p className="contact-lede">
              Pick a time for a quick 30-minute call. No pitch — just an
              honest look at whether Realtor-Go is the right move for your
              business.
            </p>
          </div>

          {/* Right card: Calendar here (without scroll bars) */}
          <div className="contact-calendar-card">
            <iframe
              src="https://calendly.com/shahidkhizar1403/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
              title="Book a Fit Call — Realtor-Go"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              style={{ border: "none", width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>
      </main>

      {/* Alternate contact section just above footer */}
      <section className="band band-pine contact-alt-section" aria-labelledby="h-alt-contact">
        <div className="wrap">
          <div className="contact-alt" data-r>
            <div className="contact-alt-text">
              <h2 id="h-alt-contact">Prefer to start over <em>email</em>?</h2>
              <p>
                Send us a quick note with your role, current CRM, and roughly how
                many contacts you manage. We&apos;ll get back to you within one business day.
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
