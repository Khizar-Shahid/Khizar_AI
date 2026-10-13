import { delay } from "./site";

const steps = [
  ["Day 1 · 20 minutes", "Fit call", "What you use now, what it costs, and where your leads come from. If this CRM isn't right for you, I'll say so."],
  ["Days 2–10", "Set up for you", "Your contacts moved over, your pipeline built, texting registered, and every message written with you so it sounds like you."],
  ["Every month after", "Running and improving", "Support from me directly, changes when you need them, and a monthly look at replies, bookings and past clients who answered."],
];

export default function HowItWorks() {
  return (
    <section className="band" id="how" aria-labelledby="h-how">
      <div className="wrap">
        <div className="sec-head" data-r>
          <p className="eyebrow">How it works</p>
          <h2 id="h-how">Live in <em>about 10 days.</em> Looked after every month.</h2>
        </div>
        <ol className="steps">
          {steps.map(([when, title, body], i) => (
            <li key={title} data-r style={delay(i)}>
              <span className="n" aria-hidden="true">0{i + 1}</span>
              <span className="when">{when}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
