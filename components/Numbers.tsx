import { SITE, delay } from "./site";

function Bar({ label, value, hi }: { label: string; value: number; hi?: boolean }) {
  return (
    <div className={`bar${hi ? " hi" : ""}`}>
      <span className="lab">{label}</span>
      <span className="track"><i style={{ width: `${value}%` }} /></span>
      <span className="val">{value}%</span>
    </div>
  );
}

export default function Numbers() {
  return (
    <section className="band band-light" aria-labelledby="h-money">
      <div className="wrap">
        <div className="sec-head" data-r>
          <p className="eyebrow">The business you&apos;ve already earned</p>
          <h2 id="h-money">Your next deal is probably someone you <em>already helped.</em></h2>
          <p>
            Past clients like you. Most of them still end up with someone else, because after closing nothing
            reminds you to stay in touch.
          </p>
        </div>
        <div className="numbers">
          <div className="num" data-r>
            <span className="who">Real estate agents</span>
            <span className="fig">
              <span className="was">85%</span><span className="to">→</span><span className="hi">27%</span>
            </span>
            <div className="bars">
              <Bar label="Sellers who say they'd use their agent again" value={85} />
              <Bar label="Sellers who actually did" value={27} hi />
            </div>
            <cite>
              NAR buyer and seller data, via{" "}
              <a href={SITE.sources.nar} target="_blank" rel="noopener noreferrer">Real Estate News</a>
            </cite>
          </div>
          <div className="num dark" data-r style={delay(1)}>
            <span className="who">Mortgage loan officers</span>
            <span className="fig"><span className="hi">28%</span></span>
            <div className="bars">
              <Bar label="Refinancing borrowers who stayed with their servicer, Q3 2025" value={28} hi />
              <Bar label="Went somewhere else" value={72} />
            </div>
            <p>That 28% was the highest share in about three and a half years.</p>
            <cite>
              ICE Mortgage Monitor, via{" "}
              <a href={SITE.sources.ice} target="_blank" rel="noopener noreferrer">The Close</a>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
