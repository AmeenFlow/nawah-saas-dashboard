import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cairo, geist } from "@/lib/fonts";
import { getTextDirection, isLocale } from "@/lib/locale";
import "../globals.css";

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
    notFound();
  }

  const direction = getTextDirection(locale);

  return (
    <html lang={locale} dir={direction}>

      
      <body className={`${cairo.variable} ${geist.variable}`}>

        
              {children}


      </body>
    </html>
  );
}