import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

type SiteFooterProps = Readonly<{
    locale: Locale;
}>;

export function SiteFooter({ locale }: SiteFooterProps) {
    const dictionary = getDictionary(locale);

    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="rounded-3xl border bg-muted/30 p-6 md:p-8">
                    <div className="grid gap-10 text-center lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:text-start">
                        <div>
                            <Link
                                href={`/${locale}`}
                                className="inline-flex text-xl font-bold tracking-tight"
                            >
                                {siteConfig.name}
                            </Link>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground lg:mx-0">
                                {dictionary.site.footerDescription}                            </p>

                            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                                <Link
                                    href={`/${locale}`}
                                    className={cn(buttonVariants({ variant: "default" }))}
                                >
                                    {dictionary.site.getStarted}
                                </Link>

                                <Link
                                    href={`/${locale}/features`}
                                    className={cn(buttonVariants({ variant: "outline" }))}
                                >
                                    {dictionary.navigation.features}
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold">
                                {locale === "ar" ? "المنتج" : "Product"}
                            </h3>

                            <nav className="mt-4 grid gap-3">
                                {mainNavItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={`/${locale}${item.href}`}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {dictionary.navigation[item.labelKey]}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold">
                                {locale === "ar" ? "اللغة والتجربة" : "Language & Experience"}
                            </h3>

                            <div className="mt-4 rounded-2xl border bg-background p-4">
                                <p className="text-sm font-medium">
                                    {locale === "ar"
                                        ? "مصممة للعربية والإنجليزية"
                                        : "Designed for Arabic and English"}
                                </p>

                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {locale === "ar"
                                        ? "تجربة متوافقة مع اتجاهي الكتابة RTL و LTR لتناسب فرق العمل متعددة اللغات."
                                        : "A bilingual experience with RTL and LTR support for multilingual teams."}
                                </p>
                                <div className="mt-4 inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                    AR / EN
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-4 border-t pt-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-start">
                        <p>
                            © 2026 {siteConfig.name}.{" "}
                            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
                        </p>

                        <div className="flex gap-4">
                            <span>
                                {locale === "ar" ? "منصة SaaS ثنائية اللغة" : "Bilingual SaaS platform"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}