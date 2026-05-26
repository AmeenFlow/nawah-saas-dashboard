import { supportedLocales } from "@/config/locales";
import type { Locale } from "@/types/locale";

export function isLocale(value: string): value is Locale {
    return supportedLocales.some((locale) => locale === value);
}

export function getTextDirection(locale: Locale) {
    return locale === "ar" ? "rtl" : "ltr";
}