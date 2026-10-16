import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, Calendar, Check, Inbox, Shield } from "@/components/Icons";
import { SITE, delay } from "@/components/site";

export const metadata: Metadata = {
  title: "Call Scheduled & Confirmed | khizar.ai",
  description:
    "Your 20-minute fit call is confirmed. A calendar invitation with the meeting details has been sent to your inbox.",
  robots: {
    index: false,
    follow: false,
  },
};

interface ConfirmationPageProps {
  searchParams?: {
    name?: string;
    email?: string;
    date?: string;
    time?: string;
  };
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const name = searchParams?.name?.trim();
  const date = searchParams?.date?.trim();
  const time = searchParams?.time?.trim();

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
                    <Check /> Call requested &amp; confirmed
                  </span>
                </div>

                <div data-r style={delay(1)}>
                  <h1 id="confirmation-h1">
                    {name ? (
                      <>
                        You&apos;re all set, {name}.<br />
                        <em>We&apos;re looking forward to talking.</em>
                      </>
                    ) : (
                      <>
                        You&apos;re on the calendar.<br />
                        <em>We&apos;re looking forward to talking.</em>
                      </>
                    )}
                  </h1>
                </div>

                <div data-r style={delay(2)}>
                  <p className="lede">
                    A calendar invitation with your video link has been emailed to you.
                    Here is what to expect and how to get the most out of our 20-minute fit call.
                  </p>
                </div>

                {/* 3 Step Timeline */}
                <div className="confirmation-steps">
                  <div className="step-card" data-r style={delay(3)}>
                    <div className="step-num">1</div>
                    <div className="step-info">
                      <h3>Check your inbox for the calendar invite</h3>
                      <p>
                        We have dispatched an email invitation with the Google Meet / Zoom link. If you do not see it within a few minutes, check your spam or promotions tab.
                      </p>
                    </div>
                  </div>

                  <div className="step-card" data-r style={delay(4)}>
                    <div className="step-num">2</div>
                    <div className="step-info">
                      <h3>What we&apos;ll cover during the call</h3>
                      <p>
                        We will take a quick look at your current lead flow, database size, and walk through how the automated texting and past-client reactivation campaigns would work for your specific business.
                      </p>
                    </div>
                  </div>

                  <div className="step-card" data-r style={delay(5)}>
                    <div className="step-num">3</div>
                    <div className="step-info">
                      <h3>Zero pressure or hard sell</h3>
                      <p>
                        If khizar.ai is a genuine match, we will show you setup and migration timelines. If another tool fits your current stage better, we will tell you honestly.
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
                    Review CRM features
                  </a>
                </div>
              </div>

              {/* Right Column: Sticky Meeting Card */}
              <aside className="confirmation-summary-card" data-r style={delay(3)}>
                <div className="summary-card-header">
                  <span className="card-tag">Call Details</span>
                  <h3>20-minute Fit Call</h3>
                  <p>1-on-1 CRM strategy &amp; workflow review</p>
                </div>

                <div className="summary-details">
                  <div className="detail-row">
                    <div className="detail-icon" aria-hidden="true">
                      <Calendar />
                    </div>
                    <div className="detail-text">
                      <strong>When</strong>
                      <span>
                        {date ? (
                          <>
                            {date} {time ? `at ${time}` : ""}
                          </>
                        ) : (
                          "At the time selected in the calendar"
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-icon" aria-hidden="true">
                      <Inbox />
                    </div>
                    <div className="detail-text">
                      <strong>Where</strong>
                      <span>Video meeting link sent to your inbox</span>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-icon" aria-hidden="true">
                      <Shield />
                    </div>
                    <div className="detail-text">
                      <strong>No commitment</strong>
                      <span>A straightforward conversation to see if the CRM fits</span>
                    </div>
                  </div>
                </div>

                <div className="summary-tip">
                  <h4>Helpful tip</h4>
                  <p>
                    No preparation is required. If you know roughly how many past clients are in your database or phone, that helps us calculate potential deal recoveries on the call.
                  </p>
                </div>

                <div className="summary-footer">
                  <span>Need to reschedule or add a team member?</span>
                  <span>
                    Reply directly to your calendar invite or email{" "}
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
