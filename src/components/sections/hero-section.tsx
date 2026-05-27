import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeroPreview = Readonly<{
    title: string;
    tasks: string;
    performance: string;
    language: string;
}>;

type HeroSectionProps = Readonly<{
    badge: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    secondaryActionHref: string;
    highlights: string[];
    preview: HeroPreview;
}>;

export function HeroSection({
    badge,
    title,
    description,
    primaryAction,
    secondaryAction,
    secondaryActionHref,
    highlights,
    preview,
}: HeroSectionProps) {
    return (
        <section id="home" className="border-b bg-background">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
                <div className="text-center lg:text-start">
                    <div className="inline-flex rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                        {badge}
                    </div>

                    <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                        {title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground lg:mx-0">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <Button size="lg">{primaryAction}</Button>

                        <Button variant="outline" size="lg" asChild>
                            <Link href={secondaryActionHref}>{secondaryAction}</Link>
                        </Button>
                    </div>

                    <ul className="mt-7 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 lg:max-w-2xl">
                        {highlights.map((item) => (
                            <li
                                key={item}
                                className="rounded-xl border bg-background px-3 py-2"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-3xl border bg-muted/40 p-3 shadow-sm">
                    <div className="rounded-2xl border bg-background p-5 shadow-sm">
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {preview.title}
                                </p>
                                <p className="mt-1 text-2xl font-bold">Nawah</p>
                            </div>

                            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                SaaS
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3">
                            <div className="rounded-2xl border p-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-muted-foreground">
                                        {preview.tasks}
                                    </p>
                                    <span className="text-xl font-bold">24</span>
                                </div>
                                <div className="mt-3 h-2 rounded-full bg-muted">
                                    <div className="h-2 w-2/3 rounded-full bg-primary" />
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border p-4">
                                    <p className="text-sm text-muted-foreground">
                                        {preview.performance}
                                    </p>
                                    <p className="mt-3 text-2xl font-bold">92%</p>
                                </div>

                                <div className="rounded-2xl border p-4">
                                    <p className="text-sm text-muted-foreground">
                                        {preview.language}
                                    </p>
                                    <p className="mt-3 text-2xl font-bold">AR / EN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}