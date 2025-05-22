import React from "react";

export default function HeadLineCenter({ title, customHeading }) {
    return (
        <h2
            className={`before:bg-primary text-md relative mb-6 pb-2.5 text-center font-bold uppercase before:absolute before:bottom-0 before:left-[50%] before:h-[3px] before:w-[60px] before:transform-[translate(-50%)] before:rounded-lg md:text-2xl ${customHeading}`}
        >
            {title}
        </h2>
    );
}
