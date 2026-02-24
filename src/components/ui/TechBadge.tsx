interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
      {label}
    </span>
  );
}
