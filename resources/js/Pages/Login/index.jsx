import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { showAlert } from "../../utils/functions";
import { BsEyeSlashFill } from "react-icons/bs";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import MasterLayout from "../../layout/MasterLayout";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
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
        // Demo
        showAlert("success", "Đăng nhập thành công!");

        // console.log("submit thành công");
    };
    const handleShowPassword = () => {
        setIsShowPasssword((is) => !is);
    };
    return (
        <>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-800">Tài Khoản</label>
                    <div className="relative flex items-center">
                        <input
                            name="username"
                            type="text"
                            onChange={handleChange}
                            value={data?.username}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-800"
                            placeholder="Tài khoản"
                        />
                        <FaUser className="ht-icon absolute right-4" />
                    </div>
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-800">Mật Khẩu</label>
                    <div className="relative flex items-center">
                        <input
                            name="password"
                            type={isShowPasssword ? "text" : "password"}
                            onChange={handleChange}
                            value={data?.password}
                            required
                            className="outline-primary w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-800"
                            placeholder="Mật khẩu của bạn"
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
                    <div className="text-sm">
                        <Link href={route("auth.forgot-password")} className="ht-item-achor">
                            Bạn Quên Mật Khẩu?
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <button type="submit" className="ht-button-color-primary w-full">
                        Đăng Nhập
                    </button>
                </div>
            </form>
        </>
    );
};
Login.layout = (page) => (
    <MasterLayout>
        <AuthenticationLayout title="Đăng Nhập" page="login">
            {page}
        </AuthenticationLayout>
    </MasterLayout>
);
export default Login;
