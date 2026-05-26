import { defaultLocale, supportedLocales } from "@/config/locales";

export const siteConfig = {
    name: "Nawah",
    description: "A modern bilingual SaaS dashboard for teams.",
    url: "http://localhost:3000",
    locales: supportedLocales,
    defaultLocale,
} as const;