import React, { useState } from "react";
import { FaCubes, FaShoppingCart } from "react-icons/fa";
import { formatNumber } from "../../utils/functions";
import { Link } from "@inertiajs/react";
import { IoIosPricetags } from "react-icons/io";
import Button from "../../components/Form/Button";
import EmptyMesssage from "../../components/EmptyMesssage";
import { route } from "ziggy-js";
import DialogConfirm from "./DialogConfirm";

export default function index() {
    const listAccounts = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
    const [showConfirm, setShowConfirm] = useState(false);
    // const listAccounts = [];
    return (
        <div className="mb-20 grid grid-cols-2 gap-x-1.5 gap-y-6 md:grid-cols-3 md:gap-x-2.5 lg:grid-cols-4">
            {listAccounts.length > 0 ? (
                listAccounts.map((_, index) => (
                    <div
                        key={`AccountRandom-${index}`}
                        className="relative flex flex-col overflow-hidden rounded-lg border border-[#f0f0f0] shadow-[0_10px_20px_rgba(0,0,0,0.05)] duration-200 hover:transform-[translateY(-4px)] hover:bg-[#e8f0ff] hover:shadow-[0_10px_25px_rgba(10,106,255,0.12)]"
                    >
                        <img
                            src="https://shopgame247.com/uploads/accounts/tai-khoan-lien-quan-mobile-74437_5933127.png"
                            className="aspect-video w-full object-cover transition-all duration-200"
                            alt="Acc Game Có 500 robux"
                        />
                        <div className="ht-flex-center h-full flex-col justify-between bg-white px-2 pt-3 pb-5 text-xs md:mt-0 md:p-5 md:text-sm">
                            <div className="ht-flex-center w-full flex-col text-black lg:flex-row">
                                <div className="flex w-full flex-col py-3">
                                    <span className="text-center text-sm font-extrabold">
                                        Random Bubble Gum Simulator Full 250b Coin
                                    </span>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="mx-auto mb-5 flex w-fit items-center gap-2 text-gray-600">
                                    <IoIosPricetags className="hidden md:block" />
                                    <span className="text-md">
                                        <span className="font-bold text-gray-400 line-through">200.000đ</span>
                                        <span className="text-pink-second pl-1 font-bold">2.000.000đ</span>
                                    </span>
                                </div>
                                <Button className="w-full" onClick={() => setShowConfirm(true)}>
                                    Mua Ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <EmptyMesssage message="Hiện tại không tìm thấy tài khoản nào" />
            )}
            {showConfirm && <DialogConfirm isShow={setShowConfirm} />}
        </div>
    );
}
