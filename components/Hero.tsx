import { ArrowRight, Bolt, Calendar, Check } from "./Icons";
import { SITE } from "./site";

const columns = [
  {
    title: "New lead",
    cards: [
      { name: "Dana Whitfield", meta: "Missed call · 2:14 pm", tag: "Auto-reply sent", live: true },
      { name: "Marcus Reed", meta: "Zillow · Seller" },
      { name: "Priya Shah", meta: "Website · 0–3 mo" },
    ],
  },
  {
    title: "Booked",
    cards: [
      { name: "Emily Parker", meta: "Buyer consult · Thu" },
      { name: "Omar Khan", meta: "Listing appt · Sat" },
    ],
  },
  {
    title: "Contract",
    cards: [{ name: "Grace Ward", meta: "Inspection done", tag: "Update sent" }],
  },
];

const facts = [
  ["~10 days", "From fit call to a live account"],
  ["~1 min", "Missed-call text-back, while you're with a client"],
  ["Monthly", "No long contract, contacts yours to export"],
  ["1 person", "Sets it up and answers your support messages"],
];

export default function Hero() {
  return (
    <section className="band hero" aria-labelledby="h1">
      <div className="wrap">
        <div className="hero-head">
          <p className="pill"><i />CRM for real estate agents &amp; loan officers</p>
          <h1 id="h1">
            Every lead answered. <em>Every past client remembered.</em>
          </h1>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="lede">
              One CRM for texting, calls, booking, follow-up and past clients, set up for you from day one and
              written in your voice. Month to month, and supported by the person who set it up.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={SITE.bookingUrl}>Book a 20-minute fit call <ArrowRight /></a>
              <a className="btn btn-ghost" href="#inside">See what&apos;s inside</a>
            </div>
            <p className="fine">
              <span><Check />US &amp; Canada</span>
              <span><Check />No long contract</span>
              <span><Check />Your contacts are yours to export any time</span>
            </p>
          </div>

          <div className="stage">
            <div
              className="app"
              role="img"
              aria-label="Sample CRM account: a pipeline with leads in New Lead, Booked and Contract, and a text thread where a missed call gets an automatic reply within a minute and the caller books a time."
            >
              <div className="app-bar">
                <span className="dots"><i /><i /><i /></span>
                <span className="app-title">Buyers &amp; Sellers pipeline</span>
                <span className="sample">Sample account</span>
              </div>
              <div className="app-body">
                <div className="board">
                  {columns.map((col) => (
                    <div className="col" key={col.title}>
                      <h4>{col.title}</h4>
                      {col.cards.map((c) => (
                        <div className={`card${"live" in c && c.live ? " live" : ""}`} key={c.name}>
                          <b>{c.name}</b>
                          <span>{c.meta}</span>
                          {"tag" in c && c.tag ? <em className="tag">{c.tag}</em> : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="thread" aria-hidden="true">
                  <div className="thread-h"><span>Dana Whitfield</span><span>(614) 555-0142</span></div>
                  <p className="sys">Missed call · 2:14 pm</p>
                  <div className="bub out">
                    Hi, it&apos;s Sarah. Sorry I missed your call, I&apos;m with a client. What can I help you with?
                    <small>2:15 pm · automatic</small>
                  </div>
                  <div className="bub in">
                    Hi! Saw your sign on Linden St. Is it still available?<small>2:21 pm</small>
                  </div>
                  <div className="bub out new">
                    It is! Want to see it this week? Grab a time here and I&apos;ll meet you there.
                    <small>2:23 pm · Sarah</small>
                  </div>
                  <p className="sys">Showing booked · Thu 5:30 pm</p>
                </div>
              </div>
            </div>
            <div className="float f2" aria-hidden="true">
              <span className="ico"><Bolt /></span>
              <div><b>Auto-reply sent</b><span>1 min after the missed call</span></div>
            </div>
            <div className="float f1" aria-hidden="true">
              <span className="ico"><Calendar /></span>
              <div><b>Showing booked</b><span>Thu 5:30 pm · reminder set</span></div>
            </div>
          </div>
        </div>

        <div className="strip">
          {facts.map(([big, small]) => (
            <div key={big}><b>{big}</b><span>{small}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
