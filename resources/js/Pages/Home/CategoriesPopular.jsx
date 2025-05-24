import React from "react";
import HeadLine from "../../components/Headline";

export default function Category({ data }) {
    return (
        <div className="mb-20">
            <HeadLine title={"Danh mục game phổ biến"} />
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
                {data.map((item) => (
                    <div
                        key={`${item.name}-${item.id}`}
                        className="ht-flex-center group border-primary max-h-[120px] cursor-pointer flex-col rounded-lg border bg-white px-2 py-4 shadow-[0_5px_15px_#00000008] transition-all duration-200 hover:transform-[translateY(-4px)] hover:border-[rgba(10,106,255,0.3)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)] lg:px-6"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="mb-2 aspect-square w-[45px] rounded-full object-center"
                        />
                        <span className="text-xs font-medium text-center text-primary lg:text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
