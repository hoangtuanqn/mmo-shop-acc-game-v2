import React, { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { FaHome, FaCoins, FaHistory, FaMoneyBillWave, FaNewspaper, FaUser, FaRegUser } from "react-icons/fa";
import { route } from "ziggy-js";
import Button from "./Form/Button";

export default function Header() {
    const { url } = usePage();

    return (
        <header className="ht-background-blur sticky top-2 z-50 mx-4 mt-4 mb-9 rounded-lg bg-white shadow-sm">
            <div className="container-content mx-auto flex items-center justify-between py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo Website" className="h-auto w-34 object-contain" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden gap-2 xl:flex">
                    <NavLink href="/" active={url === "/"} icon={<FaHome />}>
                        Trang chủ
                    </NavLink>
                    <NavLink href="/nap-tien" active={url === "/nap-tien"} icon={<FaCoins />}>
                        Nạp tiền
                    </NavLink>
                    <NavLink href="/lich-su-mua-nick" active={url === "/lich-su-mua-nick"} icon={<FaHistory />}>
                        Lịch sử mua nick
                    </NavLink>
                    <NavLink href="/tai-khoan" active={url === "/tai-khoan"} icon={<FaUser />}>
                        Tài khoản
                    </NavLink>
                    <NavLink href="/dong-tien" active={url === "/dong-tien"} icon={<FaMoneyBillWave />}>
                        Dòng tiền
                    </NavLink>
                    <NavLink href="/tin-tuc" active={url === "/tin-tuc"} icon={<FaNewspaper />}>
                        Tin tức
                    </NavLink>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden gap-2 xl:flex">
                    <Link
                        href={route("auth.login")}
                        className="rounded-lg border border-blue-500 px-5 py-2 text-center font-semibold text-blue-500 transition hover:bg-blue-50"
                    >
                        Đăng nhập
                    </Link>

                    <Button href={route("auth.register")} Element="Link">
                        Đăng ký
                    </Button>
                    {/* <Link
                        href={route("auth.register")}
                        className="px-8 py-2 font-semibold text-center text-white transition rounded-lg shadow from-primary bg-gradient-to-r to-blue-500 hover:from-blue-600 hover:to-indigo-600"
                    >
                        Đăng ký
                    </Link> */}
                </div>

                {/* Mobile Hamburger & User */}
                <div className="flex items-center gap-2 xl:hidden">
                    <Link
                        href={route("auth.login")}
                        className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                    >
                        <FaRegUser size={22} />
                    </Link>
                    {/* Nếu muốn có menu mobile, có thể thêm button mở menu ở đây */}
                </div>
            </div>
            {/* Mobile Menu (optional, có thể thêm nếu muốn) */}
        </header>
    );
}

// Component cho từng NavLink
function NavLink({ href, active, icon, children }) {
    return (
        <Link
            href={href}
            className={clsx(
                "flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition",
                active ? "bg-blue-100 text-blue-600 shadow" : "text-gray-700 hover:bg-gray-100 hover:text-blue-500",
            )}
        >
            <span className="text-lg">{icon}</span>
            <span>{children}</span>
        </Link>
    );
}
