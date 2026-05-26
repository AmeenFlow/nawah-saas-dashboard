import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaSectionProps = Readonly<{
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    secondaryActionHref: string;
}>;

export function CtaSection({
    title,
    description,
    primaryAction,
    secondaryAction,
    secondaryActionHref,
}: CtaSectionProps) {
    return (
        <section className="bg-background px-4 py-14 md:py-20">
            <div className="mx-auto max-w-6xl rounded-3xl border bg-primary p-8 text-center text-primary-foreground shadow-sm md:p-12">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {title}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
                    {description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button variant="secondary" size="lg">
                        {primaryAction}
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        asChild
                    >
                        <Link href={secondaryActionHref}>{secondaryAction}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}