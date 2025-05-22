import React, { useState } from "react";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import { showAlert } from "../../utils/functions";
import MasterLayout from "../../layout/MasterLayout";
import { MdEmail } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { BsEyeSlashFill } from "react-icons/bs";
const ConfirmResetPassword = ({ email }) => {
    const [data, setData] = useState({
        password: "",
        password_confirmation: "",
    });
    const [isShowPasssword, setIsShowPasssword] = useState(false);
    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, password_confirmation } = data;
        if (password !== password_confirmation) {
            return showAlert("error", "Nhập Lại Mật Khẩu Không Khớp!");
        }
        showAlert("success", "Đặt Lại Mật Khẩu Thành Công!");
    };
    const handleShowPassword = () => {
        setIsShowPasssword((is) => !is);
    };
    return (
        <>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">Địa Chỉ Email</label>
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            value={email}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10 text-sm text-slate-800 disabled:cursor-not-allowed disabled:bg-gray-100"
                            placeholder="Địa Chỉ Email"
                            disabled
                        />
                        <MdEmail className="ht-icon absolute right-4 max-sm:hidden" />
                    </div>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">Nhập Mật Khẩu Mới</label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type={isShowPasssword ? "text" : "password"}
                            onChange={handleChange}
                            value={data?.password}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-3 pr-10 text-sm text-slate-800"
                            placeholder="Mật khẩu mới của bạn"
                        />
                        {isShowPasssword ? (
                            <BsEyeSlashFill
                                className="ht-icon absolute right-4 cursor-pointer"
                                onClick={handleShowPassword}
                            />
                        ) : (
                            <HiEye className="ht-icon absolute right-4 cursor-pointer" onClick={handleShowPassword} />
                        )}
                    </div>
                </div>{" "}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">Nhập Lại Mật khẩu</label>
                    <div className="relative flex items-center">
                        <input
                            name="password_confirmation"
                            type={isShowPasssword ? "text" : "password"}
                            onChange={handleChange}
                            value={data?.password_confirmation}
                            required
                            className="outline-primary pr-10pr-10 w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-800"
                            placeholder="Nhập lại mật khẩu"
                        />
                        {isShowPasssword ? (
                            <BsEyeSlashFill
                                className="ht-icon absolute right-4 cursor-pointer"
                                onClick={handleShowPassword}
                            />
                        ) : (
                            <HiEye className="ht-icon absolute right-4 cursor-pointer" onClick={handleShowPassword} />
                        )}
                    </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-end gap-4">
                    <div className="text-sm"></div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="ht-button-color-primary w-full">
                        Xác Nhận
                    </button>
                </div>
            </form>
        </>
    );
};
ConfirmResetPassword.layout = (page) => (
    <MasterLayout>
        <AuthenticationLayout title="Đặt Mật Khẩu Mới" page="confirm-reset-password">
            {page}
        </AuthenticationLayout>
    </MasterLayout>
);
export default ConfirmResetPassword;
