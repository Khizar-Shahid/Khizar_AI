"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ChevronDown, Cross, Menu } from "./Icons";
import { SITE } from "./site";

const serviceCategories = [
  {
    category: "CRM Setup",
    items: [
      {
        href: "/services/real-estate-crm-setup",
        label: "Real Estate CRM Setup",
        desc: "Agents, teams and brokerages",
      },
      {
        href: "/services/mortgage-crm-setup",
        label: "Mortgage CRM Setup",
        desc: "Brokers and loan officers",
      },
      {
        href: "/services/mortgage-loan-officer-crm",
        label: "Loan Officer CRM",
        desc: "Borrower pipelines & speed-to-lead",
      },
      {
        href: "/services/gohighlevel-real-estate-crm-setup",
        label: "GoHighLevel Real Estate CRM",
        desc: "Turnkey GHL snapshot & build",
      },
    ],
  },
  {
    category: "Automations",
    items: [
      {
        href: "/services/crm-workflow-automation",
        label: "CRM Workflow Automation",
        desc: "Routing, reminders & triggers",
      },
      {
        href: "/services/real-estate-lead-follow-up-automation",
        label: "Real Estate Follow-Up",
        desc: "Speed-to-lead & 365-day nurture",
      },
      {
        href: "/services/mortgage-lead-follow-up-automation",
        label: "Mortgage Follow-Up",
        desc: "1003 recovery & borrower updates",
      },
      {
        href: "/services/real-estate-marketing-automation",
        label: "Marketing Automation",
        desc: "Funnels, newsletters & ads sync",
      },
    ],
  },
  {
    category: "Migrations",
    items: [
      {
        href: "/services/crm-migration-services",
        label: "CRM Migration Services",
        desc: "Zero-loss data & field mapping",
      },
    ],
  },
];


export default function Header({ theme }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`top${theme === "dark" ? " header-dark" : ""}${scrolled ? " scrolled" : ""}${
        open ? " open" : ""
      }`}
    >
      <div className="topin">
        <a className="mark" href="/" aria-label="Realtor-Go home" onClick={closeAll}>
          <Logo height={42} />
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
          <a href="/#inside" onClick={closeAll}>
            What&apos;s inside
          </a>
          <a href="/#how" onClick={closeAll}>
            How it works
          </a>
          <a href="/#pricing" onClick={closeAll}>
            Pricing
          </a>

          {/* Services Dropdown Item */}
          <div
            className={`nav-dropdown${servicesOpen ? " active" : ""}`}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-dropdown-trigger-row">
              <a href="/services" className="nav-dropdown-link" onClick={closeAll}>
                Services
              </a>
              <button
                type="button"
                className="nav-dropdown-btn"
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((v) => !v);
                }}
              >
                <ChevronDown />
              </button>
            </div>

            <div className={`nav-dropdown-menu${servicesOpen ? " show" : ""}`}>
              <div className="nav-dropdown-header">
                <a href="/services" className="nav-dropdown-hub-link" onClick={closeAll}>
                  <span>Explore all services overview</span>
                  <span className="hub-arrow" aria-hidden="true">→</span>
                </a>
              </div>

              <div className="nav-dropdown-grid">
                {serviceCategories.map((cat) => (
                  <div key={cat.category} className="nav-dropdown-col">
                    <span className="nav-col-title">{cat.category}</span>
                    <ul className="nav-col-list">
                      {cat.items.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} onClick={closeAll}>
                            <span className="nav-item-title">{item.label}</span>
                            <span className="nav-item-desc">{item.desc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="/#faq" onClick={closeAll}>
            FAQ
          </a>

          <a className="btn btn-primary btn-sm" href={SITE.bookingUrl} onClick={closeAll}>
            Book a fit call
          </a>
        </nav>
      </div>
    </header>
  );
}
