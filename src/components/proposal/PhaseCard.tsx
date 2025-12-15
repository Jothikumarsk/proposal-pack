import { CheckCircle2 } from "lucide-react";

interface PhaseCardProps {
  phase: number;
  title: string;
  timeline: string;
  activities: string[];
  measures: string[];
}

const PhaseCard = ({ phase, title, timeline, activities, measures }: PhaseCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-elevated p-6 hover:shadow-glow transition-all duration-500 border border-border/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold font-body">
          {phase}
        </div>
        <div>
          <h4 className="font-display font-semibold text-heading text-lg">{title}</h4>
          <p className="text-sm text-muted-foreground font-body">{timeline}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-semibold text-primary mb-2 font-body uppercase tracking-wide">Key Activities</h5>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground font-body">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-border pt-4">
          <h5 className="text-sm font-semibold text-primary mb-2 font-body uppercase tracking-wide">Success Measures</h5>
          <ul className="space-y-2">
            {measures.map((measure, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground font-body">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
                {measure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
