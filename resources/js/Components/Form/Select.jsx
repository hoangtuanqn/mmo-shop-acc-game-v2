import React from "react";

export default function Select({ options, prefix = "", children, ...props }) {
    return (
        <select
            className="mt-2 w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
            {...props}
        >
            {children
                ? children
                : options.map((item) => (
                      <option key={`${prefix}${item.value}`} value={item.value}>
                          {item.placeholder}
                      </option>
                  ))}
        </select>
    );
}
