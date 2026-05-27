type StatItem = Readonly<{
    value: string;
    label: string;
}>;

type StatsSectionProps = Readonly<{
    items: StatItem[];
}>;

export function StatsSection({ items }: StatsSectionProps) {
    return (
        <section className="border-y bg-muted/20 py-9 md:py-11">
            <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                    <article
                        key={item.label}
                        className="rounded-2xl border bg-background p-5 text-center"
                    >
                        <p className="text-2xl font-bold tracking-tight md:text-3xl">
                            {item.value}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {item.label}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}