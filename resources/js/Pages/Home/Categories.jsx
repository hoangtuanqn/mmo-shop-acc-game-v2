import React from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { PiGameControllerBold } from "react-icons/pi";
import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { formatNumber } from "../../utils/functions";
import HeadLine from "./../../components/Headline";
import CategoryStats from "./CategoryStats";

export default function Categories({ nameCategory, categories, url = "/", urlIconImage, type }) {
    return (
        <div className="mb-20">
            <HeadLine title={nameCategory} view={true} url={url} />
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
                {categories.map((category, key) => (
                    <Link
                        href={route("account", {
                            slug: "123",
                        })}
                        key={`${category.name}-${category.id}`}
                        className="border-primary relative flex flex-col overflow-hidden rounded-lg border shadow-[0_10px_20px_rgba(0,0,0,0.05)] duration-200 hover:transform-[translateY(-4px)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
                    >
                        {key <= 2 && (
                            <span className="hidden game-item_top md:block">
                                <TiStar className="mx-auto text-lg" />{" "}
                                <span className="block text-xs">Top {key + 1}</span>
                            </span>
                        )}
                        <img
                            src={category.image}
                            className="object-cover w-full transition-all duration-200 aspect-video"
                            alt={category.name}
                        />
                        <div className="flex flex-col items-center justify-between h-full px-2 py-3 text-xs bg-white md:mt-0 md:p-5 md:text-sm">
                            <div className="flex-col gap-2 ht-flex-center">
                                <h2 className="text-sm font-bold text-center md:line-clamp-1 md:text-lg md:hover:line-clamp-none">
                                    {category.name}
                                </h2>
                                <div className="flex-col gap-2 ht-flex-center text-gray-dark lg:flex-row">
                                    {type === "account" && (
                                        <>
                                            {category.remaining > 0 ? (
                                                <>
                                                    <CategoryStats
                                                        name="Còn:"
                                                        value={formatNumber(category.remaining)}
                                                        Icon={<FaCubes />}
                                                    />
                                                    <CategoryStats
                                                        name="Bán:"
                                                        value={formatNumber(category.sold)}
                                                        Icon={<FaShoppingCart />}
                                                    />
                                                </>
                                            ) : (
                                                <p className="font-bold text-center text-red-600">
                                                    Tài khoản đã được bán hết
                                                </p>
                                            )}
                                        </>
                                    )}

                                    {type === "service" && (
                                        <CategoryStats
                                            name="Đã thuê:"
                                            value={formatNumber(category.sold)}
                                            Icon={<FaShoppingCart />}
                                        />
                                    )}
                                    {type === "luckyWheel" && (
                                        <CategoryStats
                                            name="Đã quay:"
                                            value={formatNumber(category.sold)}
                                            Icon={<PiGameControllerBold />}
                                        />
                                    )}
                                </div>
                            </div>
                            <img src={urlIconImage} alt="Xem tất cả" className="mt-2 w-[137px] object-cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
