import type { Locale } from "@/types/locale";//نستورد نوع اللغة فقط.

// نستورد ملفات الترجمة العربية والإنجليزية.
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";


//هنا ننشئ كائن يحتوي على قواميس الترجمة.
const dictionaries = {
    ar,
    en,
} satisfies Record<Locale, typeof ar>;// معناها يجب أن يحتوي هذا الكائن على مفتاح لكل لغة موجودة في Locale

export function getDictionary(locale: Locale) {
    return dictionaries[locale];
}