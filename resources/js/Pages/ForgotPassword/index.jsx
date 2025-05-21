import React, { useState } from "react";
import { showAlert } from "../../utils/functions";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import MasterLayout from "../../layout/MasterLayout";
import { MdEmail } from "react-icons/md";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert("success", "Đã Gửi Liên Kết Đặt Lại Mật Khẩu Về Email Của Bạn!");
    };
    return (
        <>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-800">Địa Chỉ Email</label>
                    <div className="relative flex items-center">
                        <input
                            name="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-800"
                            placeholder="Nhập Địa Chỉ Email"
                        />
                        <MdEmail className="absolute ht-icon right-4 max-sm:hidden" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-800">Mật khẩu</label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type={isShowPasssword ? "text" : "password"}
                            onChange={handleChange}
                            value={data?.password}
                            required
                            className="w-full px-4 py-3 text-sm border rounded-md outline-primary border-slate-300 text-slate-800"
                            placeholder="Mật khẩu của bạn"
                        />
                        {isShowPasssword ? (
                            <BsEyeSlashFill
                                className="absolute cursor-pointer ht-icon right-4"
                                onClick={handleShowPassword}
                            />
                        ) : (
                            <HiEye className="absolute cursor-pointer ht-icon right-4" onClick={handleShowPassword} />
                        )}
                    </div>
                </div>
                

                <div className="flex flex-wrap items-center justify-end gap-4 mt-5">
                    <div className="text-sm"></div>
                </div>

                <div className="mt-6">
                    <button type="submit" className="w-full ht-button-color-primary">
                        Đặt Lại Mật Khẩu
                    </button>
                </div>
            </form>
        </>
    );
};
ForgotPassword.layout = (page) => (
    <MasterLayout>
        <AuthenticationLayout title="Đặt Lại Mật Khẩu" page="forgot-password">
            {page}
        </AuthenticationLayout>
    </MasterLayout>
);
export default ForgotPassword;
