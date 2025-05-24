import React from "react";

export default function CategoryStats({ Icon = "", name, value }) {
    return (
        <span className="px-3 py-2 rounded-full bg-gray-light ht-flex-center w-fit gap-x-1">
            {Icon}
            {name}
            <span className="font-semibold text-primary">{value}</span>
        </span>
    );
}
