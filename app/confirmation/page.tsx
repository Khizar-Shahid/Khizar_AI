import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, Inbox, Shield, Star } from "@/components/Icons";
import { SITE, delay } from "@/components/site";

export const metadata: Metadata = {
  title: "Inquiry Received & Confirmed | Realtor-Go",
  description:
    "Thank you for contacting Realtor-Go. Our team has received your message and will review your requirements within one business day.",
  alternates: {
    canonical: "/confirmation",
  },
  robots: {
    index: false,
    follow: false,
  },
};

interface ConfirmationPageProps {
  searchParams?: {
    name?: string;
    email?: string;
    service?: string;
  };
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const name = searchParams?.name?.trim();
  const email = searchParams?.email?.trim();
  const service = searchParams?.service?.trim();

  return (
    <>
      <Header theme="dark" />
      <main id="top">
        <section className="band confirmation-band" aria-labelledby="confirmation-h1">
          <div className="wrap">
            <div className="confirmation-grid">
              {/* Left Column: Heading, intro, and next steps */}
              <div className="confirmation-head">
                <div data-r style={delay(0)}>
                  <span className="status-badge">
                    <Check /> Inquiry received &amp; logged
                  </span>
                </div>

                <div data-r style={delay(1)}>
                  <h1 id="confirmation-h1">
                    {name ? (
                      <>
                        You&apos;re all set, {name}.<br />
                        <em>We&apos;ve got your details.</em>
                      </>
                    ) : (
                      <>
                        Inquiry received.<br />
                        <em>We&apos;re reviewing your details.</em>
                      </>
                    )}
                  </h1>
                </div>

                <div data-r style={delay(2)}>
                  <p className="lede">
                    Thank you for reaching out to Realtor-Go. We take every project inquiry seriously and evaluate your CRM setup and workflow requirements before responding.
                  </p>
                </div>

                {/* 3 Step Timeline */}
                <div className="confirmation-steps">
                  <div className="step-card" data-r style={delay(3)}>
                    <div className="step-num">1</div>
                    <div className="step-info">
                      <h3>Workflow &amp; Requirements Review</h3>
                      <p>
                        Our team examines your requested service {service ? `(${service})` : ""} and reviews CRM architecture to identify the best pipeline configuration and speed-to-lead automations.
                      </p>
                    </div>
                  </div>

                  <div className="step-card" data-r style={delay(4)}>
                    <div className="step-num">2</div>
                    <div className="step-info">
                      <h3>Personalized Strategy Response</h3>
                      <p>
                        Within one business day, we will email you with concrete recommendations, project timelines, and an invitation for a tailored 1-on-1 walkthrough.
                      </p>
                    </div>
                  </div>

                  <div className="step-card" data-r style={delay(5)}>
                    <div className="step-num">3</div>
                    <div className="step-info">
                      <h3>Zero Pressure &amp; Direct Honest Advice</h3>
                      <p>
                        If Realtor-Go and GoHighLevel are a genuine fit for your database, we will share a clear rollout plan. If a different solution fits your immediate stage better, we will tell you straight.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation actions */}
                <div className="confirmation-actions" data-r style={delay(6)}>
                  <a className="btn btn-primary" href="/">
                    Back to homepage <ArrowRight />
                  </a>
                  <a className="btn btn-ghost" href="/#inside">
                    Explore CRM features
                  </a>
                </div>
              </div>

              {/* Right Column: Sticky Summary Card */}
              <aside className="confirmation-summary-card" data-r style={delay(3)}>
                <div className="summary-card-header">
                  <span className="card-tag">Submission Summary</span>
                  <h3>Project Inquiry</h3>
                  <p>1-on-1 CRM strategy &amp; workflow design</p>
                </div>

                <div className="summary-details">
                  {service && (
                    <div className="detail-row">
                      <div className="detail-icon" aria-hidden="true">
                        <Star />
                      </div>
                      <div className="detail-text">
                        <strong>Service Requested</strong>
                        <span>{service}</span>
                      </div>
                    </div>
                  )}

                  <div className="detail-row">
                    <div className="detail-icon" aria-hidden="true">
                      <Inbox />
                    </div>
                    <div className="detail-text">
                      <strong>Confirmation Sent To</strong>
                      <span>{email ? email : "Your provided email inbox"}</span>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-icon" aria-hidden="true">
                      <Shield />
                    </div>
                    <div className="detail-text">
                      <strong>Expected Response</strong>
                      <span>Within 1 business day (Mon–Fri)</span>
                    </div>
                  </div>
                </div>

                <div className="summary-tip">
                  <h4>Have database stats handy?</h4>
                  <p>
                    If you know roughly how many past leads or contacts sit inactive in your spreadsheets or current CRM, feel free to reply directly to our confirmation email so we can prepare revenue projections.
                  </p>
                </div>

                <div className="summary-footer">
                  <span>Need immediate assistance or have urgent questions?</span>
                  <span>
                    Email us directly at{" "}
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
