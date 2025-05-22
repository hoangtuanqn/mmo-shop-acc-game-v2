import React, { useEffect, useState } from "react";
import HeadLine from "./../../components/Headline";
import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function CategoryGame({ nameCategory, data }) {
    return (
        <div className="mb-20">
            <HeadLine title={`Danh mục ${nameCategory}`} view={true} url="/" />
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
                {data.map((category, key) => (
                    <Link
                        href={route("account", {
                            slug: "123",
                        })}
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
                        <div className="ht-flex-center h-full flex-col gap-3 bg-white px-2 py-3 text-xs md:mt-0 md:p-5 md:text-sm">
                            <h2 className="text-center text-sm font-bold md:line-clamp-1 md:text-lg md:hover:line-clamp-none">
                                {category.name}
                            </h2>
                            <div className="ht-flex-center text-gray-dark flex-col gap-2 lg:flex-row">
                                <span className="bg-gray-light ht-flex-center w-fit gap-x-1 rounded-full px-3 py-2">
                                    <FaCubes />
                                    Còn:
                                    <span className="text-primary font-semibold">
                                        {formatNumber(category.remaining)}
                                    </span>
                                </span>
                                <span className="bg-gray-light ht-flex-center w-fit gap-x-1 rounded-full px-3 py-2">
                                    <FaShoppingCart />
                                    Bán:
                                    <span className="text-primary font-semibold">{formatNumber(category.sold)}</span>
                                </span>
                            </div>
                            <img
                                src="https://shopnickv3.baocms.net/_assets/images/stores/view-all.gif"
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
