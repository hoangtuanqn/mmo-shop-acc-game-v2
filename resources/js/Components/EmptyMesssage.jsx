import React from "react";

export default function EmptyMesssage({ message = " Hiện tại không tìm thấy thông tin nào!", className = "" }) {
    return (
        <div
            className={`ht-flex-center col-span-full h-[100px] rounded-lg bg-white p-5 text-sm md:text-base font-bold text-red-600 shadow-xs md:h-[200px] ${className}`}
        >
            {message}
        </div>
    );
}
