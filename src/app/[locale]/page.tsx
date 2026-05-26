import { SiteHeader } from "@/components/shared/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/shared/site-footer";
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
      <div id="top" />
      <SiteHeader locale={locale} currentPath="/" />
      <HeroSection
        title={dictionary.home.hero.title}
        badge={dictionary.home.hero.badge}
        description={dictionary.home.hero.description}
        primaryAction={dictionary.home.hero.primaryAction}
        secondaryAction={dictionary.home.hero.secondaryAction}
        secondaryActionHref={`/${locale}/features`}
        highlights={dictionary.home.hero.highlights}
        preview={dictionary.home.hero.preview}
      /> 
      <StatsSection items={dictionary.home.stats.items} />

      <WorkflowSection
        badge={dictionary.home.workflow.badge}
        title={dictionary.home.workflow.title}
        description={dictionary.home.workflow.description}
        steps={dictionary.home.workflow.steps}
      />

      <UseCasesSection
        badge={dictionary.home.useCases.badge}
        title={dictionary.home.useCases.title}
        description={dictionary.home.useCases.description}
        items={dictionary.home.useCases.items}
      />

      <CtaSection
        title={dictionary.home.cta.title}
        description={dictionary.home.cta.description}
        primaryAction={dictionary.home.cta.primaryAction}
        secondaryAction={dictionary.home.cta.secondaryAction}
        secondaryActionHref={`/${locale}/features`}
      />

      <SiteFooter locale={locale} />
    </main>
  );
}