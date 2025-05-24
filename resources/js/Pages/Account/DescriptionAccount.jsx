import React from "react";
import { formatNumber } from "../../utils/functions";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../components/Form/Button";

export default function DescriptionAccount() {
    return (
        <div className="flex flex-col rounded-xl bg-white p-4 shadow-sm lg:basis-5/12">
            <div className="order-1 border-b border-slate-300 pb-2">
                <h1 className="to-primary from-pink-second bg-gradient-to-l bg-clip-text pt-2 text-lg font-bold text-transparent lg:text-xl">
                    Tài Khoản Game Free Fire
                </h1>
                <span className="block pt-1 font-bold">
                    Mã số <span className="text-pink-second">#12344</span>
                </span>
            </div>

            <div className="border-primary order-4 mt-6 rounded-2xl border px-4 py-6 shadow-sm lg:order-2">
                <h3 className="border-primary relative border-l-4 pl-2 text-base font-semibold before:absolute">
                    Thông tin acc
                </h3>
                <ul className="mt-4 flex flex-col gap-4 px-4 text-xs md:text-sm">
                    <li className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Roblox:</span>
                        <span className="font-semibold">Blox Fruits</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Roblox:</span>
                        <span className="font-semibold">Blox Fruits</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Roblox:</span>
                        <span className="font-semibold">Blox Fruits</span>
                    </li>
                </ul>
            </div>
            <div className="ht-flex-center order-3 mt-6 flex-col rounded-2xl bg-gray-200 p-4 shadow-sm">
                <div className="ht-flex-center flex-col gap-2 md:flex-row md:gap-4">
                    <span className="font-semibold text-red-600 line-through">{formatNumber(650000)}đ</span>
                    <div className="ht-flex-center gap-4">
                        <span className="text-primary text-3xl font-bold">{formatNumber(250000)}đ</span>
                        <span className="bg-pink-second rounded-full px-3 py-1 text-center text-xs text-white">
                            -86%
                        </span>
                    </div>
                </div>
                <p className="mt-4 text-center text-xs text-gray-600 md:text-sm lg:mt-2">
                    Giá cả phải chăng, mang đến giá trị tuyệt vời cho bạn
                </p>
            </div>
            <Button className="order-2 mt-6 w-full py-4 lg:order-4">
                <FaShoppingCart />
                <span>Mua Ngay</span>
            </Button>
        </div>
    );
}
