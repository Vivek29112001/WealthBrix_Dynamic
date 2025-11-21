"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLayout } from "@/context/LayoutContext";
import { Bell, LayoutPanelLeft, Search } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme/theme-toggle";


export default function Header() {
    const { isSidebarCollapsed, setIsSidebarCollapsed } = useLayout();

    return (
        <header className="h-16 flex items-center justify-between px-6 border-b bg-white dark:bg-neutral-900">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">

                {/* SIDEBAR TOGGLE */}
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                >
                    <LayoutPanelLeft className="w-5 h-5" />
                </Button>

                {/* SEARCH BOX */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1 border rounded-lg bg-neutral-50 dark:bg-neutral-800">
                    <Search className="w-4 h-4 text-neutral-500" />
                    <input
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm w-40"
                    />
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

                {/* THEME SWITCHER */}
                <ThemeToggle />


                {/* NOTIFICATION */}
                <Button size="icon" variant="ghost">
                    <Bell className="w-5 h-5" />
                </Button>

                {/* USER AVATAR MENU */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="/assets/avatar.jpg" />
                            <AvatarFallback>WB</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>
                            <p className="font-medium">Wealth Brix</p>
                            <p className="text-xs text-neutral-500">user@wb.com</p>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-red-600">
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
