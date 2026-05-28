import { SectionCard } from "../shared/section-card";

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
                        // <article
                        //     key={item.title}
                        //     className="rounded-2xl border bg-background p-5 shadow-sm"
                        // >
                        //     <div className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-start rtl:sm:text-end">
                        //         <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                        //             {index + 1}
                        //         </div>

                        //         <h3 className="text-lg font-semibold">
                        //             {item.title}
                        //         </h3>
                        //     </div>

                        //     <p className="mt-4 text-center text-sm leading-6 text-muted-foreground sm:text-start sm:text-end">
                        //         {item.description}
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
        </section>
    );
}