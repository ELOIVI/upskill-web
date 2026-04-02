// Static translations export for static export compatibility
import ca from "@/messages/ca.json";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

export const translations = {
  ca,
  es,
  en,
};

export function getTranslationsSync(locale: "ca" | "es" | "en") {
  return translations[locale];
}

// Helper function to get nested value
export function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}