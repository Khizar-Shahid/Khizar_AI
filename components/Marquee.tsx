const items = [
  "Missed-call text-back",
  "Instant lead reply",
  "One inbox",
  "Booking & reminders",
  "Open house follow-up",
  "Milestone texts",
  "Rate-drop messages",
  "Home anniversaries",
  "Reviews after closing",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-label="What runs in every account">
      {[0, 1].map((n) => (
        <ul key={n} aria-hidden={n === 1}>
          {items.map((t) => <li key={t}>{t}</li>)}
        </ul>
      ))}
    </div>
  );
}
