import ProposalHero from "@/components/proposal/ProposalHero";
import TableOfContents from "@/components/proposal/TableOfContents";
import ProposalContent from "@/components/proposal/ProposalContent";
import FloatingDownloadBar from "@/components/proposal/FloatingDownloadBar";
import { useDownloadProposal } from "@/hooks/useDownloadProposal";

const Index = () => {
  const { isDownloading, downloadPDF, downloadWord } = useDownloadProposal();

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags are handled in index.html */}
      
      <ProposalHero 
        onDownloadPDF={downloadPDF}
        onDownloadWord={downloadWord}
        isDownloading={isDownloading}
      />
      
      <main className="container py-12 md:py-16">
        <TableOfContents />
        <ProposalContent />
      </main>
      
      <footer className="border-t border-border py-8 mt-12">
        <div className="container text-center">
          <p className="text-muted-foreground font-body text-sm">
            Strategic Proposal – Domain Led QA Revival
          </p>
          <p className="text-muted-foreground/60 font-body text-sm mt-1">
            Prepared by Jothikumar.sk
          </p>
        </div>
      </footer>
      
      <FloatingDownloadBar 
        onDownloadPDF={downloadPDF}
        onDownloadWord={downloadWord}
        isDownloading={isDownloading}
      />
    </div>
  );
};

export default Index;
