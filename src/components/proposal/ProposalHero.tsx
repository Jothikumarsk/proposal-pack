import { FileDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalHeroProps {
  onDownloadPDF: () => void;
  onDownloadWord: () => void;
  isDownloading: boolean;
}

const ProposalHero = ({ onDownloadPDF, onDownloadWord, isDownloading }: ProposalHeroProps) => {
  return (
    <header className="gradient-hero text-primary-foreground min-h-[60vh] flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/70 uppercase tracking-widest text-sm font-body mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Strategic Proposal
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in text-primary-foreground leading-tight" style={{ animationDelay: "0.2s" }}>
            Reviving QA Excellence & Scaling Distributed Team Governance
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-body font-light mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Domain-Led QA Revival Strategy
          </p>
          
          <p className="text-primary-foreground/60 font-body mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Prepared By – <span className="text-primary-foreground/90 font-medium">Jothikumar.sk</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              variant="heroOutline" 
              size="xl" 
              onClick={onDownloadPDF}
              disabled={isDownloading}
            >
              <FileDown className="h-5 w-5" />
              Download PDF
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              onClick={onDownloadWord}
              disabled={isDownloading}
            >
              <FileText className="h-5 w-5" />
              Download Word
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 25% 98%)" />
        </svg>
      </div>
    </header>
  );
};

export default ProposalHero;
