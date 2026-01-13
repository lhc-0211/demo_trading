import { Button } from "@/components/ui/Button1";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useEffect, useState } from "react";

import cn from "@/assets/imgs/flag/cn.png";
import es from "@/assets/imgs/flag/es.png";
import uk from "@/assets/imgs/flag/uk.png";
import vn from "@/assets/imgs/flag/vi.png";
import { useTranslation } from "react-i18next";

const LANGUAGES = {
  vi: vn,
  uk: uk,
  cn: cn,
  es: es,
};

type LanguageKey = keyof typeof LANGUAGES;

export function ModeLanguage() {
  const [language, setLanguage] = useState<LanguageKey>("vi");
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
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
              className="w-6 h-6 rounded-full"
            />
            <span>
              {key === "vi" && "Vietnam"}
              {key === "uk" && "USA"}
              {key === "cn" && "China"}
              {key === "es" && "Spain"}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
