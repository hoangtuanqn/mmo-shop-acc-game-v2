import React from "react";
import { FaDiscord, FaFacebookF, FaTelegramPlane, FaTiktok, FaYoutube } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import Gift from "./Gift";
const IconSocial = ({ children, url = "#" }) => {
    return (
        <a
            href={url}
            className="ransition-all hover:bg-primary ht-item-icon-footer ht-flex-center aspect-square w-[40px] rounded-full bg-[rgba(255,255,255,0.1)] duration-200 hover:transform-[translateY(-4px)]"
        >
            {children}
        </a>
    );
};
export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-[#151E33] px-2 py-15">
                    <div className="container-content grid grid-cols-1 gap-12 border-b-2 border-[#ffffff26] pb-10 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        <div>
                            <img
                                src="/images/logo-footer.png"
                                alt="Logo Footer"
                                className="mb-6 w-[140px] md:w-[200px]"
                            />
                            <p className="mb-6">
                                Shop Ngọc Rồng Online cung cấp tài khoản game chính hãng, giá tốt nhất thị trường. Giao
                                dịch an toàn, nhanh chóng và bảo mật
                            </p>
                            <div className="flex gap-2.5">
                                <IconSocial>
                                    <FaFacebookF />
                                </IconSocial>
                                <IconSocial>
                                    <FaYoutube />
                                </IconSocial>
                                <IconSocial>
                                    <FaTelegramPlane />
                                </IconSocial>
                                <IconSocial>
                                    <FaDiscord />
                                </IconSocial>
                                <IconSocial>
                                    <FaTiktok />
                                </IconSocial>
                            </div>
                        </div>
                        <div>
                            <h3 className="ht-subheadline">Liên kết nhanh</h3>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Trang chủ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Mua Tài Khoản
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Dịch Vụ Game
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Vòng Quay May Mắn
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="ht-subheadline">Hỗ trợ khách hàng</h3>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Hướng dẫn mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Chính sách bảo mật
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Điều khoản sử dụng
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="ht-subheadline">Thông tin liên hệ</h3>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Hotline: 0812.665.001
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Email: htuanqn@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Zalo: 0812.665.001
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Địa chỉ: TPHCM, Việt Nam
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-0.5 py-0.5 transition-all duration-200 hover:transform-[translateX(4px)]"
                                    >
                                        <LuChevronRight />
                                        Giờ làm việc: 8:00 - 22:00
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address className="mt-6 text-center text-white">
                        &copy; 2025 - Bản quyền thuộc về{" "}
                        <a href="#" className="text-pink-second">
                            LOCALHOST
                        </a>{" "}
                        - Thiết kế bởi{" "}
                        <a href="#" className="text-pink-second">
                            TUANORI.VN
                        </a>
                    </address>
                </div>
            </footer>
            <Gift />
        </>
    );
}
