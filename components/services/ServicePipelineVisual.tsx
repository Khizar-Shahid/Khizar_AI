import { Bolt, Check } from "@/components/Icons";
import { delay } from "@/components/site";
import type { PipelineStage } from "@/lib/services-data";

interface ServicePipelineVisualProps {
  stages: PipelineStage[];
  serviceTitle: string;
}

export default function ServicePipelineVisual({ stages, serviceTitle }: ServicePipelineVisualProps) {
  return (
    <section className="band band-pine pipeline-band" aria-labelledby="pipeline-heading">
      <div className="wrap">
        <div className="section-head text-center" data-r style={delay(0)}>
          <span className="eyebrow">Pipeline &amp; Automation Architecture</span>
          <h2 id="pipeline-heading">How your workflow operates behind the scenes</h2>
          <p className="section-sub">
            From the instant a contact arrives to closing and past-client nurturing, every step is mapped and automated.
          </p>
        </div>

        <div className="pipeline-flow-wrapper" data-r style={delay(1)}>
          <div className="pipeline-header-bar">
            <div className="pipeline-dot-group">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="pipeline-status-text">
              Active Workflow: <em>{serviceTitle}</em>
            </div>
            <div className="pipeline-status-badge">
              <Bolt /> Live Automation
            </div>
          </div>

          <div className="pipeline-steps-grid">
            {stages.map((stage, idx) => (
              <div key={stage.name} className="pipeline-step-node">
                <div className="step-counter">
                  <span>0{idx + 1}</span>
                  {stage.delay && <span className="step-delay-badge">{stage.delay}</span>}
                </div>
                <div className="step-card">
                  <div className="step-name">{stage.name}</div>
                  <div className="step-action">
                    <Check />
                    <span>{stage.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
