import { FileDown, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingDownloadBarProps {
  onDownloadPDF: () => void;
  onDownloadWord: () => void;
  isDownloading: boolean;
}

const FloatingDownloadBar = ({ onDownloadPDF, onDownloadWord, isDownloading }: FloatingDownloadBarProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 no-print">
      <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-elevated border border-border/50 p-3 flex items-center gap-3">
        <span className="text-sm font-body text-muted-foreground px-3 hidden sm:block">
          Download Proposal
        </span>
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            onClick={onDownloadPDF}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <FileDown className="h-4 w-4" />
            )}
            PDF
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onDownloadWord}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <FileText className="h-4 w-4" />
            )}
            Word
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingDownloadBar;
