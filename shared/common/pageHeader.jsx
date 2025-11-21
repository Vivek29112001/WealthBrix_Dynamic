"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SpkBreadcrumb from "./SpkBreadCrumb";
import { Button } from "@/components/ui/button"; // replace with shadcn button if needed

const PageHeader = ({
    title,          // Main title / first breadcrumb
    subtitle,       // Optional second breadcrumb
    subtitleLink,   // Link for the subtitle
    currentPage,    // Current page (last breadcrumb)
    backAction = true, // Show back button
    onAdd,          // Optional "Add" button handler
    onAction,       // Optional other action button
    actionTitle,    // Text for the optional action button
    breadcrumbClass // Optional class for breadcrumb
}) => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div className="flex flex-col">
                {/* Breadcrumb */}
                <SpkBreadcrumb Customclass={breadcrumbClass || "mb-1"}>
                    <li className="breadcrumb-item">
                        <Link scroll={false} href="/">
                            {title}
                        </Link>
                    </li>
                    {subtitle && (
                        <li className="breadcrumb-item">
                            <Link scroll={false} href={subtitleLink}>
                                {subtitle}
                            </Link>
                        </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                        {currentPage}
                    </li>
                </SpkBreadcrumb>

                {/* Optional Back button */}
                {backAction && (
                    <div
                        className="flex items-center cursor-pointer text-sm text-gray-500 hover:text-gray-700 mt-1"
                        onClick={handleBack}
                    >
                        <span className="mr-2">←</span> Back
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-wrap">
                {onAdd && (
                    <Button variant="default" onClick={onAdd}>
                        + Add New
                    </Button>
                )}
                {onAction && (
                    <Button variant="default" onClick={onAction}>
                        {actionTitle}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
