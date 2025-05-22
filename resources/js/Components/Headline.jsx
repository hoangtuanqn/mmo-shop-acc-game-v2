import { Link } from "@inertiajs/react";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function HeadLine({ title, url = "", customHeading }) {
    return (
        <div className="flex items-start justify-between">
            <h2
                className={`before:bg-primary relative mb-6 pb-2.5 text-sm font-bold uppercase before:absolute before:bottom-0 before:h-[3px] before:w-[60px] before:rounded-lg md:text-2xl ${customHeading}`}
            >
                {title}
            </h2>
            {url && (
                <Link
                    href={url}
                    className="text-primary flex items-center gap-2 rounded-full bg-[#0a6aff14] px-4 py-2 text-xs font-medium transition-all duration-200 hover:transform-[translateX(4px)] hover:bg-[#0a6aff26] md:text-sm"
                >
                    Xem tất cả <FaArrowTrendUp />
                </Link>
            )}
        </div>
    );
}
