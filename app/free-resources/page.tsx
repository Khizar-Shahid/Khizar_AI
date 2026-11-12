import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FreeResourcesForm from "@/components/FreeResourcesForm";
import { BASE_URL } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Free Resources | Realtor-Go — Tracker and Follow-Up Kit",
  description:
    "Get Realtor-Go’s free Tracker and Follow-Up Kit. Enter your email and we will send the PDF playbook and spreadsheet so you can track leads and follow up with consistency.",
  alternates: {
    canonical: `${BASE_URL}/free-resources`,
  },
  openGraph: {
    title: "Free Resources | Realtor-Go — Tracker and Follow-Up Kit",
    description:
      "Get Realtor-Go’s free Tracker and Follow-Up Kit. Enter your email and we will send the PDF playbook and spreadsheet so you can track leads and follow up with consistency.",
    url: `${BASE_URL}/free-resources`,
    type: "website",
  },
};

export default function FreeResourcesPage() {
  return (
    <div className="contact-page-wrapper">
      <Header theme="dark" />
      <main className="contact-main">
        <div className="contact-wireframe-grid">
          <div className="contact-text-card">
            <p className="eyebrow">Free resources</p>
            <h1>
              Tracker and Follow-Up Kit, <em>in your inbox</em>.
            </h1>
            <p className="contact-lede">
              Two practical files for agents who want a simple system: a Follow-Up Kit you can run this week, and a Tracker spreadsheet to keep every lead moving.
            </p>

            <div className="contact-value-points">
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Follow-Up Kit (PDF)</strong>
                  <p>Scripts, cadence, and a checklist so no inquiry sits unanswered.</p>
                </div>
              </div>
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Tracker (spreadsheet)</strong>
                  <p>Log conversations, next steps, and status in one place.</p>
                </div>
              </div>
              <div className="contact-point-item">
                <span className="point-dot" />
                <div>
                  <strong>Sent by email</strong>
                  <p>Submit the form and we email both file links within a minute.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <FreeResourcesForm />
          </div>
        </div>
      </main>

      <section className="band band-pine contact-alt-section" aria-labelledby="h-resources-help">
        <div className="wrap">
          <div className="contact-alt" data-r>
            <div className="contact-alt-text">
              <h2 id="h-resources-help">Want the kit <em>built into your CRM</em>?</h2>
              <p>
                If you would rather have follow-up and tracking run automatically in GoHighLevel, tell us about your pipeline and we will map a setup.
              </p>
            </div>
            <div className="contact-alt-actions">
              <a className="btn btn-primary" href="/contact">
                Talk to the team
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
