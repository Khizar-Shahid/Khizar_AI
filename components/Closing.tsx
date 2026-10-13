"use client";

import { useRef, useState } from "react";
import { SITE } from "./site";

export default function Closing() {
  const [label, setLabel] = useState("Copy");
  const ref = useRef<HTMLElement>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setLabel("Copied");
    } catch {
      if (ref.current) {
        const r = document.createRange();
        r.selectNodeContents(ref.current);
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 2200);
  };

  return (
    <section className="band closing-band" id="start" aria-labelledby="h-start">
      <div className="wrap">
        <div className="closing">
          <div data-r>
            <p className="eyebrow">Start here</p>
            <h2 id="h-start">Find out in <em>20 minutes</em> if this fits.</h2>
            <p className="lede">
              Send me a short email with your role, the CRM you use now and roughly how many contacts you have.
              I&apos;ll reply with a few times for a call.
            </p>
          </div>
          <div className="contact" data-r>
            <span className="lbl">Email</span>
            <div className="addr">
              <a href={`mailto:${SITE.email}`}>
                <code ref={ref}>{SITE.email}</code>
              </a>
              <button className="copy" type="button" onClick={copy}>{label}</button>
            </div>
            <span className="lbl">Include</span>
            <ol>
              <li>Agent, team lead or loan officer</li>
              <li>The CRM or loan software you use</li>
              <li>Roughly how many past clients you have</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
