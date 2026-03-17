"use client";

import { useAnimacioEntrada } from "@/hooks/useAnimacioEntrada";

interface Props {
  children: React.ReactNode;
  className?: string;
  retard?: number; // retard en ms per escalonar elements
}

// Component wrapper: aplica animació d'entrada quan l'element és visible
// Ús: <AnimacioEntrada retard={100}><div>...</div></AnimacioEntrada>
export default function AnimacioEntrada({ children, className = "", retard = 0 }: Props) {
  const { ref, visible } = useAnimacioEntrada();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        transitionDelay: `${retard}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}