import { SiteHeader } from "@/components/shared/site-header";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          منصة SaaS عربية احترافية لإدارة أعمالك
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Nawah تساعد الفرق على تنظيم المهام، متابعة الأداء، وبناء تجربة عمل أكثر وضوحًا باللغتين العربية والإنجليزية.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">ابدأ الآن</Button>
          <Button variant="outline" size="lg">
            مشاهدة المميزات
          </Button>
        </div>
      </section>
    </main>
  );
}