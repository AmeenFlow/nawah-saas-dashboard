import { HeroSection } from "@/components/sections/hero-section";
import { SiteHeader } from "@/components/shared/site-header";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locale";
import { notFound } from "next/navigation";

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen">
      <SiteHeader locale={locale} />
      <HeroSection
        title={dictionary.home.hero.title}
        description={dictionary.home.hero.description}
        primaryAction={dictionary.home.hero.primaryAction}
        secondaryAction={dictionary.home.hero.secondaryAction}
      />   
    </main>
  );
}