import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getTextDirection } from "@/lib/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const locale = siteConfig.defaultLocale; //أخذنا اللغة الافتراضية من إعدادات الموقع.
  const direction = getTextDirection(locale);//استخرجنا اتجاه الصفحة بناءً على اللغة.

  return (
    <html lang={locale} dir={direction}>
      <body>{children}</body>
    </html>
  );
}