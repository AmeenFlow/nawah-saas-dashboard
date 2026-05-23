import Link from "next/link";

import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";



export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    {siteConfig.name}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="hidden sm:inline-flex">
                        تسجيل الدخول
                    </Button>

                    <Button>ابدأ الآن</Button>
                </div>
            </div>
        </header>
    );
}