type FeatureItem = Readonly<{
    title: string;
    description: string;
}>;

type FeaturesSectionProps = Readonly<{
    badge: string;
    title: string;
    description: string;
    items: FeatureItem[];
}>;

export function FeaturesSection({
    badge,
    title,
    description,
    items,
}: FeaturesSectionProps) {
    return (
        <section id="features" className="scroll-mt-16 border-t px-0 pb-16 pt-12 sm:pt-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex rounded-full border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        {badge}
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border bg-background p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}