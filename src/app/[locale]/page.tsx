import { SiteHeader } from "@/components/shared/site-header";
import { Button } from "@/components/ui/button";
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

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          {dictionary.home.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {dictionary.home.hero.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">{dictionary.home.hero.primaryAction}</Button>

          <Button variant="outline" size="lg">
            {dictionary.home.hero.secondaryAction}
          </Button>
        </div>
      </section>
    </main>
  );
}