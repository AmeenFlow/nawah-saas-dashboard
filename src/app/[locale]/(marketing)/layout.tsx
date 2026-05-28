import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeaderPath } from "@/components/shared/site-header-path";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/types/locale";

type MarketingLayoutProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{
        locale: Locale;
    }>;
}>;

export default async function MarketingLayout({
    children,
    params,
}: MarketingLayoutProps) {
    const { locale } = await params;
    const dictionary = getDictionary(locale);

    return (
        <>
            <SiteHeaderPath locale={locale} dictionary={dictionary} />

            {children}

            <SiteFooter locale={locale} />
        </>
    );
}