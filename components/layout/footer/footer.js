"use client";

import { Fragment } from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <Fragment>
            <footer className="mt-auto py-4 bg-white text-center border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <span className="text-sm text-muted-foreground">
                        © <span id="year">2025</span>{" "}
                        <Link href="/" className="text-gray-900 font-medium hover:underline">
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
