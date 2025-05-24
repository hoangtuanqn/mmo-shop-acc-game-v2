import React from "react";
import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { IoIosPricetags } from "react-icons/io";
import Button from "../../components/Form/Button";
import EmptyMesssage from "../../components/EmptyMesssage";

export default function ListAccounts() {
    const listAccounts = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
    // const listAccounts = [];
    return (
        <div className="grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
            {listAccounts.length > 0 ? (
                listAccounts.map((_, index) => (
                    <Link
                        href="#"
                        key={`Account-${index}`}
                        className="relative flex flex-col overflow-hidden rounded-lg border border-[#f0f0f0] shadow-[0_10px_20px_rgba(0,0,0,0.05)] duration-200 hover:transform-[translateY(-4px)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
                    >
                        <span className="bg-primary absolute top-2 left-2 z-10 rounded-lg px-[10px] py-[5px] text-xs font-medium text-white">
                            MS: 123456
                        </span>
                        <span className="bg-pink-second absolute top-2 right-2 z-10 rounded-lg px-[10px] py-[5px] text-xs font-medium text-white">
                            -10%
                        </span>
                        <img
                            src="https://shopgame247.com/uploads/accounts/tai-khoan-lien-quan-mobile-74437_5933127.png"
                            className="object-cover w-full transition-all duration-200 aspect-video"
                            alt="Acc Game Có 500 robux"
                        />
                        <div className="flex-col justify-between h-full px-4 pt-3 pb-5 text-xs bg-white ht-flex-center md:mt-0 md:p-5 md:text-sm">
                            <div className="flex-col w-full text-black ht-flex-center lg:flex-row">
                                <div className="flex flex-col w-full py-3">
                                    <div className="flex items-center justify-between w-full mb-3">
                                        <span>Tướng:</span>
                                        <span className="font-bold">88</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full mb-3">
                                        <span>Trang phục:</span>
                                        <span className="font-bold">4</span>
                                    </div>

                                    <div className="flex items-center justify-between w-full mb-3">
                                        <span>Hạng:</span>
                                        <span className="font-bold">Đồng</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full mb-3">
                                        <span>Thông tin:</span>
                                        <span className="font-bold">Trắng thông tin</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center gap-2 mx-auto mb-5 text-gray-600 w-fit">
                                    <IoIosPricetags className="hidden md:block" />
                                    <span className="text-md">
                                        <span className="font-bold text-gray-400 line-through">200.000đ</span>
                                        <span className="pl-1 font-bold text-pink-second">2.000.000đ</span>
                                    </span>
                                </div>
                                <Button className="w-full">Chi tiết</Button>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <EmptyMesssage message="Hiện tại không tìm thấy tài khoản nào" />
            )}
        </div>
    );
}
