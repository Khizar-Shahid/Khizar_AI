"use client";

import { useState } from "react";
import { Bolt, Calendar, Check, Inbox, PhoneMissed, Shield, Star } from "./Icons";
import { delay } from "./site";

const base = [
  [<Inbox key="i" />, "One inbox", "Texts, calls, email, Facebook, Instagram and Google messages"],
  [<PhoneMissed key="i" />, "Missed-call text-back", "A reply in about a minute, while you're with a client"],
  [<Bolt key="i" />, "Instant lead reply", "Website, Zillow, Realtor.com and ad leads, answered right away"],
  [<Calendar key="i" />, "Booking and reminders", "A calendar link, plus reminders that cut no-shows"],
  [<Star key="i" />, "Reviews after closing", "An automatic ask, sent at the right moment"],
  [<Shield key="i" />, "Texting done properly", "Consent wording, opt-outs and carrier registration set up for you"],
] as const;

type Edition = {
  tab: string;
  eyebrow: string;
  title: string;
  stages: string[];
  items: [string, string][];
  note: string;
};

const editions: Edition[] = [
  {
    tab: "Real estate agents",
    eyebrow: "Agent edition",
    title: "For agents, teams and broker-owners",
    stages: ["New lead", "Contacted", "Appointment", "Active", "Under contract", "Closed"],
    items: [
      ["Open house follow-up", "A tablet sign-in that sends a thank-you the same day."],
      ["Long-term nurture", "Buyers and sellers who aren't ready hear from you for a year, not two texts."],
      ["Under-contract updates", "Clients know what's next; you get reminders for each step."],
      ["Home anniversaries", "A yearly note, a value update offer, and a nudge to call."],
      ["Referral asks", "Sent a month after closing, in your words."],
    ],
    note: "Need home search on your website? Tell me on the call. It needs a separate IDX tool, which I'll quote alongside.",
  },
  {
    tab: "Loan officers",
    eyebrow: "Loan officer edition",
    title: "For independent LOs, brokers and branch managers",
    stages: ["Lead", "Pre-qual", "Pre-approved", "Application", "Clear to close", "Funded"],
    items: [
      ["Pre-approval nurture", "Buyers who go quiet after pre-approval keep hearing from you."],
      ["Milestone texts", "\"Clear to close\" goes to the borrower and the agent without you typing it."],
      ["Rate-drop messages", "Past clients hear from you first when rates fall below theirs."],
      ["Loan anniversaries and equity checks", "A reason to talk every year."],
      ["Unfinished applications", "Gentle reminders until they finish or opt out."],
    ],
    note: "Live milestone updates work with Arive (Pro plan). Encompass users start from an export of past clients.",
  },
];

export default function Inside() {
  const [active, setActive] = useState(0);
  const ed = editions[active];

  return (
    <section className="band band-light" id="inside" aria-labelledby="h-inside">
      <div className="wrap">
        <div className="sec-head" data-r>
          <p className="eyebrow">What&apos;s inside</p>
          <h2 id="h-inside">One system instead of five tools. Built for <em>how you actually work.</em></h2>
          <p>Every account comes with the basics running. Then you get the edition built for your side of the deal.</p>
        </div>

        <div className="base">
          {base.map(([icon, b, s], i) => (
            <div className="feat" key={b} data-r style={delay(i % 3)}>
              <span className="ico">{icon}</span>
              <b>{b}</b>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div data-r>
          <div className="ed-head">
            <h3>Then the edition for your side of the deal.</h3>
            <div className="tabs" role="tablist" aria-label="Edition">
              {editions.map((e, i) => (
                <button
                  key={e.tab}
                  type="button"
                  role="tab"
                  id={`ed-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="ed-panel"
                  onClick={() => setActive(i)}
                >
                  {e.tab}
                </button>
              ))}
            </div>
          </div>

          <article className="ed" key={ed.eyebrow} id="ed-panel" role="tabpanel" aria-labelledby={`ed-tab-${active}`}>
            <div>
              <p className="eyebrow">{ed.eyebrow}</p>
              <h4>{ed.title}</h4>
              <ol className="stages" aria-label="Pipeline stages">
                {ed.stages.map((s, i) => (
                  <li key={s}><i aria-hidden="true">{i + 1}</i>{s}</li>
                ))}
              </ol>
            </div>
            <div>
              <ul className="items">
                {ed.items.map(([b, t]) => (
                  <li key={b}><Check /><div><b>{b}</b><span>{t}</span></div></li>
                ))}
              </ul>
              <p className="note">{ed.note}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
