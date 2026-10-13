import { delay } from "./site";

const steps = [
  ["You sign up", "A big CRM with every feature, and a contract to match."],
  ["Setup stalls", "Pipelines, campaigns and texting rules take weeks you don't have."],
  ["Nothing goes out", "Contacts sit in the database. Follow-up depends on you remembering."],
  ["You pay anyway", "Month after month, for a tool that stores names and sends nothing."],
];
const quotes = [
  "Zero support after the sale.",
  "Lock you into a 14-month contract.",
  "Requires constant training.",
  "Smart plans are very technical and cumbersome to set up.",
];

export default function Problem() {
  return (
    <section className="band band-pine" aria-labelledby="h-loop">
      <div className="wrap">
        <div className="sec-head" data-r>
          <p className="eyebrow">Why CRMs go unused</p>
          <h2 id="h-loop">The problem was never the software. It&apos;s the <em>setup nobody finishes.</em></h2>
        </div>
        <ol className="loop">
          {steps.map(([t, d], i) => (
            <li key={t} data-r style={delay(i)}>
              <span className="n" aria-hidden="true">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
        <p className="again">Then the next CRM, and the same four steps</p>
        <div className="quotes" data-r>
          {quotes.map((q) => <blockquote key={q}>&ldquo;{q}&rdquo;</blockquote>)}
        </div>
        <span className="src">From verified reviews of popular real estate CRMs on Capterra.</span>
      </div>
    </section>
  );
}
