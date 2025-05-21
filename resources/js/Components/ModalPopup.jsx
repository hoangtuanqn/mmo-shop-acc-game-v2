import React, { useEffect, useState } from "react";
import { FaBell, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
export default function ModalPopup() {
    const [status, setStatus] = useState(true);
    const handleClose = (e) => {
        // Tìm kiếm thuộc tính name có giá trị là close
        setStatus(!(e.target?.attributes?.name?.value === "close"));
    };
    // Chặn cuộn trang khi modal đang mở
    useEffect(() => {
        document.body.style.overflow = status ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [status]);
    return (
        <>
            {status && (
                <div
                    className="bg-opacity-70 fixed inset-0 z-50 flex justify-center overflow-hidden bg-[#000000b3]"
                    name="close"
                    onClick={handleClose}
                >
                    <div className="animate-scaleUp relative top-[5%] h-fit w-[90%] max-w-[600px] overflow-hidden rounded-lg bg-gradient-to-br from-white to-[#f5f8ff] p-6 shadow-lg">
                        <h2 className="text-primary ht-flex-center gap-x-2 border-b border-gray-200 pt-2 pb-4 text-center text-xl font-extrabold uppercase">
                            <FaBell />
                            Thông báo
                            <FaBell />
                        </h2>
                        <div className="content text-md mt-2 py-4 leading-6 text-gray-700">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Chào mừng bạn đến với dịch vụ bán tài khoản game của chúng tôi!
                            </h3>
                            <p className="text-md mt-2 text-gray-700">
                                Chúng tôi tự hào cung cấp các tài khoản game chất lượng cao, đảm bảo uy tín và an toàn
                                cho người dùng. Với đa dạng các loại game từ phổ biến đến mới nhất, bạn sẽ dễ dàng tìm
                                thấy tài khoản phù hợp với nhu cầu của mình.
                            </p>
                            <p className="text-md mt-2 text-gray-700">
                                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn trong quá trình mua sắm, đảm bảo
                                rằng bạn có được trải nghiệm tốt nhất. Hãy theo dõi các chương trình khuyến mãi và ưu
                                đãi đặc biệt mà chúng tôi thường xuyên cập nhật!
                            </p>
                            <p className="text-md mt-2 text-gray-700">
                                Cảm ơn bạn đã tin tưởng chọn chúng tôi làm đối tác trong hành trình chơi game của bạn.
                                Chúc bạn có những giây phút thư giãn và thú vị!
                            </p>
                        </div>
                        <div className="close_popup ht-flex-center ht-button border-t border-gray-200">
                            <button
                                name="close"
                                className="ht-button-color-primary ht-flex-center mt-6 gap-x-2 text-white"
                            >
                                <FaHandPointRight />
                                Xong
                                <FaHandPointLeft />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
