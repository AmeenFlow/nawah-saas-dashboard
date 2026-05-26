import { Button } from "@/components/ui/button";


// *  عرّفنا نوع الخصائص التي يحتاجها المكوّن.
type HeroSectionProps = Readonly<{
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
}>;

/**
 * بدل ان يقرأا
 * HeroSection
 * الترجمة بنفسه
 * نعطيه النصوص من الخارج. هذا يجعله مكوّنًا نظيفًا وقابلًا لإعادة الاستخدام.
 */
export function HeroSection({
    title,
    description,
    primaryAction,
    secondaryAction,
}: HeroSectionProps) {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg">{primaryAction}</Button>

                <Button variant="outline" size="lg">
                    {secondaryAction}
                </Button>
            </div>
        </section>
    );
}