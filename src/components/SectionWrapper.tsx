import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  label,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#64FFDA] text-sm tracking-widest uppercase mb-4">
            {label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-0.5 bg-[#64FFDA]"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
