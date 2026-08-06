"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import vi from "@/locales/vi.json";
import en from "@/locales/en.json";

type Locale = "vi" | "en";
type Translations = typeof vi;

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  toggleLocale: () => void;
}

const translations: Record<Locale, Translations> = { vi, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "vi" ? "en" : "vi"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = translations[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return typeof value === "string" ? value : key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
