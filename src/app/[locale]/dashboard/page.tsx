import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locale";
import { MetricCard } from "@/components/dashboard/metric-card";

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
                    <MetricCard
                        key={metric.label}
                        label={metric.label}
                        value={metric.value}
                        description={metric.description}
                    />
                ))}
            </div>
        </div>
    );
}