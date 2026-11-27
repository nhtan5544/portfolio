import en from "@/locales/en.json";

// English is the site's only language: `t("a.b")` reads src/locales/en.json, falling back to the key.
function t(key: string): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = en;
  for (const k of key.split(".")) {
    value = value?.[k];
  }
  return typeof value === "string" ? value : key;
}

export function useLanguage() {
  return { t };
}
