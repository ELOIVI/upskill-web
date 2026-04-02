"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  retard?: number; // retard en ms per escalonar elements (disabled en static export)
}

// Component wrapper: aplica animació d'entrada quan l'element és visible
// En static export, aquest component simplemente renderitza els fills sense overhead de hooks
// Ús: <AnimacioEntrada retard={100}><div>...</div></AnimacioEntrada>
export default function AnimacioEntrada({ children, className = "", retard = 0 }: Props) {
  // The hook-based version would cause static export errors, so we simplify this
  // During static export, we render children directly without IntersectionObserver logic
  return (
    <div className={className}>
      {children}
    </div>
  );
}