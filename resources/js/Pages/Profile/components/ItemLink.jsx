import { Link } from "@inertiajs/react";
import React from "react";
import { HiChevronRight } from "react-icons/hi2";

export default function ItemLink({ url = "#", src: img = "", name }) {
    return (
        <Link
            href={url}
            className="group hover:text-primary flex items-center justify-between overflow-hidden rounded-lg pr-2 hover:bg-[#E8F0FF]"
        >
            <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gray-100 p-2">
                    <img src={img} alt={name} className="h-6 w-6 object-cover" />
                </div>
                <span className="group-hover:text-primary text-xs font-medium text-gray-500">{name}</span>
            </div>
            <HiChevronRight />
        </Link>
    );
}
