type MetricCardProps = Readonly<{
    label: string;
    value: string;
    description: string;
}>;

export function MetricCard({
    label,
    value,
    description,
}: MetricCardProps) {
    return (
        <article className="rounded-2xl border bg-background p-5 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
                {label}
            </p>

            <p className="mt-3 text-3xl font-bold tracking-tight">
                {value}
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
            </p>
        </article>
    );
}