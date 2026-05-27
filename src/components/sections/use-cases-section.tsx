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

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {items.map((item, index) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border bg-background p-5 shadow-sm transition-colors hover:bg-muted/30"
                        >
                            <div className="mb-4 flex size-9 items-center justify-center rounded-xl bg-muted text-sm font-semibold text-muted-foreground">
                                {index + 1}
                            </div>

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