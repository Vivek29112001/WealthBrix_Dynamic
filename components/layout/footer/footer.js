"use client";

import Link from "next/link";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="mt-auto py-4 bg-white dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <span className="text-sm text-muted-foreground dark:text-gray-400">
                        © <span id="year">2025</span>{" "}
                        <Link href="/" className="text-gray-900 dark:text-white font-medium hover:underline">
                            Wealth Brix
                        </Link>
                        . Developed by{" "}
                        <Link
                            href="https://www.linkedin.com/in/vivek2911/"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Vivek Sharma
                        </Link>{" "}
                        All rights reserved
                    </span>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
