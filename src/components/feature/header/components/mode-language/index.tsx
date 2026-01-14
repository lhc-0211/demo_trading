import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useEffect, useState } from "react";

import en from "@/assets/imgs/flag/en.png";
import vi from "@/assets/imgs/flag/vi.png";
import { useTranslation } from "react-i18next";

const LANGUAGES = {
  vi: vi,
  en: en,
};

type LanguageKey = keyof typeof LANGUAGES;

export function ModeLanguage() {
  const [language, setLanguage] = useState<LanguageKey>(() => {
    return (localStorage.getItem("language") as LanguageKey) || "vi";
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language, i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <img
            src={LANGUAGES[language]}
            alt={language}
            className="w-4 h-4 rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {(Object.keys(LANGUAGES) as LanguageKey[]).map((key) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setLanguage(key)}
            className="cursor-pointer"
          >
            <img
              src={LANGUAGES[key]}
              alt={key}
              className="w-4 h-4 rounded-full"
            />
            <span className="text-xs md:text-sm">
              {key === "vi" && "Vietnam"}
              {key === "en" && "USA"}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
