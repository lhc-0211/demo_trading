import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { useIsMobile } from "@/hooks/useMobile";
import { useTranslation } from "react-i18next";

export default function NavigationMenuPriceBoard() {
  const isMobile = useIsMobile();

  const { t } = useTranslation();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap md:gap-1 gap-0">
        {/* Danh mục quan tâm */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="md:px-4! md:py-2! px-2! py-1! md:text-sm! text-xs! font-medium!">
            {t("priceboard.favourite-me")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="md:px-4! md:py-2! px-2! py-1! md:text-sm! text-xs! font-medium!">
            HOSE
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 md:gap-4 gap-2">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">VN30</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">HOSE</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="md:px-4! md:py-2! px-2! py-1! md:text-sm! text-xs! font-medium!">
            HNX
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 md:gap-4 gap-2">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">HNX30</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">HNX</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={
              navigationMenuTriggerStyle() +
              " md:px-4! md:py-2! px-2! py-1! md:text-sm! text-xs! font-medium!"
            }
          >
            <a href="/docs">UPCOM</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
