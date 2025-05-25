import React from "react";
import ItemLink from "./ItemLink";
import { formatNumber } from "../../../utils/functions";
import { route } from "ziggy-js";

export default function Sidebar() {
    const userInfo = [
        { label: "ID:", value: "#1234" },
        { label: "Số dư:", value: `${formatNumber(2000000)}đ` },
        { label: "Tổng nạp:", value: `${formatNumber(10000000)}đ` },
        { label: "Xu TFT:", value: formatNumber(10000000) },
        { label: "Kim Cương:", value: formatNumber(10000000) },
        { label: "Robux:", value: formatNumber(10000000) },
        { label: "Quân Huy:", value: formatNumber(10000000) },
    ];

    const accountActions = [
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/ttin%20tai%20khoan.png",
            name: "Thông tin tài khoản",
            url: route("profile.index"),
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/doi%20mk.png",
            name: "Đổi mật khẩu",
            url: route("profile.changePassword"),
        },
    ];

    const referralLinks = [
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/Ma%20gi%E1%BB%9Bi%20thi%E1%BB%87u.png",
            name: "Giới thiệu bạn bè",
            url: route('profile.affiliate'),
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/Minigame%20gi%E1%BB%9Bi%20thi%E1%BB%87u%20b%E1%BA%A1n%20be.png",
            name: "Minigame giới thiệu bạn bè",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/L%E1%BB%8Bch%20s%E1%BB%AD%20choi%20minigame%20gi%E1%BB%9Bi%20thi%E1%BB%87u.png",
            name: "Lịch sử chơi minigame giới thiệu",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/L%E1%BB%8Bch%20s%E1%BB%AD%20nh%E1%BA%ADn%20hoa%20h%E1%BB%93ng.png",
            name: "Lịch sử nhận hoa hồng",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/Quy%20d%E1%BB%95i%20hoa%20h%E1%BB%93ng.png",
            name: "Rút tiền giới thiệu",
            url: "#",
        },
    ];

    const transactionHistoryLinks = [
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/bien%20dong%20so%20du.png",
            name: "Biến động số dư",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/tk%20hien%20co.png",
            name: "Tài khoản đã mua",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/lich%20su%20choi%20minigame.png",
            name: "Lịch sử chơi minigame",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/lich%20su%20dat%20coc.png",
            name: "Lịch sử đặt cọc",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/tk%20hien%20co.png",
            name: "Tài khoản mua KT",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/lich%20su%20trung%20acc%20minigame.png",
            name: "Lịch sử minigame trúng nick",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/dich%20vu%20da%20mua.png",
            name: "Dịch vụ đã thuê",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/lich%20su%20nap%20the.png",
            name: "Lịch sử nạp thẻ",
            url: "#",
        },
        {
            src: "https://cdn3.upanh.info/upload/server-sw3/images/Icon/lich%20su%20ap%20atm%20tu%20dong.png",
            name: "Lịch sử nạp ATM",
            url: "#",
        },
    ];

    const thaoTacLinks = [
        {
            src: "https://shopbacgau.com/assets/frontend/theme_5/image/nam/log-out.svg",
            name: "Đăng xuất",
            url: "#",
        },
    ];

    function UserInfoList({ items }) {
        return (
            <ul className="relative z-10 flex flex-col gap-2">
                {items.map((item, idx) => (
                    <li
                        key={item.label + idx}
                        className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 text-xs transition hover:bg-blue-50"
                    >
                        <span className="text-gray-500">{item.label}</span>
                        <span className="text-primary font-semibold">{item.value}</span>
                    </li>
                ))}
            </ul>
        );
    }

    function ItemLinkList({ items }) {
        return (
            <ul className="flex flex-col gap-2">
                {items.map((item, idx) => (
                    <li key={item.name + idx}>
                        <ItemLink {...item} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            {/* User Info */}
            <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-7 py-6 shadow-xs">
                <div className="pointer-events-none absolute top-0 right-0 opacity-10">
                    <svg width="120" height="120" fill="none">
                        <circle cx="60" cy="60" r="60" fill="#3B82F6" />
                    </svg>
                </div>
                <h4 className="mb-5 border-b border-blue-100 pb-2 pl-1 text-base font-bold tracking-wide">
                    Thông tin của bạn
                </h4>
                <UserInfoList items={userInfo} />
            </section>

            {/* Account Actions */}
            <section className="rounded-3xl border border-gray-100 bg-white px-7 py-5 shadow-xs">
                <nav>
                    <ItemLinkList items={accountActions} />
                </nav>
            </section>

            {/* Referral */}
            <section className="rounded-3xl border border-gray-100 bg-white px-7 py-5 shadow-xs">
                <h4 className="mb-4 border-b border-gray-100 pb-2 pl-1 text-base font-bold tracking-wide">Hoa hồng</h4>
                <nav>
                    <ItemLinkList items={referralLinks} />
                </nav>
            </section>

            {/* Transaction History */}
            <section className="rounded-3xl border border-gray-100 bg-white px-7 py-5 shadow-xs">
                <h4 className="mb-4 border-b border-gray-100 pb-2 pl-1 text-base font-bold tracking-wide">
                    Lịch sử giao dịch
                </h4>
                <nav>
                    <ItemLinkList items={transactionHistoryLinks} />
                </nav>
            </section>

            {/* Logout */}
            <section className="rounded-3xl border border-gray-100 bg-white px-7 py-5 shadow-xs">
                <h4 className="mb-4 border-b border-gray-100 pb-2 pl-1 text-base font-bold tracking-wide">Thao tác</h4>
                <nav>
                    <ItemLinkList items={thaoTacLinks} />
                </nav>
            </section>
        </>
    );
}
