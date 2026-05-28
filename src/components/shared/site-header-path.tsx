"use client";

import { usePathname } from "next/navigation";

import { SiteHeader } from "@/components/shared/site-header";
import type { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/types/locale";

type Dictionary = ReturnType<typeof getDictionary>;

type SiteHeaderPathProps = Readonly<{
    locale: Locale;
    dictionary: Dictionary;
}>;

export function SiteHeaderPath({
    locale,
    dictionary,
}: SiteHeaderPathProps) {
    const pathname = usePathname();

    const currentPath = pathname.endsWith("/features") ? "/features" : "/";

    return (
        <SiteHeader
            locale={locale}
            currentPath={currentPath}
            dictionary={dictionary}
        />
    );
}