import { Check, Cross, Minus } from "./Icons";
import { delay } from "./site";

const strong = [
  ["Texting, calls, email, booking, pages and reviews", "All in one place, one bill"],
  ["Setup", "Done for you, contacts included"],
  ["Past-client and refinance follow-up", "Built in, written in your voice"],
  ["Contract", "Month to month"],
];
const weak: [string, string, boolean][] = [
  ["Home search (IDX) on your website", "Not built in; needs a separate IDX tool", true],
  ["Transaction paperwork and commission splits", "Not included; keep your current tool", true],
  ["Live sync with Encompass", "Not available; past clients come over by export", true],
  ["Zillow Premier Agent routing", "Works through a connection, not natively", false],
];

export default function Limits() {
  return (
    <section className="band band-light alt" aria-labelledby="h-limits">
      <div className="wrap">
        <div className="sec-head" data-r>
          <p className="eyebrow">Straight answers</p>
          <h2 id="h-limits">What it does well, and <em>what it doesn&apos;t.</em></h2>
          <p>Better to hear it now than three months in.</p>
        </div>
        <div className="limits">
          <div className="lim yes" data-r>
            <h3>Where it&apos;s strong</h3>
            <ul>
              {strong.map(([a, b]) => (
                <li key={a}><span className="m"><Check /></span><div><b>{a}</b><span>{b}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="lim no" data-r style={delay(1)}>
            <h3>Where it isn&apos;t</h3>
            <ul>
              {weak.map(([a, b, no]) => (
                <li key={a}>
                  <span className="m">{no ? <Cross /> : <Minus />}</span>
                  <div><b>{a}</b><span>{b}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
