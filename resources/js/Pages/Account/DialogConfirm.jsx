import React from "react";
import Dialog from "../../components/Dialog";
import { formatNumber, showAlert } from "../../utils/functions";
import Input from "../../components/Form/Input";

export default function DialogConfirm({ isShow }) {
    const handleAccpet = () => {
        showAlert("success", "Bạn đã mua thành công");
        isShow(false);
    };
    return (
        <Dialog title="Xác nhận mua tài khoản" actionAccept={handleAccpet} isShow={isShow}>
            <div className="text-xs md:text-sm">
                <h3 className="mb-2 text-sm font-bold">Thông tin mua Acc</h3>
                <ul className="mb-2 flex flex-col gap-4 rounded-sm bg-slate-50 px-4 py-4 md:px-6">
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Danh mục</span>
                        <span className="font-bold text-black">Nick Free Fire</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Giá tiền</span>
                        <span className="font-bold text-black">2.078.000 đ</span>
                    </li>
                </ul>
                <ul className="mb-2 flex flex-col gap-4 rounded-sm bg-slate-50 px-4 py-4 md:px-6">
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Skin Súng</span>
                        <span className="font-bold text-black">Súng Vip</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Thẻ Vô Cực</span>
                        <span className="font-bold text-black">Không</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Đăng Ký</span>
                        <span className="font-bold text-black">Gmail</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Mức Rank</span>
                        <span className="font-bold text-black">Kim Cương</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Sever</span>
                        <span className="font-bold text-black">Vietnam</span>
                    </li>
                </ul>
                <ul className="mb-2 flex flex-col gap-4 rounded-sm bg-slate-50 px-4 py-4 md:px-6">
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Giá gốc</span>
                        <span className="text-pink-second font-bold">{formatNumber(650000)}đ</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Giảm giá</span>
                        <span className="font-bold text-red-600 line-through">{formatNumber(650000 - 250000)}đ</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-gray-500">Tổng thanh toán</span>
                        <span className="text-primary font-bold">{formatNumber(250000)}đ</span>
                    </li>
                </ul>
                <div className="mt-4">
                    <label htmlFor="code" className="font-bold">
                        Mã giảm giá
                    </label>
                    <Input placeholder="Mã giảm giá (Nếu có)" id="code" />
                </div>
            </div>
        </Dialog>
    );
}
