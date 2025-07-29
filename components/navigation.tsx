"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "./language-provider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { language, setLanguage, t, isLoaded } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4 pl-5">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                R
              </span>
            </div>
            <span className="font-bold text-xl">Redactalo</span>
          </Link>
        </div>

        {isLoaded && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.solutions")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t("nav.solutions")}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubre nuestras soluciones para LinkedIn
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/solutions" title={t("nav.solutions")}>
                      Estrategias personalizadas
                    </ListItem>
                    <ListItem href="/metrics" title={t("nav.metrics")}>
                      Análisis y métricas
                    </ListItem>
                    <ListItem
                      href="/inspirations"
                      title={t("nav.inspirations")}
                    >
                      Ideas e inspiración
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/methodology" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("nav.methodologies")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.resources")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/blog" title={t("nav.blog")}>
                      Artículos y guías
                    </ListItem>
                    <ListItem href="/community" title={t("nav.community")}>
                      Únete a la comunidad
                    </ListItem>
                    <ListItem href="/playbook" title={t("nav.playbook")}>
                      Guía completa
                    </ListItem>
                    <ListItem href="/affiliates" title={t("nav.affiliates")}>
                      Programa de afiliados
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/customers" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("nav.caseStudies")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("nav.pricing")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          {isLoaded && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}


          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && isLoaded && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          {[
            {
              label: t("nav.solutions"),
              items: [
                {
                  href: "/solutions",
                  title: t("nav.solutions"),
                  desc: "Estrategias personalizadas",
                },
                {
                  href: "/metrics",
                  title: t("nav.metrics"),
                  desc: "Análisis y métricas",
                },
                {
                  href: "/inspirations",
                  title: t("nav.inspirations"),
                  desc: "Ideas e inspiración",
                },
              ],
            },
            {
              label: t("nav.resources"),
              items: [
                {
                  href: "/blog",
                  title: t("nav.blog"),
                  desc: "Artículos y guías",
                },
                {
                  href: "/community",
                  title: t("nav.community"),
                  desc: "Únete a la comunidad",
                },
                {
                  href: "/playbook",
                  title: t("nav.playbook"),
                  desc: "Guía completa",
                },
                {
                  href: "/affiliates",
                  title: t("nav.affiliates"),
                  desc: "Programa de afiliados",
                },
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <details className="group" open>
                <summary className="cursor-pointer text-sm font-medium py-2 flex justify-between items-center">
                  {section.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pl-2 mt-2 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        <span className="font-semibold">{item.title}</span>
                        <div className="text-xs">{item.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}

          {/* Flat items */}
          <Link href="/methodology" className="block py-2 text-sm font-medium">
            {t("nav.methodologies")}
          </Link>
          <Link href="/customers" className="block py-2 text-sm font-medium">
            {t("nav.caseStudies")}
          </Link>
          <Link href="/pricing" className="block py-2 text-sm font-medium">
            {t("nav.pricing")}
          </Link>
        </div>
      )}
    </header>
  );
}

const ListItem = ({
  className,
  title,
  children,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
