import ProposalSection from "./ProposalSection";
import DataTable from "./DataTable";
import PhaseCard from "./PhaseCard";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const ProposalContent = () => {
  return (
    <div id="proposal-content" className="bg-card rounded-2xl shadow-elevated p-6 md:p-10 lg:p-12">
      {/* Executive Summary */}
      <ProposalSection id="executive-summary" number="1" title="Executive Summary">
        <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-primary">
          <p className="text-foreground font-body leading-relaxed text-lg">
            This proposal outlines a <span className="font-semibold text-primary">three-phase strategy</span> to rebuild QA excellence across the organization while effectively managing distributed QA teams across <span className="font-semibold">Chennai, Pune, Mumbai, and Bangalore</span> from a central location.
          </p>
          <p className="text-foreground font-body leading-relaxed mt-4">
            The approach combines process standardization, technology enablement, and cultural transformation to create a unified, high-performance QA organization aligned with business objectives.
          </p>
        </div>
      </ProposalSection>

      {/* Challenge & Opportunity */}
      <ProposalSection id="challenge-opportunity" number="2" title="The Challenge & Opportunity">
        <DataTable
          headers={["Challenge", "Opportunity"]}
          rows={[
            ["Inconsistent QA processes across locations", "Standardized framework unified, avoids delays and faster release with consistency"],
            ["Siloed automation efforts", "Reusable test assets saving 30% regression effort"],
            ["Variable domain knowledge", "Domain-led QA reducing production defects by 60%"],
            ["Distributed team coordination overhead", "Central governance with local autonomy"],
          ]}
        />
        
        <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
          <h4 className="font-display font-semibold text-heading mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Industry Benchmark Reference
          </h4>
          <p className="text-muted-foreground font-body mb-4">
            Companies like <span className="text-foreground font-medium">Adobe</span> (post-2013 QA transformation) and <span className="text-foreground font-medium">Spotify</span> (distributed quality model) achieved:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-primary font-body">65%</div>
              <div className="text-sm text-muted-foreground font-body">Reduction in escape defects</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-secondary font-body">50%</div>
              <div className="text-sm text-muted-foreground font-body">Faster regression cycles</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-accent font-body">75%</div>
              <div className="text-sm text-muted-foreground font-body">Improvement in collaboration</div>
            </div>
          </div>
        </div>
      </ProposalSection>

      {/* Operating Model */}
      <ProposalSection id="operating-model" number="3" title="Proposed Operating Model & Governance">
        <h4 className="font-display font-semibold text-heading mb-4 text-xl">3.1 Organizational Structure</h4>
        <div className="bg-muted/30 rounded-xl p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold mb-4 shadow-elevated">
              Central QA Leadership
            </div>
            <div className="text-sm text-muted-foreground mb-4 font-body">Strategy / Governance / Tools</div>
            <div className="w-px h-8 bg-border" />
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="bg-card rounded-xl p-4 shadow-soft border border-border">
                <div className="text-center font-semibold text-primary mb-3 font-body">Domain QA Leads – Payments</div>
                <div className="grid grid-cols-2 gap-2 text-center text-sm text-muted-foreground font-body">
                  <span className="bg-muted px-2 py-1 rounded">Chennai</span>
                  <span className="bg-muted px-2 py-1 rounded">Pune</span>
                  <span className="bg-muted px-2 py-1 rounded">Mumbai</span>
                  <span className="bg-muted px-2 py-1 rounded">Bangalore</span>
                </div>
              </div>
              <div className="bg-card rounded-xl p-4 shadow-soft border border-border">
                <div className="text-center font-semibold text-primary mb-3 font-body">Domain QA Leads – Cards</div>
                <div className="grid grid-cols-2 gap-2 text-center text-sm text-muted-foreground font-body">
                  <span className="bg-muted px-2 py-1 rounded">Chennai</span>
                  <span className="bg-muted px-2 py-1 rounded">Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="font-display font-semibold text-heading mb-4 text-xl">3.2 Communication Rhythm</h4>
        <DataTable
          headers={["Day", "Leadership", "Guild/Team", "Cross-functional"]}
          rows={[
            ["Monday", "Site Lead Sync", "Week Planning & Priority Setting", "Critical Issue Review"],
            ["Tuesday", "-", "Automation Guild Meeting", "Cross-site Pairing Sessions"],
            ["Wednesday", "-", "Performance/Security Guild", "Domain Knowledge Session"],
            ["Thursday", "Process Improvement Sync", "Tool/Environment Review", "-"],
            ["Friday", "Weekly Metrics Review", "Retrospective & Planning", "Wins & Recognition"],
          ]}
        />
      </ProposalSection>

      {/* Implementation Plan */}
      <ProposalSection id="implementation-plan" number="4" title="Three-Phase Implementation Plan">
        <div className="grid md:grid-cols-3 gap-6">
          <PhaseCard
            phase={1}
            title="Assessment & Foundation"
            timeline="Months 1-3"
            activities={[
              "QA Health Assessment across all locations",
              "Establish minimal viable QA framework",
              "Deploy unified toolchain POC",
              "Define baseline metrics",
            ]}
            measures={[
              "100% projects with documented test strategy",
              "Escape defect baseline established",
              "Toolchain decision finalized",
            ]}
          />
          <PhaseCard
            phase={2}
            title="Standardization & Scaling"
            timeline="Months 4-6"
            activities={[
              "Roll out standardized processes",
              "Launch automation guild",
              "Implement domain chapter structure",
              "Establish governance routines",
            ]}
            measures={[
              "40% automation coverage for critical paths",
              "30% reduction in process variations",
              "25% improvement in review compliance",
            ]}
          />
          <PhaseCard
            phase={3}
            title="Optimization & Excellence"
            timeline="Months 7-12"
            activities={[
              "Predictive quality analytics",
              "Advanced shift-left practices",
              "Continuous improvement loops",
              "Quality as competitive differentiator",
            ]}
            measures={[
              "60% reduction in escape defects",
              "50% faster regression cycles",
              "90% team satisfaction score",
            ]}
          />
        </div>
      </ProposalSection>

      {/* Success Metrics */}
      <ProposalSection id="success-metrics" number="5" title="Success Metrics & KPIs">
        <DataTable
          headers={["Category", "Metric", "Baseline", "Target (12 Mo)", "Industry Benchmark"]}
          rows={[
            ["Quality", "Escape Defect Rate", "TBD", "-60%", "-"],
            ["Efficiency", "Test Automation Coverage", "TBD", "70% critical paths", "60-85%"],
            ["Speed", "Regression Cycle Time", "TBD", "-50%", "-"],
            ["Collaboration", "Cross-site Pair Hours", "0", "40 hrs/team/month", "-"],
            ["Business Impact", "Release Confidence Score", "TBD", "9/10", "-"],
          ]}
        />
        
        <div className="mt-8 bg-muted/50 rounded-xl p-6">
          <h4 className="font-display font-semibold text-heading mb-4">Reference Cases</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-foreground font-body">
                <span className="font-semibold">ING Bank:</span> Implemented similar distributed QA model (2018), achieving 58% faster time-to-market for digital features
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-foreground font-body">
                <span className="font-semibold">IBM Cloud:</span> Standardized QA framework across 12 locations reduced critical defects by 72% in 18 months
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-foreground font-body">
                <span className="font-semibold">Target Corporation:</span> Domain-led QA approach improved production incident MTTR by 65%
              </p>
            </div>
          </div>
        </div>
      </ProposalSection>

      {/* Technology Stack */}
      <ProposalSection id="technology-stack" number="6" title="Technology & Tooling Stack">
        <p className="text-muted-foreground font-body mb-6">
          Centralized toolchain (customizable based on discovery phases):
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "📋", title: "Test Management", tools: "qTest / Zephyr / Tresa (Single instance)" },
            { icon: "🤖", title: "Test Automation", tools: "Selenium / Cypress + Custom Framework" },
            { icon: "⚡", title: "Performance", tools: "JMeter / Gatling + Cloud Load Agents" },
            { icon: "🤝", title: "Collaboration", tools: "Confluence + Jira + Miro" },
            { icon: "🔄", title: "CI/CD", tools: "Jenkins / GitLab CI with Quality Gates" },
          ].map((item, index) => (
            <div key={index} className="bg-muted/50 rounded-xl p-4 border border-border/50 hover:shadow-soft transition-all">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h5 className="font-semibold text-heading mb-1 font-body">{item.title}</h5>
              <p className="text-sm text-muted-foreground font-body">{item.tools}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-foreground font-body flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold">Integration Principle:</span> "One source of truth" dashboards visible to all locations
          </p>
        </div>
      </ProposalSection>

      {/* Leadership Support */}
      <ProposalSection id="leadership-support" number="7" title="Required Support from Leadership">
        <h4 className="font-display font-semibold text-heading mb-4 text-xl">7.1 Critical Enablers</h4>
        <DataTable
          headers={["Support Area", "Specific Ask", "Impact"]}
          rows={[
            ["Decision Rights", "QA sign-off authority for production releases", "Reduces escape defects by ~40%"],
            ["Budget", "$X for unified tooling + training", "3x ROI via efficiency gains"],
            ["Organizational", "QA included in architectural reviews", "50% fewer design-phase defects"],
            ["Cultural", "Joint messaging on quality importance", "30% faster adoption of new practices"],
          ]}
        />

        <h4 className="font-display font-semibold text-heading mb-4 mt-8 text-xl">7.2 Governance Participation</h4>
        <div className="space-y-3">
          {[
            { title: "Monthly Steering Committee", desc: "Review metrics, remove blockers" },
            { title: "Quarterly Business Review", desc: "Align QA strategy with business goals" },
            { title: "Escalation Path", desc: "Direct support for critical quality-risk decisions" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-heading font-body">{item.title}:</span>
                <span className="text-muted-foreground font-body ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h4 className="font-display font-semibold text-heading mb-4 mt-8 text-xl">7.3 First 90-Day Asks</h4>
        <ol className="space-y-3 list-decimal list-inside">
          {[
            { title: "Access", desc: "To all engineering/practice leaders across locations" },
            { title: "Baseline Period", desc: "30 days for assessment without pressure for changes" },
            { title: "Joint Launch Communication", desc: "Co-signed email/video introducing the initiative" },
            { title: "Initial Investment", desc: "Assessment resources" },
          ].map((item, index) => (
            <li key={index} className="text-foreground font-body">
              <span className="font-semibold">{item.title}:</span> {item.desc}
            </li>
          ))}
        </ol>
      </ProposalSection>

      {/* Risk Mitigation */}
      <ProposalSection id="risk-mitigation" number="8" title="Risk Mitigation">
        <DataTable
          headers={["Risk", "Mitigation Strategy"]}
          rows={[
            ["Resistance to standardization", "Pilot with willing teams, showcase wins"],
            ["Toolchain integration challenges", "Start with MVP, phased rollout"],
            ["Domain knowledge gaps", "Structured rotation program + mentorship"],
            ["Time zone collaboration hurdles", "Overlap hours policy + async documentation"],
          ]}
        />
      </ProposalSection>

      {/* Investment & ROI */}
      <ProposalSection id="investment-roi" number="9" title="Investment & ROI Projection">
        <DataTable
          headers={["Investment Area", "Expected Benefit"]}
          rows={[
            ["Tool Standardization",  "30% efficiency gain in test creation"],
            ["Training & Enablement",  "40% faster onboarding, 25% higher retention"],
            ["Governance Overhead",  "50% reduction in cross-location misalignment"],
            ["Total",  "Estimated ROI: 3.5x (defect reduction + efficiency gains)"],
          ]}
        />
        <p className="mt-4 text-muted-foreground font-body italic text-sm">
          *Industry standard on ROI of 3.2-4.1x
        </p>
      </ProposalSection>

      {/* Conclusion */}
      <ProposalSection id="conclusion" number="10" title="Conclusion">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
          <p className="text-foreground font-body leading-relaxed mb-4">
            This proposal presents a <span className="font-semibold text-primary">data-driven, phased approach</span> to reviving QA excellence while effectively managing distributed teams. The strategy balances central governance with local autonomy, process rigor with practical agility, and technology investment with cultural transformation.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-6">
            With the requested support from the Management leadership and Vertical heads, we can transform QA from a cost center to a <span className="font-semibold text-secondary">business enabler and competitive differentiator</span>, achieving industry-leading quality metrics within 12 months.
          </p>
          <div className="bg-card rounded-lg p-4 shadow-soft">
            <p className="font-semibold text-heading font-body">
              Recommended Next Step:
            </p>
            <p className="text-foreground font-body">
              90-minute workshop with key stakeholders from all locations to socialize and refine this approach.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-display font-semibold text-heading mb-4">Appendix Available Upon Request:</h4>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              "Detailed RACI Matrix",
              "QA Framework Template",
              "Tool Evaluation Criteria",
              "Team Assessment Questionnaire",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-muted-foreground font-body">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ProposalSection>
    </div>
  );
};

export default ProposalContent;
