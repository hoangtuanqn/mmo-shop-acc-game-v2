import React from "react";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { FaHome, FaCoins, FaHistory, FaMoneyBillWave, FaNewspaper, FaUser, FaRegUser } from "react-icons/fa";

export default function Header() {
    const { url, component } = usePage();
    return (
        <div className="mb-9">
            <div className="border-b-1 border-[#00000010] py-4">
                <div className="flex items-center justify-between container-content">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Logo Website" className="w-[150px]" />
                    </Link>
                    <div className="hidden gap-x-2 min-lg:flex">
                        <button className="ht-button-color-primary">Đăng ký</button>
                        <button className="ht-button-color-primary">Đăng nhập</button>
                    </div>
                    <div className="lg:hidden">
                        <a href="#" className="block p-4 text-black rounded-full bg-slate-200">
                            <FaRegUser />
                        </a>
                    </div>
                </div>
            </div>
            <nav className="hidden container-content min-lg:block">
                <ul className="flex pt-2 gap-x-1">
                    <li>
                        <Link
                            href="#"
                            className={clsx({
                                "ht-item-link": true,
                                active: url === "/" ? "active" : "",
                            })}
                        >
                            <FaHome className="ht-icon" />
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="ht-item-link">
                            <FaCoins className="ht-icon" />
                            Nạp tiền
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="ht-item-link">
                            <FaHistory className="ht-icon" />
                            Lịch sử mua nick
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="ht-item-link">
                            <FaUser className="ht-icon" />
                            Tài khoản
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="ht-item-link">
                            <FaMoneyBillWave className="ht-icon" />
                            Dòng tiền
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="ht-item-link">
                            <FaNewspaper className="ht-icon" />
                            Tin tức
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
