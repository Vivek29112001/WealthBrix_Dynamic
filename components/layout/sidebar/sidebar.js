"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarNav } from "@/config/sidebar-nav";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "@/context/LayoutContext";

export default function Sidebar() {
    const pathname = usePathname();

    const { isSidebarCollapsed } = useLayout();

    return (
        <>
            {/* MOBILE VIEW */}
            <div className="lg:hidden p-3 border-b">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-64">
                        <MobileSidebar />
                    </SheetContent>
                </Sheet>
            </div>

            {/* DESKTOP SIDEBAR */}
            <div
                className={cn(
                    "hidden lg:flex flex-col h-screen border-r bg-white dark:bg-neutral-900 transition-all duration-300",
                    isSidebarCollapsed ? "w-16" : "w-64"
                )}
            >
                {/* LOGO */}
                <div className="h-16 flex items-center px-4 border-b dark:border-neutral-800">
                    {!isSidebarCollapsed && (
                        <h1 className="font-bold text-xl whitespace-nowrap">Wealth Brix</h1>
                    )}
                </div>

                {/* NAVIGATION */}
                <ScrollArea className="flex-1">
                    <nav className="py-4 space-y-1">
                        {sidebarNav.map((item) => {
                            const Icon = item.icon;
                            const active = pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-all",
                                        active
                                            ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {!isSidebarCollapsed && <span>{item.title}</span>}
                                </Link>
                            );
                        })}
                    </nav>
                </ScrollArea>

                {/* FOOTER AREA */}
                <div className="p-4 border-t dark:border-neutral-800 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>WB</AvatarFallback>
                    </Avatar>

                    {!isSidebarCollapsed && (
                        <div>
                            <p className="text-sm font-medium">Wealth Brix</p>
                            <p className="text-xs text-neutral-500">admin@wb.com</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function MobileSidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full bg-white dark:bg-neutral-900">
            <div className="h-16 flex items-center px-4 border-b">
                <h1 className="font-bold text-xl">Wealth Brix</h1>
            </div>

            <ScrollArea className="flex-1 px-2 py-4">
                {sidebarNav.map((item) => {
                    const Icon = item.icon;
                    const active = pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                                active
                                    ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            {item.title}
                        </Link>
                    );
                })}
            </ScrollArea>
        </div>
    );
}
