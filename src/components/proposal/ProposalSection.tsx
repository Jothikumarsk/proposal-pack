import { ReactNode } from "react";

interface ProposalSectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

const ProposalSection = ({ id, number, title, children }: ProposalSectionProps) => {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <div className="flex items-start gap-4 mb-6">
        <span className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center text-lg font-bold font-body shrink-0">
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-heading leading-tight pt-1">
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-16">
        {children}
      </div>
    </section>
  );
};

export default ProposalSection;
