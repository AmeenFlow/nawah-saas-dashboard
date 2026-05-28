import { notFound } from "next/navigation";

import { isLocale } from "@/lib/locale";
import type { Locale } from "@/types/locale";

type MetricItem = Readonly<{
    label: string;
    value: string;
    description: string;
}>;

const metrics = {
    ar: [
        {
            label: "المهام النشطة",
            value: "24",
            description: "مهام قيد المتابعة هذا الأسبوع",
        },
        {
            label: "أعضاء الفريق",
            value: "8",
            description: "أعضاء يعملون داخل المساحة",
        },
        {
            label: "نسبة الإنجاز",
            value: "76%",
            description: "متوسط تقدم العمل الحالي",
        },
        {
            label: "المؤشرات",
            value: "12",
            description: "مؤشرات أداء يتم تتبعها",
        },
    ],
    en: [
        {
            label: "Active tasks",
            value: "24",
            description: "Tasks being tracked this week",
        },
        {
            label: "Team members",
            value: "8",
            description: "Members working in the workspace",
        },
        {
            label: "Completion rate",
            value: "76%",
            description: "Average progress across work",
        },
        {
            label: "Metrics",
            value: "12",
            description: "Performance indicators tracked",
        },
    ],
} satisfies Record<Locale, MetricItem[]>;

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

    const pageMetrics = metrics[locale];

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {locale === "ar" ? "نظرة عامة" : "Overview"}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    {locale === "ar"
                        ? "تابع أهم مؤشرات فريقك من مكان واحد."
                        : "Track your team’s key indicators from one place."}
                </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {pageMetrics.map((metric) => (
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