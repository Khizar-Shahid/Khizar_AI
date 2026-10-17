"use client";

import { useState } from "react";
import { Minus, Plus } from "@/components/Icons";
import { delay } from "@/components/site";
import type { ServiceFaqItem } from "@/lib/services-data";

interface ServiceFaqProps {
  faqs: ServiceFaqItem[];
  title?: string;
}

export default function ServiceFaq({ faqs, title = "Frequently Asked Questions" }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="band band-light faq-band" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="section-head text-center" data-r style={delay(0)}>
            <span className="eyebrow">Clear answers</span>
            <h2 id="faq-h2">{title}</h2>
            <p className="section-sub">
              Everything you need to know about setup, timelines, deliverability, and technical support.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`faq-item${isOpen ? " open" : ""}`}
                  data-r
                  style={delay(idx)}
                >
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => toggle(idx)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-a">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
