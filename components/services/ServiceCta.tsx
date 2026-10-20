import { ArrowRight, Check } from "@/components/Icons";
import { SITE, delay } from "@/components/site";

interface ServiceCtaProps {
  headline?: string;
  subhead?: string;
}

export default function ServiceCta({
  headline = "Ready to put your CRM & follow-up on autopilot?",
  subhead = "Book a 20-minute fit call. We'll look at your current lead flow, audit your pipeline, and outline the exact GoHighLevel architecture for your market.",
}: ServiceCtaProps) {
  return (
    <section className="band band-pine cta-band" aria-labelledby="cta-heading">
      <div className="wrap">
        <div className="closing-box text-center">
          <div data-r style={delay(0)}>
            <span className="eyebrow">Get Started</span>
            <h2 id="cta-heading">{headline}</h2>
            <p className="closing-sub">{subhead}</p>
          </div>

          <div data-r style={delay(1)} className="cta-row justify-center">
            <a className="btn btn-primary" href={SITE.bookingUrl}>
              Book a Free Strategy Call <ArrowRight />
            </a>
            <a className="btn btn-ghost" href={`mailto:${SITE.email}`}>
              Email {SITE.email}
            </a>
          </div>

          <div data-r style={delay(2)} className="fine cta-trust-row justify-center">
            <span><Check /> Month-to-month freedom</span>
            <span><Check /> Complete data export anytime</span>
            <span><Check /> Supported by the builder directly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
