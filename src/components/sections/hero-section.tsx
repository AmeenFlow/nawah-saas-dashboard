import { Button } from "@/components/ui/button";
import Link from "next/link";

// *  عرّفنا نوع الخصائص التي يحتاجها المكوّن.
type HeroSectionProps = Readonly<{
    title: string;
    badge: string,
    description: string;
    primaryAction: string;
    secondaryAction: string;
    secondaryActionHref: string;
}>;

/**
 * بدل ان يقرأا
 * HeroSection
 * الترجمة بنفسه
 * نعطيه النصوص من الخارج. هذا يجعله مكوّنًا نظيفًا وقابلًا لإعادة الاستخدام.
 */
export function HeroSection({
    title,
    badge,
    description,
    primaryAction,
    secondaryAction,
    secondaryActionHref,
}: HeroSectionProps) {
    return (
        <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-14 pt-10 text-center sm:pb-16 sm:pt-12 lg:min-h-[calc(100vh-4rem)] lg:justify-center lg:py-0">
            <div className="mb-4 rounded-full border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                {badge}
            </div>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.08]">
                {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg">
                    {primaryAction}
                </Button>

                <Button variant="outline" size="lg" asChild>
                    <Link href={secondaryActionHref}>
                        {secondaryAction}
                    </Link>
                </Button>
            </div>
        </section>
    );
}