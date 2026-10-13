const facts = [
  ["~10 days", "From fit call to a live account"],
  ["~1 min", "Missed-call text-back, while you're with a client"],
  ["Monthly", "No long contract, contacts yours to export"],
  ["1 person", "Sets it up and answers your support messages"],
];

export default function FactsStrip() {
  return (
    <section className="facts-strip-section" aria-label="Key Facts">
      <div className="wrap">
        <div className="strip">
          {facts.map(([big, small]) => (
            <div key={big}>
              <b>{big}</b>
              <span>{small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
