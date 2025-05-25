import React from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { PiGameControllerBold } from "react-icons/pi";
import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { formatNumber } from "../../utils/functions";
import HeadLine from "./../../components/Headline";
import CategoryStats from "./CategoryStats";
import { IoIosPricetags, IoMdPricetag } from "react-icons/io";

export default function Categories({ nameCategory, categories, url = "/", urlIconImage, type }) {
    return (
        <div className="mb-20">
            <HeadLine title={nameCategory} view={true} url={url} type={type} />
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
                {categories.map((category, key) => (
                    <Link
                        href={category.url}
                        key={`${category.name}-${category.id}`}
                        className="border-primary relative flex flex-col overflow-hidden rounded-lg border shadow-[0_10px_20px_rgba(0,0,0,0.05)] duration-200 hover:transform-[translateY(-4px)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
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
                        <div className="flex h-full flex-col items-center justify-between bg-white px-2 py-3 text-xs md:mt-0 md:px-2 md:py-5 md:text-sm">
                            <div className="ht-flex-center flex-col gap-2">
                                <h2 className="text-center text-sm font-bold md:line-clamp-2 md:text-base md:hover:line-clamp-none">
                                    {category.name}
                                </h2>
                                <div className="ht-flex-center text-gray-dark flex-col gap-2 lg:flex-row">
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
                                                <p className="text-center font-bold text-red-600">
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
                                    {type === "tryYourLuck" && (
                                        <CategoryStats
                                            name="Đã chơi:"
                                            value={formatNumber(category.sold)}
                                            Icon={<PiGameControllerBold />}
                                        />
                                    )}
                                    {type === "random" && (
                                        <>
                                            <div className="ht-flex-center flex-col gap-2">
                                                <div className="text-xs md:text-sm">
                                                    <span className="font-semibold text-gray-400 line-through">
                                                        {formatNumber(category.original_price ?? 300000)}đ
                                                    </span>
                                                </div>
                                                <CategoryStats
                                                    name="Giá:"
                                                    value={`${formatNumber(category.price)}đ`}
                                                    Icon={<IoMdPricetag />}
                                                />
                                            </div>
                                        </>
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
