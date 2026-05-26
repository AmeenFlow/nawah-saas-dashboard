import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/types/locale";

type SiteHeaderProps = Readonly<{
    locale: Locale;
}>;

/**
 * لاحظ اننا استخدمنا
 * named export ==> export function SiteHeader
 * و لم نستخدم
 * export default function SiteHeader
 * و هذا مناسب للمكونات المشتركة 
 */
export function SiteHeader({ locale }: SiteHeaderProps) {
    const dictionary = getDictionary(locale);
    const nextLocale = locale === "ar" ? "en" : "ar";
    const mobileMenuSide = locale === "ar" ? "right" : "left";

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
                       {/*  زر تبديل اللغة و هنا استخدمنا از شيلد لاننا نريد الرابط يبقى فعليا رابط و ليس زرا يتصرف كرابط بمعنى اجعل اللينك يأخذ شكل الزر و لكنه يعمل عمل اللينك  */}
                    <Button variant="ghost" size="sm" asChild>
                        <Link href={`/${nextLocale}`}>{nextLocale.toUpperCase()}</Link>
                    </Button>

                    <Button variant="ghost" className="hidden sm:inline-flex">
                        {dictionary.site.login}
                    </Button>

                    <Button className="hidden sm:inline-flex">
                        {dictionary.site.getStarted}
                    </Button>
                    
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu />
                                <span className="sr-only">{dictionary.site.openMenu}</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={mobileMenuSide}>
                            <SheetHeader>
                                <SheetTitle>{siteConfig.name}</SheetTitle>
                            </SheetHeader>

                            <nav className="mt-6 flex flex-col gap-4">
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

                            <div className="mt-6 border-t pt-6">
                                <Button className="w-full">
                                    {dictionary.site.getStarted}
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}