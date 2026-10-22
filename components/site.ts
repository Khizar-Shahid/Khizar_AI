import type React from "react";

// Edit these in one place.
export const SITE = {
  email: "hello@realtor-go.com", // TODO: replace with your real address
  bookingUrl: "/contact", // Leads to contact page with embedded calendar
  calendarUrl: "https://calendly.com/shahidkhizar1403/30min",
  confirmationUrl: "/confirmation",
  sources: {
    nar: "https://www.realestatenews.com/2023/09/04/agents-decoded-your-database-is-a-goldmine-if-you-use-it",
    ice: "https://theclose.com/news-refinance-retention-reaches-highest-level/",
  },
};

// Stagger step for scroll-reveal: <div data-r style={delay(2)}>
export const delay = (i: number) => ({ "--d": i }) as React.CSSProperties;
