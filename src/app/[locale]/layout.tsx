import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cairo, geist } from "@/lib/fonts";
import { getTextDirection, isLocale } from "@/lib/locale";
import type { Locale } from "@/types/locale";
import "../globals.css";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeaderPath } from "@/components/shared/site-header-path";
import { getDictionary } from "@/lib/dictionaries";
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;// نستخرج اللغة من الرابط.


  if (!isLocale(locale)) {
    notFound();// إذا دخل شخص على رابط غير صحيح
  }

  const direction = getTextDirection(locale as Locale);// نحدد اتجاه الصفحة حسب اللغة.
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className={`${cairo.variable} ${geist.variable}`}>
        <SiteHeaderPath locale={locale} dictionary={dictionary} />        {children}

        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}