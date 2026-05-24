import { siteConfig } from "@/config/site";
import type { Locale } from "@/types/locale";


//دالة تتحقق هل النص القادم من الرابط هو لغة موجودة داخل ["ar", "en"].
export function isLocale(value: string): value is Locale {
    return siteConfig.locales.includes(value as Locale);
}

export function getTextDirection(locale: Locale) {
    return locale === "ar" ? "rtl" : "ltr";
}