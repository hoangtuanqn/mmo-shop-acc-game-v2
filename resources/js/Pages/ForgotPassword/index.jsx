import React, { useState } from "react";
import { showAlert } from "../../utils/functions";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import MasterLayout from "../../layout/MasterLayout";
import { MdEmail } from "react-icons/md";
import Button from "../../components/Form/Button";
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
                    <label className="block mb-2 text-sm font-medium text-slate-800">Địa Chỉ Email</label>
                    <div className="relative flex items-center">
                        <input
                            name="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10 text-sm text-slate-800"
                            placeholder="Nhập Địa Chỉ Email"
                        />
                        <MdEmail className="absolute ht-icon right-4 max-sm:hidden" />
                    </div>
                </div>

                <div className="mt-6">
                    <Button type="submit" className="w-full">
                        Đặt Lại Mật Khẩu
                    </Button>
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
