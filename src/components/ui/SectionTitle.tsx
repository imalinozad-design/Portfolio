interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16">
      <p className="font-mono text-[#64FFDA] text-base sm:text-lg md:text-xl font-bold">
        {number}. <span className="text-white">{title}</span>
      </p>
    </div>
  );
}
