import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">
          بدأنا مشروع Hybrid cars
        </h1>

        <p className="mb-6 text-muted-foreground">
          منصة SaaS ثنائية اللغة مبنية باحتراف.
        </p>

        <Button variant={'outline'} size={'lg'}>ابدأ الآن</Button>
      </div>
    </main>
  );
}

