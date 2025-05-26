import React, { useEffect, useState } from "react";
import { formatNumber } from "../../utils/functions";
import { FaFire, FaShoppingCart } from "react-icons/fa";
import Button from "../../components/Form/Button";
import DialogConfirm from "./DialogConfirm";
import { HiShoppingCart } from "react-icons/hi2";

export default function DescriptionAccount() {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <>
            <div className="flex w-full flex-col rounded-xl bg-white p-4 shadow-sm lg:basis-5/12">
                <div className="order-1 border-b border-slate-300 pb-2">
                    <h1 className="to-primary from-pink-second bg-gradient-to-l bg-clip-text pt-2 text-lg font-bold text-transparent lg:text-xl">
                        Tài Khoản Game Free Fire
                    </h1>
                    <span className="block pt-1 font-bold">
                        Mã số <span className="text-pink-second">#12344</span>
                    </span>
                </div>

                <div className="border-primary order-2 mt-2 rounded-xl border px-4 py-2 shadow-sm md:py-6">
                    <h3 className="border-primary relative border-l-4 pl-2 text-base font-semibold before:absolute">
                        Thông tin acc
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2 px-2 text-xs md:text-sm">
                        <li className="mt-2 flex items-center justify-between border-b border-slate-200 pb-1">
                            <span>Tướng:</span>
                            <span className="font-semibold">88</span>
                        </li>
                        <li className="mt-2 flex items-center justify-between border-b border-slate-200 pb-1">
                            <span>Trang phục:</span>
                            <span className="font-semibold">4</span>
                        </li>
                        <li className="mt-2 flex items-center justify-between border-b border-slate-200 pb-1">
                            <span>Hạng:</span>
                            <span className="font-semibold">Đồng</span>
                        </li>
                        <li className="mt-2 flex items-center justify-between border-b border-slate-200 pb-1">
                            <span>Thông tin:</span>
                            <span className="font-semibold">Trắng thông tin</span>
                        </li>
                    </ul>
                </div>
                <div className="ht-flex-center order-3 mt-3 flex-col rounded-2xl bg-gray-200 p-4 shadow-sm">
                    <div className="ht-flex-center gap-2">
                        <div className="ht-flex-center gap-4">
                            <span className="text-xl font-bold text-red-600 md:text-3xl">{formatNumber(250000)}đ</span>
                        </div>
                        <span className="text-base font-semibold text-gray-400 line-through">
                            {formatNumber(650000)}đ
                        </span>
                    </div>
                    <p className="mt-2 text-center text-xs text-gray-600 md:text-sm lg:mt-2">
                        Giá cả phải chăng, mang đến giá trị tuyệt vời cho bạn
                    </p>
                </div>

                <Button className="order-4 mt-3 w-full py-4 lg:order-4" onClick={() => setShowConfirm(true)}>
                    <HiShoppingCart />
                    <span>Mua Ngay</span>
                </Button>
            </div>
            {showConfirm && <DialogConfirm isShow={setShowConfirm} />}
        </>
    );
}
