import { createContext } from "react";

export const LanguageContext = createContext(null);
export const supportedLanguages = new Set(["id", "en"]);
