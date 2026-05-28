type SectionCardProps = Readonly<{
    index?: number;
    title: string;
    description: string;
}>;

export function SectionCard({
    index,
    title,
    description,
}: SectionCardProps) {
    return (
        <article className="rounded-2xl border bg-background p-5 text-center shadow-sm transition-colors hover:bg-muted/30 md:text-start">
            {index ? (
                <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                        {index}
                    </div>

                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                </div>
            ) : (
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>
            )}

            <p className="text-sm leading-6 text-muted-foreground">
                {description}
            </p>
        </article>
    );
}