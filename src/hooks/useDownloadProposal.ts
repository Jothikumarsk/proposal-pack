import { useState } from "react";
import html2pdf from "html2pdf.js";
import { saveAs } from "file-saver";
import { toast } from "@/hooks/use-toast";

export const useDownloadProposal = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("proposal-content");
      if (!element) {
        throw new Error("Proposal content not found");
      }

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: "QA_Revival_Strategic_Proposal.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: { 
          unit: "mm" as const, 
          format: "a4" as const, 
          orientation: "portrait" as const,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] as const },
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "PDF Downloaded",
        description: "Your proposal has been saved as PDF.",
      });
    } catch (error) {
      console.error("PDF download error:", error);
      toast({
        title: "Download Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadWord = async () => {
    setIsDownloading(true);
    try {
      // Download the original Word document
      const response = await fetch("/proposal.docx");
      if (!response.ok) {
        throw new Error("Failed to fetch document");
      }
      const blob = await response.blob();
      saveAs(blob, "QA_Revival_Strategic_Proposal.docx");
      
      toast({
        title: "Word Document Downloaded",
        description: "Your proposal has been saved as a Word document.",
      });
    } catch (error) {
      console.error("Word download error:", error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    downloadPDF,
    downloadWord,
  };
};
