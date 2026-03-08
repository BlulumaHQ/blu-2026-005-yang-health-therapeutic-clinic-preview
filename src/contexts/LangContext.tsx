import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "zh";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, zh: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = useCallback((en: string, zh: string) => (lang === "en" ? en : zh), [lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};
