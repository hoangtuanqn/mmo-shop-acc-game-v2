import React, { useState } from "react";
import HeadLine from "./../../components/Headline";
import { dataServices } from "./fakerData";
import { MdPayments } from "react-icons/md";
import { formatNumber, showAlert } from "../../utils/functions";
import { BsEyeSlashFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import Button from "../../components/Form/Button";

export default function OrderService() {
    const [isShowPasssword, setIsShowPasssword] = useState(false);
    const [data, setData] = useState({
        package_id: "",
        game_account: "",
        password_account: "",
        info_required: "",
        note: "",
        giftcode: "",
        total: 0,
    });
    const handleShowPassword = () => {
        setIsShowPasssword((is) => !is);
    };
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value],
        });
        if (e.target.name === "package_id") {
            setData({
                ...data,
                total: dataServices[e.target.value - 1].price,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert("success", "Đã Đặt Dịch Vụ Thành Công! Theo Dõi Đơn Hàng Tại Lịch Sử Dịch Vụ.");
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-sm">
            <HeadLine title={"Thông tin đặt dịch vụ"} customHeading="md:text-xl" />
            <form action="" className="flex flex-col w-full gap-4 md:gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="package_id" className="font-medium text-gray-600">
                        Dịch vụ
                    </label>
                    <select
                        name="package_id"
                        id="package_id"
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                        required
                    >
                        {dataServices.map((item) => (
                            <option key={`${item.service}-${item.id}`} value={item.id}>
                                {item.service}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="game_account" className="font-medium text-gray-600">
                            Tài Khoản
                        </label>
                        <input
                            type="text"
                            id="game_account"
                            name="game_account"
                            onChange={handleChange}
                            className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                            placeholder="Tài khoản game của bạn"
                            required
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="game_password" className="font-medium text-gray-600">
                            Mật Khẩu
                        </label>
                        <div className="relative flex flex-col">
                            <input
                                type={isShowPasssword ? "text" : "password"}
                                id="game_password"
                                name="game_password"
                                onChange={handleChange}
                                className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 pr-10 text-gray-600 duration-400"
                                placeholder="Mật khẩu game của bạn"
                                required
                            />
                            {isShowPasssword ? (
                                <BsEyeSlashFill
                                    className="ht-icon absolute top-[35%] right-4 cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            ) : (
                                <HiEye
                                    className="ht-icon trans absolute top-[35%] right-4 cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="info_required" className="font-medium text-gray-600">
                            Thông tin cần thiết
                        </label>
                        <input
                            type="text"
                            id="info_required"
                            name="info_required"
                            onChange={handleChange}
                            className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                            placeholder="Link game pass, máy chủ hoặc thông tin cần thiết, ..."
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
                    <div className="flex flex-col flex-1">
                        <label className="font-medium text-gray-600">Tổng tiền</label>
                        <input
                            type="text"
                            value={formatNumber(data.total) + "đ"}
                            className="ht-disabled mt-2 h-full w-full rounded-lg border border-[#ddd] px-4 py-2 text-gray-600 duration-400"
                            disabled
                            placeholder="Tổng tiền phải thanh toán"
                            required
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="giftcode" className="font-medium text-gray-600">
                            Mã giảm giá (Nếu có)
                        </label>
                        <input
                            type="text"
                            id="giftcode"
                            name="giftcode"
                            onChange={handleChange}
                            className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                            placeholder="Bỏ qua nếu không có"
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="note" className="font-medium text-gray-600">
                        Ghi chú
                    </label>
                    <textarea
                        type="text"
                        id="note"
                        name="note"
                        onChange={handleChange}
                        className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                        placeholder="Ghi chú cho người cày thuê biết ... (nếu có)"
                        rows={4}
                    />
                </div>

                <Button type="submit" className="w-full">
                    <MdPayments /> Thanh toán
                </Button>
            </form>
        </div>
    );
}
