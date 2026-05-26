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
        <section className="bg-background py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                        {badge}
                    </div>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {items.map((item, index) => (
                        <article
                            key={item.title}
                            className="group rounded-3xl border bg-background p-6 shadow-sm transition-colors hover:bg-muted/40"
                        >
                            <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary">
                                {index + 1}
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
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