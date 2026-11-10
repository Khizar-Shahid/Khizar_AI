import type React from "react";

// Edit these in one place.
export const SITE = {
  email: "info@realtor-go.com",
  bookingUrl: "/contact", // Leads to contact page with embedded calendar
  calendarUrl: "https://calendly.com/shahidkhizar1403/30min",
  confirmationUrl: "/confirmation",
  sources: {
    nar: "https://www.realestatenews.com/2023/09/04/agents-decoded-your-database-is-a-goldmine-if-you-use-it",
    ice: "https://theclose.com/news-refinance-retention-reaches-highest-level/",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/khizar-shahid-6582b3287",
    instagram: "https://www.instagram.com/its_khizarshahid_/",
    facebook: "https://www.facebook.com/profile.php?id=61594006212273",
    x: "https://x.com/itsKhizarshahid",
    tiktok: "https://www.tiktok.com/@itskhizarshahid",
    youtube: "https://www.youtube.com/@its_Khizarr_Shahid",
  },
};

// Stagger step for scroll-reveal: <div data-r style={delay(2)}>
export const delay = (i: number) => ({ "--d": i }) as React.CSSProperties;
