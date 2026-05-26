import { FeaturesSection } from "@/components/sections/features-section";
import { SiteHeader } from "@/components/shared/site-header";
import { Button } from "@/components/ui/button";
 import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locale";
import { notFound } from "next/navigation";
import Link from "next/link";

type FeaturesPageProps = Readonly<{
    params: Promise<{
        locale: string;
    }>;
}>;

export default async function FeaturesPage({ params }: FeaturesPageProps) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    const dictionary = getDictionary(locale);

    return (
        <main className="min-h-screen">
            <SiteHeader locale={locale} />
          
            <FeaturesSection
                badge={dictionary.home.features.badge}
                title={dictionary.home.features.title}
                description={dictionary.home.features.description}
                items={dictionary.home.features.items}
            />
            <div className="mx-auto max-w-6xl px-4 pb-16 text-center">
                <Button variant="outline" asChild>
                    <Link href={`/${locale}`}>
                        {dictionary.site.backHome}
                    </Link>
                </Button>

              {/* <Button variant="outline" asChild>
                    <a href={`/${locale}`}>
                        {dictionary.site.backHome}
                    </a>
                </Button>  */}
            </div>
        </main>
    );
}