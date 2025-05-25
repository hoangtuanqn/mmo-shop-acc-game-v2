import React from "react";
import HeadLineCenter from "../../../components/HeadLineCenter";
import { FaUser, FaEnvelope, FaCalendarAlt, FaShieldAlt, FaCoins, FaGem, FaCrown, FaKey } from "react-icons/fa";
import HeadLine from "../../../components/Headline";

export default function Info() {
    // Giả lập dữ liệu user, sau này lấy từ props hoặc API
    const user = {
        id: 1234,
        name: "Phạm Hoàng Tuấn",
        email: "phamhoangtuanqn@gmail.com",
        joinedAt: "2023-01-01",
        balance: 2000000,
        totalDeposit: 10000000,
        tft: 10000000,
        kimcuong: 10000000,
        robux: 10000000,
        quanhuy: 10000000,
    };

    // Hàm format số
    const formatNumber = (num) => num.toLocaleString("vi-VN");

    return (
        <div className="mx-auto rounded-3xl border border-gray-100 bg-white px-7 py-8 shadow-xs">
            <HeadLine title={"Thông tin tài khoản"} customHeading="md:text-xl" />
            <div className="mt-8 flex flex-col gap-8">
                {/* Thông tin cá nhân */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FaUser />
                            <span className="text-gray-500">ID:</span>
                            <span className="font-bold">#{user.id}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUser />
                            <span className="text-gray-500">Tên tài khoản:</span>
                            <span className="font-bold">{user.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope />
                            <span className="text-gray-500">Email:</span>
                            <span className="font-bold">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span className="text-gray-500">Ngày tham gia:</span>
                            <span className="font-bold">{user.joinedAt}</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FaCoins className="text-yellow-500" />
                            <span className="text-gray-500">Số dư:</span>
                            <span className="font-bold text-blue-600">{formatNumber(user.balance)}đ</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCoins className="text-yellow-500" />
                            <span className="text-gray-500">Tổng nạp:</span>
                            <span className="font-bold text-yellow-600">{formatNumber(user.totalDeposit)}đ</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCoins className="text-yellow-500" />
                            <span className="text-gray-500">Xu TFT:</span>
                            <span className="font-bold">{formatNumber(user.tft)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGem />
                            <span className="text-gray-500">Kim Cương:</span>
                            <span className="font-bold">{formatNumber(user.kimcuong)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCrown className="text-green-500" />
                            <span className="text-gray-500">Robux:</span>
                            <span className="font-bold">{formatNumber(user.robux)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCrown className="text-pink-500" />
                            <span className="text-gray-500">Quân Huy:</span>
                            <span className="font-bold">{formatNumber(user.quanhuy)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
