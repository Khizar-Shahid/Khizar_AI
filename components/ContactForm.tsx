"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, ChevronDown } from "@/components/Icons";

const SERVICES = [
  "Real Estate CRM Setup",
  "Mortgage CRM Setup",
  "CRM Workflow Automation",
  "Real Estate Lead Follow-Up Automation",
  "Mortgage Lead Follow-Up Automation",
  "Real Estate Marketing Automation",
  "CRM Migration Services",
  "GoHighLevel Real Estate CRM Setup",
  "Mortgage Loan Officer CRM",
  "GoHighLevel for Mortgage",
  "General / Other Inquiries",
];

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService && SERVICES.includes(initialService) ? initialService : SERVICES[0],
    description: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close dropdown on click outside or escape key
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

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }
    if (!formData.service.trim()) {
      errs.service = "Please select a service.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const handleSelectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setDropdownOpen(false);
    if (errors.service) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.service;
        return next;
      });
    }
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(data.error || "Unable to send message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Redirect to confirmation page with inquiry parameters
      const params = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
      });
      router.push(`/confirmation?${params.toString()}`);
    } catch {
      setSubmitError("Network error. Please check your connection or email us directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-head">
        <h2 className="contact-form-title">Send Us a Message</h2>
        <p className="contact-form-subtitle">
          Tell us about your team and what you need automated. We will review and reply within one business day.
        </p>
      </div>

      {submitError && (
        <div className="form-alert form-alert-error" role="alert">
          <span>{submitError}</span>
        </div>
      )}

      {/* Row: Name and Email */}
      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Sarah Jenkins"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "has-error" : ""}`}
            disabled={isSubmitting}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Work Email <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="sarah@yourbrokerage.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "has-error" : ""}`}
            disabled={isSubmitting}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
      </div>

      {/* Row: Phone (required) and Service */}
      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="req">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(555) 234-5678"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? "has-error" : ""}`}
            disabled={isSubmitting}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-field" ref={dropdownRef}>
          <label id="service-label" className="form-label">
            Service of Interest <span className="req">*</span>
          </label>
          <div className="custom-select-container">
            <button
              type="button"
              className={`custom-select-trigger form-input ${dropdownOpen ? "is-open" : ""} ${
                errors.service ? "has-error" : ""
              }`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-labelledby="service-label"
              disabled={isSubmitting}
            >
              <span className="selected-value-text">{formData.service}</span>
              <span className={`select-arrow-icon ${dropdownOpen ? "arrow-rotate" : ""}`}>
                <ChevronDown />
              </span>
            </button>

            {dropdownOpen && (
              <ul className="custom-select-menu" role="listbox" aria-labelledby="service-label">
                {SERVICES.map((s) => {
                  const isSelected = s === formData.service;
                  return (
                    <li
                      key={s}
                      role="option"
                      aria-selected={isSelected}
                      className={`custom-select-option ${isSelected ? "is-selected" : ""}`}
                      onClick={() => handleSelectService(s)}
                    >
                      <span className="option-label">{s}</span>
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
          {errors.service && <span className="field-error">{errors.service}</span>}
        </div>
      </div>

      {/* Description */}
      <div className="form-field">
        <label htmlFor="description" className="form-label">
          Description / Project Details <span className="opt">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Tell us a little about your current CRM (e.g. GoHighLevel, Follow Up Boss, kvCORE), team size, database count, or specific workflows you'd like built..."
          value={formData.description}
          onChange={handleChange}
          className="form-input form-textarea"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"} <ArrowRight />
        </button>
      </div>
    </form>
  );
}
