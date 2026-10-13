"use client";

import { useState } from "react";
import { ArrowRight, Check } from "./Icons";
import { SITE, delay } from "./site";

type Level = "soft" | "build";

const plans = [
  {
    who: "1 user",
    name: "Solo",
    price: { soft: "$197", build: "$397" },
    setup: "Setup $997 one time",
    items: [
      "Agent or loan officer edition",
      "Contacts moved over, messages written with you",
      "Texting registration and consent wording",
      "Support from me directly",
    ],
    buildItem: "Up to 2 changes or new builds a month",
    feature: false,
  },
  {
    who: "Up to 10 users",
    name: "Team",
    price: { soft: "$497", build: "$897" },
    setup: "Setup from $1,997 one time",
    items: [
      "Everything in Solo, for the whole team",
      "Lead routing between team members",
      "Team training call",
      "Shared pipeline and reporting",
    ],
    buildItem: "Up to 4 changes a month, plus a monthly results call",
    feature: true,
  },
];

export default function Pricing() {
  const [level, setLevel] = useState<Level>("soft");

  return (
    <section className="band band-pine" id="pricing" aria-labelledby="h-pricing">
      <div className="wrap">
        <div className="price-top" data-r>
          <div className="sec-head">
            <p className="eyebrow">Pricing</p>
            <h2 id="h-pricing">Straightforward, <em>month to month.</em></h2>
            <p>
              Pick software and support only, or add monthly build work: new campaigns, pages and changes as your
              business moves.
            </p>
          </div>
          <div className="tabs" role="group" aria-label="Plan level">
            <button type="button" aria-pressed={level === "soft"} onClick={() => setLevel("soft")}>
              Software &amp; support
            </button>
            <button type="button" aria-pressed={level === "build"} onClick={() => setLevel("build")}>
              With monthly build
            </button>
          </div>
        </div>

        <div className="plans">
          {plans.map((p, i) => (
            <article className={`plan${p.feature ? " feature" : ""}`} key={p.name} data-r style={delay(i)}>
              <span className="who">{p.who}</span>
              <h3>{p.name}</h3>
              <div className="price"><b>{p.price[level]}</b><span>/ month</span></div>
              <p className="setup">{p.setup}</p>
              <ul>
                {p.items.map((item) => <li key={item}><Check />{item}</li>)}
                {level === "build" && <li className="add"><Check />{p.buildItem}</li>}
              </ul>
              <a className={`btn ${p.feature ? "btn-primary" : "btn-ghost"}`} href={SITE.bookingUrl}>
                Book a fit call <ArrowRight />
              </a>
            </article>
          ))}
        </div>

        <div className="founding" data-r>
          <b>Founding clients</b>
          <p>
            My first clients get no setup fee, with a 3-month minimum on the monthly build plan. In return, I ask
            for honest feedback and permission to share the results.
          </p>
          <a className="btn" href={SITE.bookingUrl}>Ask about it <ArrowRight /></a>
        </div>
        <div className="price-notes">
          <span>Texting and calling are billed at cost to your own card: about $0.0075 per text segment in the US and Canada.</span>
          <span>Prices in USD.</span>
        </div>
      </div>
    </section>
  );
}
