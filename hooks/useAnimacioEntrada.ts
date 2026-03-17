"use client";

import { useEffect, useRef, useState } from "react";

// Hook: detecta quan un element entra o surt completament del viewport
// L'animació es re-aplica si l'element surt completament per dalt i torna a entrar
export function useAnimacioEntrada(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entra al viewport: mostra l'element
          setVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Surt per dalt completament: reinicia l'animació
          setVisible(false);
        }
        // Si surt per baix (scrollejant cap amunt) no fem res
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}