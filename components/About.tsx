import Logo from "./Logo";

const facts = [
  ["Background", "Computer science"],
  ["Also", "Co-founder, A+ Active Services"],
  ["Based in", "Pakistan, working US hours"],
  ["Support", "Same business day, from me"],
];

export default function About() {
  return (
    <section className="band band-light" id="about" aria-labelledby="h-about">
      <div className="wrap">
        <div className="about">
          <div className="about-card" data-r>
            <div className="mono-k" aria-hidden="true"><Logo /></div>
            <h3>Khizar Shahid<small>Sets up your account</small></h3>
            <dl className="facts">
              {facts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="about-copy" data-r>
            <p className="eyebrow">Who sets this up</p>
            <h2 id="h-about">You&apos;ll talk to me, <em>not a ticket queue.</em></h2>
            <p>
              I&apos;m Khizar. I co-founded <strong>A+ Active Services</strong>, a marketing agency for US healthcare
              practices, and co-host the Digital Health Podcast. I set up CRMs and follow-up systems, and I answer the
              support messages myself.
            </p>
            <p>
              The CRM runs on HighLevel, a platform used by millions of businesses. What you&apos;re paying me for is
              everything around it: the setup, the real estate and mortgage campaigns, the messages written with you,
              and someone who picks up when something breaks.
            </p>
            <div className="now">
              <b>Where I am right now</b>
              <p>
                I&apos;m new to real estate and mortgage. My first clients get founding pricing, and I&apos;ll share what I
                learn from their accounts here, without names.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
