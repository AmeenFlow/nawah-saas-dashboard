import { siteConfig } from "@/config/site";//استوردنا إعدادات الموقع التي فيها:locales: ["ar", "en"]

export type Locale = (typeof siteConfig.locales)[number];// استخرج نوع اللغة من المصفوفة الموجودة في siteConfig