import type { Locale } from "@/types/locale";

//دالة تستقبل لغة صحيحة فقط: ar أو en.
export function getTextDirection(locale: Locale) {
    return locale === "ar" ? "rtl" : "ltr";
}