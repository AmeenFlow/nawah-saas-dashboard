
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/types/locale";

type LanguageSwitcherProps = Readonly<{
    locale: Locale;
}>;
// ملاحظة ===. هذا المكون خاص بمبدل اللغة و فائدته  معرفة المسار الحالي 

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
    const pathname = usePathname();

    const nextLocale = locale === "ar" ? "en" : "ar";

    const nextPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

    return (
        <Button variant="ghost" size="sm" asChild>
            <Link href={nextPathname}>
                {nextLocale.toUpperCase()}
            </Link>
        </Button>
    );
}