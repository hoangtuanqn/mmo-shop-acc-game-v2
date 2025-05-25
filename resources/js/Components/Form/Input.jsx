import React from "react";
import clsx from "clsx";
export default function Input({ id = "", type = "text", disabled = false, className = "", ...props }) {
    return (
        <input
            type={type}
            className={clsx(
                "mt-2 h-full w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-600 duration-400 " +
                    (disabled ? "ht-disabled" : " bg-white"),
                className,
            )}
            id={id}
            disabled={disabled}
            {...props}
        />
    );
}
