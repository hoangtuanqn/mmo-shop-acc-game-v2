import React from "react";
import HeadLine from "./HeadLine";
import { TiStar } from "react-icons/ti";
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { PiGameControllerBold } from "react-icons/pi";

export default function CategoryLucky({ data }) {
    return (
        <div className="mb-20">
            <HeadLine nameCategory={`Danh mục Vòng Quay May Mắn`} view={true} url="/" />
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
                {data.map((category, key) => (
                    <Link
                        href="#"
                        key={`${category.name}-${category.id}`}
                        className="relative flex flex-col overflow-hidden rounded-lg border border-[#f0f0f0] shadow-[0_10px_20px_rgba(0,0,0,0.05)] duration-200 hover:transform-[translateY(-4px)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
                    >
                        {key <= 2 && (
                            <span className="game-item_top hidden md:block">
                                <TiStar className="mx-auto text-lg" />{" "}
                                <span className="block text-xs">Top {key + 1}</span>
                            </span>
                        )}
                        <img
                            src={category.image}
                            className="aspect-video w-full object-cover transition-all duration-200"
                            alt={category.name}
                        />
                        <div className="ht-flex-center flex-col gap-3 bg-white px-2 py-3 text-xs md:mt-0 md:p-5 md:text-sm">
                            <h2 className="text-center text-sm font-bold md:line-clamp-1 md:text-lg md:hover:line-clamp-none">
                                {category.name}
                            </h2>
                            <div className="ht-flex-center text-gray-dark flex-col gap-2 lg:flex-row">
                                <span className="bg-gray-light ht-flex-center w-fit gap-x-1 rounded-full px-3 py-2">
                                    <PiGameControllerBold />
                                    Đã quay:
                                    <span className="text-primary font-semibold">{formatNumber(category.sold)}</span>
                                </span>
                            </div>
                            <img
                                src="https://quanlyshop.vip/upload/doanhmuc/1744092413553173.png"
                                alt="Xem tất cả"
                                className="mt-3"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
