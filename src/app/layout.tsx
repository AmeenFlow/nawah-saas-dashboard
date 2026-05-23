import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


//نعرّف بيانات الموقع العامة مثل العنوان والوصف.
export const metadata:Metadata ={
  title:siteConfig.name,
  description:siteConfig.description
};

// الاعلان عن نوع و من خصائصه انه من محتويات ريأكت قابل للعرض فقط
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang={siteConfig.defaultLocale} dir="rtl" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}