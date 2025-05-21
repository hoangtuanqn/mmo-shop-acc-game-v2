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
                        <MdEmail className="ht-icon absolute right-4 max-sm:hidden" />
                    </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-end gap-4">
                    <div className="text-sm"></div>
                </div>

                <div className="mt-6">
                    <button type="submit" className="ht-button-color-primary w-full">
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
