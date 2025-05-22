import React from "react";

export default function Description({ children }) {
    return (
        <div className="game-description relative mb-10 overflow-hidden rounded-lg bg-[#f8fafc] p-6 text-[15px] text-[#4b5563] shadow-lg before:absolute before:top-0 before:left-0 before:h-full before:w-[5px] before:bg-gradient-to-b before:from-[#0a6aff] before:to-[#4f46e5] before:content-['']">
            {children}
        </div>
    );
}
