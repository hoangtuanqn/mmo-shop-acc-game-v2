import React from "react";

import { Link } from "@inertiajs/react";
import clsx from "clsx";

export default function Button({
    mode = "primary",
    Element = "button",
    children,
    type = "submit",
    disabled = false,
    className = "",
    href = "#",
    ...props
}) {
    const Component = Element === "Link" ? Link : Element;

    const commonClass = clsx(
        className,
        "flex cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-center text-xs font-semibold transition xl:px-8 xl:text-sm",
        {
            "disabled:cursor-not-allowed disabled:text-gray-300": disabled,
        },
    );
    const combinedClassPrimary = clsx(commonClass, "shadow", {
        "from-primary bg-gradient-to-r to-blue-500 text-white hover:from-blue-600 hover:to-indigo-600": !disabled,
    });
    const combinedClassTransparent = clsx(
        "border border-gray-300",
        clsx({
            "hover:from-primary text-primary duration-200 hover:bg-gradient-to-r hover:to-blue-500 hover:text-white":
                !disabled,
        }),
        commonClass,
    );

    const commonProps = {
        className: mode === "primary" ? combinedClassPrimary : combinedClassTransparent,
        ...(Element !== "Link" && { type, disabled }),
        ...(Element === "Link" && { href }),
        ...props,
    };

    return <Component {...commonProps}>{children}</Component>;
}
