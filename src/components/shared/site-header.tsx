import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

//قائمة روابط التنقل. وضعناها في مصفوفة حتى لا نكرر JSX يدويًا.
const navItems = [
    {
        label: "الرئيسية",
        href: "/",
    },
    {
        label: "المميزات",
        href: "#features",
    },
    {
        label: "الأسعار",
        href: "#pricing",
    },
    {
        label: "تواصل معنا",
        href: "#contact",
    },
];
// لم نستخدم default export هنا لأن المكونات المشتركة أفضل غالبًا أن تكون named exports.
export function SiteHeader() {
    return (
        <header className="border-b bg-background">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link href="/" className="text-lg font-bold">
                    {siteConfig.name}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Button>ابدأ الآن</Button>
            </div>
        </header>
    );
}
