import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locale";

type DashboardPageProps = Readonly<{
    params: Promise<{
        locale: string;
    }>;
}>;

export default async function DashboardPage({ params }: DashboardPageProps) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    const dictionary = getDictionary(locale);
    const overview = dictionary.dashboard.overview;

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {overview.title}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    {overview.description}
                </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {overview.metrics.map((metric) => (
                    <article
                        key={metric.label}
                        className="rounded-2xl border bg-background p-5 shadow-sm"
                    >
                        <p className="text-sm font-medium text-muted-foreground">
                            {metric.label}
                        </p>

                        <p className="mt-3 text-3xl font-bold tracking-tight">
                            {metric.value}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {metric.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}