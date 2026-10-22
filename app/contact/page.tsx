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
    <>
      <Header theme="dark" />
      <main>
        {/* Hero */}
        <section className="band contact-hero" aria-labelledby="h-contact">
          <div className="wrap">
            <div className="contact-hero-inner" data-r>
              <p className="eyebrow">Contact</p>
              <h1 id="h-contact">
                Let&apos;s find out if this <em>fits</em>.
              </h1>
              <p className="contact-lede">
                Pick a time below for a quick 30-minute call. No pitch —
                just an honest look at whether Realtor-Go is the right move for your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Embed */}
        <section className="band band-light contact-cal-section" aria-label="Book a call">
          <div className="wrap">
            <div className="contact-cal-wrapper" data-r>
              <div className="contact-cal-card">
                <iframe
                  src="https://calendly.com/shahidkhizar1403/30min"
                  title="Book a Fit Call — Realtor-Go"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: "none", minHeight: 900 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Alternate contact */}
        <section className="band contact-alt-section" aria-labelledby="h-alt-contact">
          <div className="wrap">
            <div className="contact-alt" data-r>
              <div className="contact-alt-text">
                <h2 id="h-alt-contact">Prefer <em>email</em>?</h2>
                <p>
                  Drop a line with your role, the CRM you use now, and roughly
                  how many contacts you have. I&apos;ll reply within one business day.
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
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
