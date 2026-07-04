import { useEffect, useMemo, useState } from "react";
import { LanguageContext, supportedLanguages } from "./languageContextCore";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("language");
    return supportedLanguages.has(saved) ? saved : "id";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "en" ? "en" : "id";
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (supportedLanguages.has(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  };

  const value = useMemo(() => ({ language, isEnglish: language === "en", setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
