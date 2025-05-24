import React, { useEffect, useState } from "react";
import { FaBell, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { getItem, setItem } from "../utils/localStorage";
import Button from "./Form/Button";
export default function ModalPopup() {
    const [showNotice, setShowNotice] = useState(() => {
        const hideUntil = getItem("hideNoticeUntil");

        return !hideUntil || Date.now() > Number(hideUntil);
    });
    const handleClose = (e) => {
        // Check thuộc tính name có giá trị là close
        const isClose =
            e.target.getAttribute("name") === "close" ||
            e.target.getAttribute("name") === "close-1h" ||
            e.target.closest('button[name="close"]');
        const isClose1h = e.target.getAttribute("name") === "close-1h";
        if (isClose1h) {
            setItem("hideNoticeUntil", Date.now() + 3600 * 1000);
        }
        setShowNotice(!isClose);
    };
    // Chặn cuộn trang khi modal đang mở
    useEffect(() => {
        document.body.style.overflow = showNotice ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showNotice]);
    return (
        <>
            {showNotice && (
                <div
                    className="bg-opacity-70 fixed inset-0 z-50 flex justify-center overflow-hidden bg-[#0006]"
                    name="close"
                    onClick={handleClose}
                >
                    <div className="animate-scaleUp relative top-3 h-fit w-[90%] max-w-[600px] overflow-hidden rounded-lg bg-gradient-to-br from-white to-[#f5f8ff] p-6 shadow-lg">
                        <h2 className="pt-2 pb-4 text-xl font-extrabold text-center uppercase border-b border-gray-200 text-primary ht-flex-center gap-x-2">
                            <FaBell />
                            Thông báo
                            <FaBell />
                        </h2>
                        <div className="py-4 mt-2 leading-6 text-gray-700 content text-md">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Chào mừng bạn đến với dịch vụ bán tài khoản game của chúng tôi!
                            </h3>
                            <p className="mt-2 text-gray-700 text-md">
                                Chúng tôi tự hào cung cấp các tài khoản game chất lượng cao, đảm bảo uy tín và an toàn
                                cho người dùng. Với đa dạng các loại game từ phổ biến đến mới nhất, bạn sẽ dễ dàng tìm
                                thấy tài khoản phù hợp với nhu cầu của mình.
                            </p>
                            <p className="mt-2 text-gray-700 text-md">
                                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn trong quá trình mua sắm, đảm bảo
                                rằng bạn có được trải nghiệm tốt nhất. Hãy theo dõi các chương trình khuyến mãi và ưu
                                đãi đặc biệt mà chúng tôi thường xuyên cập nhật!
                            </p>
                            <p className="mt-2 text-gray-700 text-md">
                                Cảm ơn bạn đã tin tưởng chọn chúng tôi làm đối tác trong hành trình chơi game của bạn.
                                Chúc bạn có những giây phút thư giãn và thú vị!
                            </p>
                        </div>
                        <div className="flex justify-center gap-2 border-t border-gray-200 close_popup">
                            <Button className="mt-4" name="close" mode="transparent">
                                <FaHandPointRight />
                                Đã hiểu
                                <FaHandPointLeft />
                            </Button>
                            <Button className="mt-4" name="close-1h">
                                Tắt trong 1H
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
