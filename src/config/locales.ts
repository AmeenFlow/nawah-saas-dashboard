export const supportedLocales = ["ar", "en"] as const;

export const defaultLocale = "ar";

export type Locale = (typeof supportedLocales)[number];