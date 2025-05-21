import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import AppHead from "../../components/AppHead";
import Swal from "sweetalert2";
import { showAlert } from "../../utils/functions";

export default function index() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
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
    return (
        <>
            <AppHead title="Đăng Nhập" />
            <div className="mb-9 flex justify-center">
                <div className="grid max-h-[700px] w-full max-w-[900px] grid-cols-2 overflow-hidden rounded-lg bg-white text-gray-700 shadow-sm">
                    <div>
                        <img
                            src="https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20252/e2db986698da6234e12f3ba3b4ffcfba.jpg"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center px-8 py-6">
                        <div className="w-full max-w-md">
                            <div className="text-gray-700">
                                <h2 className="text-center text-3xl font-semibold text-slate-900">Đăng Nhập</h2>
                                <p className="mt-2 text-center">Đăng Nhập Vào Hệ Thống Của Chúng Tôi</p>
                                <form className="mt-12 space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-slate-800">
                                            Tài khoản
                                        </label>
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
                                        <label className="mb-1.5 block text-sm font-medium text-slate-800">
                                            Mật khẩu
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="password"
                                                type="password"
                                                onChange={handleChange}
                                                value={data?.password}
                                                required
                                                className="outline-primary w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-800"
                                                placeholder="Mật khẩu của bạn"
                                            />
                                            <HiEye className="ht-icon absolute right-4 cursor-pointer" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-end gap-4">
                                        <div className="text-sm">
                                            <a href="jajvascript:void(0);" className="ht-item-achor">
                                                Bạn Quên Mật Khẩu?
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button type="submit" className="ht-button-color-primary w-full">
                                            Đăng Nhập
                                        </button>
                                    </div>
                                    <p className="mt-6 text-center text-sm text-slate-800 uppercase">
                                        Bạn chưa có tài khoản?
                                        <a href="javascript:void(0);" className="ht-item-achor">
                                            Đăng Ký Ngay
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
