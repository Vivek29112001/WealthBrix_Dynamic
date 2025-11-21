import {
    LayoutDashboard,
    Users,
    ChartPie,
    Settings,
    Folder
} from "lucide-react";

export const sidebarNav = [
    {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        href: "/users",
        icon: Users,
    },
    {
        title: "Projects",
        href: "/projects",
        icon: Folder,
    },
    {
        title: "Analytics",
        href: "/analytics",
        icon: ChartPie,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];
