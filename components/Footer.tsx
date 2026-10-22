import Logo from "./Logo";
import { SITE } from "./site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a className="mark" href="/" aria-label="Realtor-Go home"><Logo height={46} /></a>
            <p>A CRM set up for you, for real estate agents and mortgage loan officers in the US and Canada.</p>
          </div>
          <nav className="foot-nav" aria-label="Footer">
            <a href="/#inside">What&apos;s inside</a>
            <a href="/#how">How it works</a>
            <a href="/#pricing">Pricing</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/#faq">FAQ</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </nav>
        </div>
        <div className="foot-fine">
          <span>© {new Date().getFullYear()} Realtor-Go. Runs on HighLevel. Not affiliated with HighLevel, NAR, ICE or any CRM named on this page.</span>
          <span>
            Figures: NAR buyer and seller data via{" "}
            <a href={SITE.sources.nar} target="_blank" rel="noopener noreferrer">Real Estate News</a> (2023); ICE
            Mortgage Monitor via{" "}
            <a href={SITE.sources.ice} target="_blank" rel="noopener noreferrer">The Close</a> (Dec 2025); review
            quotes from Capterra. The sample account shows invented data.
          </span>
        </div>
      </div>
    </footer>
  );
}
