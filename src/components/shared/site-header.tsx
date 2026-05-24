import Link from "next/link";

import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/types/locale";

type SiteHeaderProps = Readonly<{
    locale: Locale;
}>;

export function SiteHeader({ locale }: SiteHeaderProps) {
    const dictionary = getDictionary(locale);

    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link href={`/${locale}`} className="text-lg font-bold tracking-tight">
                    {siteConfig.name}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.href}
                            href={
                                item.href.startsWith("#")
                                    ? item.href
                                    : `/${locale}${item.href}`
                            }
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {dictionary.navigation[item.labelKey]}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="hidden sm:inline-flex">
                        {dictionary.site.login}
                    </Button>

                    <Button>{dictionary.site.getStarted}</Button>
                </div>
            </div>
        </header>
    );
}