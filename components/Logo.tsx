export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="28"
      height="28"
      aria-hidden="true"
      fill="currentColor"
      className={className}
      style={{ width: "28px", height: "28px", flexShrink: 0 }}
    >
      <path d="M14 8l9 11-3 5-9-11z" />
      <path d="M34 8l-9 11 3 5 9-11z" />
      <path d="M14 40l9-11-3-5-9 11z" />
      <path d="M34 40l-9-11 3-5 9 11z" />
      <rect x="21.5" y="18" width="5" height="12" rx="2.5" />
    </svg>
  );
}
