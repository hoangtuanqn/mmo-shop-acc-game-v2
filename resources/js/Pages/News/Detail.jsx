import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function Detail() {
    return (
        <div className="mb-20 rounded-lg bg-white p-8">
            <div className="flex items-center gap-2 font-bold text-gray-400">
                <FaCalendarAlt /> <span>20/5/2025 - 20:08:30</span>
            </div>
            <div className="htcustom-description htcustom-news mt-6">
                <h1>Vietnix ra mắt VPS N8N – Giải pháp tối ưu hiệu suất và bảo mật cho tự động hóa quy trình</h1>
                <p>
                    Từ ngày 15/05/2025, Vietnix chính thức ra mắt dịch vụ VPS N8N – giải pháp tối ưu giúp người dùng
                    triển khai và vận hành công cụ tự động hóa mã nguồn mở N8N một cách dễ dàng, an toàn và hiệu quả.
                </p>
                <p>
                    Với hạ tầng mạnh mẽ, bảo mật cao và khả năng kiểm soát toàn diện, VPS N8N tại Vietnix hứa hẹn sẽ là
                    lựa chọn lý tưởng cho cá nhân và doanh nghiệp đang tìm kiếm một nền tảng vững chắc để phát triển hệ
                    thống workflow tự động hóa linh hoạt, ổn định và tiết kiệm chi phí.
                </p>
                <img src="https://image.vietnix.vn/wp-content/uploads/2025/05/1200x630-3-768x403.jpg" alt="" />
                <h2>Lợi ích nổi bật của VPS N8N tại Vietnix</h2>
                <ul>
                    <li>Hiệu suất mạnh mẽ, đáp ứng mọi nhu cầu tự động hóa</li>
                    <li>Bảo mật tối ưu, đảm bảo an toàn dữ liệu</li>
                    <li>Dễ dàng triển khai và quản lý</li>
                    <li>Hỗ trợ kỹ thuật 24/7</li>
                </ul>
                <h2>Vì sao nên chọn Vietnix?</h2>
                <ol>
                    <li>Đội ngũ chuyên gia giàu kinh nghiệm</li>
                    <li>Hạ tầng hiện đại, ổn định</li>
                    <li>Chính sách giá cạnh tranh</li>
                </ol>
                <p>
                    Để biết thêm chi tiết về dịch vụ VPS N8N, vui lòng liên hệ với Vietnix qua website hoặc hotline hỗ
                    trợ.
                </p>
                <blockquote>
                    “Vietnix cam kết mang đến giải pháp tự động hóa tối ưu, giúp doanh nghiệp nâng cao hiệu suất và tiết
                    kiệm chi phí vận hành.”
                </blockquote>
            </div>
        </div>
    );
}
