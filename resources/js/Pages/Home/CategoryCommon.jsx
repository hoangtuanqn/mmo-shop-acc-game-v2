import React from "react";
import HeadLine from "./HeadLine";

export default function Category({ data }) {
    return (
        <div className="mb-20">
            <HeadLine nameCategory={"Danh mục game phổ biến"} />
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
                {data.map((item) => (
                    <div
                        key={`${item.name}-${item.id}`}
                        className="ht-flex-center group max-h-[120px] cursor-pointer flex-col rounded-lg border border-[#0a6aff26] bg-[#f0f5ff] px-10 py-4 shadow-[0_5px_15px_#00000008] transition-all duration-200 hover:transform-[translateY(-4px)] hover:border-[rgba(10,106,255,0.3)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="mb-2 aspect-square w-[55px] rounded-full bg-white p-[5px]"
                        />
                        <span className="text-sm font-medium text-center text-primary">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
