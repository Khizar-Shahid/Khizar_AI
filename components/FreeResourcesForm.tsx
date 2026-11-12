"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "@/components/Icons";

const ROLES = [
  { value: "", label: "Prefer not to say" },
  { value: "buyer", label: "Buyer" },
  { value: "seller", label: "Seller" },
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FreeResourcesForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedRoleLabel = ROLES.find((r) => r.value === formData.role)?.label ?? "Prefer not to say";

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!EMAIL_RE.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSelectRole = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          role: formData.role,
          company: formData.company,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(data.error || "Unable to send the kit. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setSucceeded(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="contact-form" role="status" aria-live="polite">
        <div className="contact-form-head">
          <h2 className="contact-form-title">Check your inbox</h2>
          <p className="contact-form-subtitle">
            We sent the Follow-Up Kit and Tracker to <strong>{formData.email.trim()}</strong>. If you
            do not see them in a minute, look in spam or promotions.
          </p>
        </div>
        <p className="form-privacy-note">
          <span className="option-check" aria-hidden="true">
            <Check />
          </span>{" "}
          Files are linked in the email — no extra download page.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-head">
        <h2 className="contact-form-title">Get the free kit</h2>
        <p className="contact-form-subtitle">
          Enter your details and we will email you the Follow-Up Kit (PDF) and Tracker (spreadsheet).
        </p>
      </div>

      {submitError && (
        <div className="form-alert form-alert-error" role="alert">
          <span>{submitError}</span>
        </div>
      )}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="resource-name" className="form-label">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="resource-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Sarah Jenkins"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "has-error" : ""}`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "resource-name-error" : undefined}
          />
          {errors.name && (
            <span id="resource-name-error" className="field-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="resource-email" className="form-label">
            Email <span className="req">*</span>
          </label>
          <input
            id="resource-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="sarah@yourbrokerage.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "has-error" : ""}`}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "resource-email-error" : undefined}
          />
          {errors.email && (
            <span id="resource-email-error" className="field-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="resource-phone" className="form-label">
            Phone Number <span className="opt">(optional)</span>
          </label>
          <input
            id="resource-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 234-5678"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field" ref={dropdownRef}>
          <label id="resource-role-label" className="form-label">
            Buyer or seller <span className="opt">(optional)</span>
          </label>
          <div className="custom-select-container">
            <button
              type="button"
              className={`custom-select-trigger form-input ${dropdownOpen ? "is-open" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-labelledby="resource-role-label"
              disabled={isSubmitting}
            >
              <span className="selected-value-text">{selectedRoleLabel}</span>
              <span className={`select-arrow-icon ${dropdownOpen ? "arrow-rotate" : ""}`}>
                <ChevronDown />
              </span>
            </button>

            {dropdownOpen && (
              <ul className="custom-select-menu" role="listbox" aria-labelledby="resource-role-label">
                {ROLES.map((option) => {
                  const isSelected = option.value === formData.role;
                  return (
                    <li
                      key={option.value || "none"}
                      role="option"
                      aria-selected={isSelected}
                      className={`custom-select-option ${isSelected ? "is-selected" : ""}`}
                      onClick={() => handleSelectRole(option.value)}
                    >
                      <span className="option-label">{option.label}</span>
                      {isSelected && (
                        <span className="option-check" aria-hidden="true">
                          <Check />
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending kit..." : "Email me the kit"} <ArrowRight />
        </button>
        <p className="form-privacy-note">We only use this to send the kit. No spam.</p>
      </div>
    </form>
  );
}
