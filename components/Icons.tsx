import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = () => <Icon><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
export const Check = () => <Icon><path d="M5 12.5l4.5 4.5L19 7.5" /></Icon>;
export const Cross = () => <Icon><path d="M6 6l12 12M18 6L6 18" /></Icon>;
export const Plus = () => <Icon><path d="M12 5v14M5 12h14" /></Icon>;
export const Minus = () => <Icon><path d="M6 12h12" /></Icon>;
export const ChevronDown = () => <Icon><path d="M6 9l6 6 6-6" /></Icon>;
export const Menu = () => <Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
export const Inbox = () => <Icon><path d="M3 13l3-8h12l3 8v6H3z" /><path d="M3 13h5l1.5 3h5L16 13h5" /></Icon>;
export const PhoneMissed = () => (
  <Icon>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    <path d="M16 3l5 5M21 3l-5 5" />
  </Icon>
);
export const Bolt = () => <Icon><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></Icon>;
export const Calendar = () => <Icon><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M8.5 15l2.5 2.5 4.5-4.5" /></Icon>;
export const Star = () => <Icon><path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8z" /></Icon>;
export const Shield = () => <Icon><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.500-8-9V6z" /><path d="M8.500 12l2.500 2.500 4.500-4.500" /></Icon>;
