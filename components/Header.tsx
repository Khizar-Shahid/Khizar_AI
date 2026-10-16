"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Cross, Menu } from "./Icons";
import { SITE } from "./site";

const links = [
  ["/#inside", "What's inside"],
  ["/#how", "How it works"],
  ["/#pricing", "Pricing"],
  ["/#faq", "FAQ"],
];

export default function Header({ theme }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`top${theme === "dark" ? " header-dark" : ""}${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="topin">
        <a className="mark" href="/" aria-label="khizar.ai home" onClick={close}>
          <Logo />
          khizar.ai
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Cross /> : <Menu />}
        </button>
        <nav className="topnav" id="main-nav" aria-label="Main">
          {links.map(([href, label]) => (
            <a href={href} key={href} onClick={close}>{label}</a>
          ))}
          <a className="btn btn-primary btn-sm" href={SITE.bookingUrl} onClick={close}>Book a fit call</a>
        </nav>
      </div>
    </header>
  );
}
