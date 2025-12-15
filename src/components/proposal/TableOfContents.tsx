import { ChevronRight } from "lucide-react";

const tableOfContents = [
  { id: "executive-summary", title: "Executive Summary", number: "1" },
  { id: "challenge-opportunity", title: "The Challenge & Opportunity", number: "2" },
  { id: "operating-model", title: "Proposed Operating Model & Governance", number: "3" },
  { id: "implementation-plan", title: "Three-Phase Implementation Plan", number: "4" },
  { id: "success-metrics", title: "Success Metrics & KPIs", number: "5" },
  { id: "technology-stack", title: "Technology & Tooling Stack", number: "6" },
  { id: "leadership-support", title: "Required Support from Leadership", number: "7" },
  { id: "risk-mitigation", title: "Risk Mitigation", number: "8" },
  { id: "investment-roi", title: "Investment & ROI Projection", number: "9" },
  { id: "conclusion", title: "Conclusion", number: "10" },
];

const TableOfContents = () => {
  return (
    <nav className="bg-card shadow-elevated rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <h2 className="text-2xl font-display font-semibold text-heading mb-6">Table of Contents</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {tableOfContents.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-300 animate-slide-in-left"
            style={{ animationDelay: `${0.7 + index * 0.05}s` }}
          >
            <span className="w-8 h-8 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-body">
              {item.number}
            </span>
            <span className="flex-1 text-foreground group-hover:text-primary transition-colors font-body font-medium">
              {item.title}
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
