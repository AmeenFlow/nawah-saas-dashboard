

// الاعدادات العامة للموقع
export const siteConfig = {
    name: "ِNawah",
    description: "A modern bilingual SaaS dashboard for teams.",
    url: "http://localhost:3000",
    locales: ["ar", "en"], //اللغات المدعومة
    defaultLocale: "ar",// اللغة الافتراضية
} as const;//للتعامل مع القم كثوابت دقيقة و ليس كنصوص عامة فقط

// ==============================================================