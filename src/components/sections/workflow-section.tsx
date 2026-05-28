import { SectionCard } from "../shared/section-card";

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
                <div className="mx-auto grid max-w-4xl gap-10 text-center">
                    <div>
                        <div className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                            {badge}
                        </div>

                        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            {title}
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                            {description}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {steps.map((item, index) => (
                          
                            // <article
                            //     key={step.title}
                            //     className="rounded-2xl border bg-background p-5 shadow-sm"
                            // >
                            //     <div className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-start rtl:sm:text-end">
                            //         <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                            //             {index + 1}
                            //         </div>

                            //         <h3 className="text-lg font-semibold">
                            //             {step.title}
                            //         </h3>
                            //     </div>

                            //     <p className="mt-4 text-center text-sm leading-6 text-muted-foreground sm:text-start sm:text-end">
                            //         {step.description}
                            //     </p>
                            // </article>
                            <SectionCard
                                key={item.title}
                                index={index + 1}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}