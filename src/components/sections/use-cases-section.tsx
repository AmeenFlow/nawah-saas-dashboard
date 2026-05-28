import { SectionCard } from "../shared/section-card";

type UseCaseItem = Readonly<{
    title: string;
    description: string;
}>;

type UseCasesSectionProps = Readonly<{
    badge: string;
    title: string;
    description: string;
    items: UseCaseItem[];
}>;

export function UseCasesSection({
    badge,
    title,
    description,
    items,
}: UseCasesSectionProps) {
    return (
        <section className="border-y bg-muted/30 py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                        {badge}
                    </div>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mt-10 grid gap-4 text-center md:grid-cols-3">
                    {items.map((item, index) => (
                     
                        <SectionCard
                            key={item.title}
                            index={index + 1}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}