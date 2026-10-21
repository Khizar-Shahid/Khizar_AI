import { ArrowRight } from "./Icons";
import { SITE } from "./site";

const faqs = [
  ["Do I have to leave Follow Up Boss?", "Not necessarily. If you're happy with Follow Up Boss, it can connect to this CRM so you keep it and add the follow-up you're missing. If you're paying for it and not using it, moving over may save you money. We'll work out which on the fit call."],
  ["Does it work with my loan software?", "Arive on the Pro plan connects, so loan milestones can send texts automatically. Encompass doesn't offer a direct connection we can use, so past clients come over by export and milestone updates are sent from the pipeline instead."],
  ["Are the texts legal?", "Every form includes consent wording, every message honours STOP, and your number goes through carrier registration before marketing texts go out. This isn't legal advice, so please run the consent wording past your broker or compliance person."],
  ["Will messages sound like a robot?", "No. We write them together on a call, in your words. The system makes sure they go out on time. It doesn't pretend to be you in long conversations."],
  ["What if I want to leave?", "Give 30 days' notice after any minimum term. Your contacts are yours, and I'll export them for you."],
];

export default function Faq() {
  return (
    <section className="band band-light alt" id="faq" aria-labelledby="h-faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="sec-head" data-r>
            <p className="eyebrow">Questions</p>
            <h2 id="h-faq">Before <em>you book.</em></h2>
            <p>Anything not covered here, ask on the fit call. It&apos;s 20 minutes.</p>
            <a className="btn btn-primary" href={SITE.bookingUrl}>Book a fit call <ArrowRight /></a>
          </div>
          <div className="faq" data-r>
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary><h3>{q}</h3></summary>
                <div className="ans"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
