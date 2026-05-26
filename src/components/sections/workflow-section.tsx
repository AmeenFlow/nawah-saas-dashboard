type WorkflowStep = Readonly<{
    title: string;
    description: string;
}>;

type WorkflowSectionProps = Readonly<{
    badge: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
}>;

export function WorkflowSection({
    badge,
    title,
    description,
    steps,
}: WorkflowSectionProps) {
    return (
        <section className="bg-background py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <div className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                            {badge}
                        </div>

                        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            {title}
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                            {description}
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {steps.map((step, index) => (
                            <article
                                key={step.title}
                                className="rounded-3xl border bg-background p-5 shadow-sm"
                            >
                                <div className="flex gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}