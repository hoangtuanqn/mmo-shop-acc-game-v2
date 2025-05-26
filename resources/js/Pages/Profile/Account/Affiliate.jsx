import React, { useState } from "react";
import HeadLine from "../../../components/Headline";
import MasterLayout from "../../../layout/MasterLayout";
import ProfileLayout from "../../../layout/ProfileLayout";
import { FaUserFriends, FaCopy, FaMoneyBillWave } from "react-icons/fa";
import Button from "../../../components/Form/Button";
import { showAlert } from "../../../utils/functions";
import { BiMoneyWithdraw } from "react-icons/bi";
import Pagination from "../../../components/Pagination";
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import LoadingAnimation from "../../../components/LoadingAnimation";

const history = [
    { id: 1, name: "Nguyễn Văn A", date: "2024-06-01 10:00", reward: 10000 },
    { id: 2, name: "Trần Thị B", date: "2024-06-02 12:30", reward: 10000 },
    { id: 3, name: "Lê Văn C", date: "2024-06-03 15:45", reward: 10000 },
    { id: 4, name: "Phạm Thị D", date: "2024-06-04 16:00", reward: 10000 },
    { id: 5, name: "Đỗ Văn E", date: "2024-06-05 17:00", reward: 10000 },
    { id: 6, name: "Ngô Thị F", date: "2024-06-06 18:00", reward: 10000 },
    { id: 7, name: "Bùi Văn G", date: "2024-06-07 19:00", reward: 10000 },
];

function Affiliate() {
    const urlAffiliate = "http://localhost:8000/thong-tin/gioi-thieu-ban-be";
    // Dữ liệu tĩnh tổng hoa hồng
    const totalCommission = 70000;
    const handleCopy = () => {
        navigator.clipboard.writeText(urlAffiliate);
        showAlert("success", "Đã sao chép mã giới thiệu thành công!");
    };
    const handleWithdraw = () => {};

    const { data, currentPage, pageCount, loading, error, setPage } = usePaginatedData(
        "https://polysite.htuanqn.id.vn/proxy.php",
        10,
    );
    const handlePageClick = ({ selected }) => {
        setPage(selected);
    };

    return (
        <div className="mx-auto rounded-3xl border border-gray-100 bg-white px-7 py-8 shadow-xs">
            <HeadLine title={"Giới thiệu bạn bè"} customHeading="md:text-xl" />
            <div className="flex flex-col gap-4">
                {/* Thống kê tổng hoa hồng */}
                <div className="flex flex-col gap-3 rounded-xl border border-green-100 bg-green-50 p-4 md:flex-row md:items-center">
                    <div className="flex flex-1 items-center gap-3">
                        <FaMoneyBillWave className="text-xl text-green-500" />
                        <div>
                            <div className="font-semibold text-gray-700">Tổng số tiền hoa hồng đã kiếm được:</div>
                            <div className="mt-1 font-bold text-green-600">
                                {totalCommission.toLocaleString("vi-VN")}đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button mode="transparent" onClick={handleWithdraw}>
                            <BiMoneyWithdraw />
                            Yêu cầu rút tiền
                        </Button>
                    </div>
                </div>
                {/* Mã giới thiệu */}
                <div className="bg-primary/10 flex flex-col items-center gap-4 rounded-xl border border-blue-100 p-4 md:flex-row">
                    <FaUserFriends className="text-blue-500" />
                    <div className="flex-1 text-center md:text-left">
                        <div className="font-semibold text-gray-700">Liên kết giới thiệu:</div>
                        <div className="text-primary mt-1 inline-block font-bold tracking-widest select-all md:text-base">
                            {urlAffiliate}
                        </div>
                    </div>
                    <Button onClick={handleCopy}>
                        <FaCopy /> Copy
                    </Button>
                </div>
                {/* Mô tả lợi ích */}
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                    <b>Lợi ích khi giới thiệu bạn bè:</b>
                    <ul className="mt-2 ml-6 list-disc space-y-1">
                        <li>
                            Bạn sẽ nhận được hoa hồng <span className="font-semibold text-blue-600">10%</span> mỗi khi
                            bạn bè của bạn nạp tiền.
                        </li>
                        <li>Ăn hoa hồng trọn đời, không giới hạn</li>
                    </ul>
                </div>
            </div>

            <div className="relative mt-4 overflow-x-auto sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Body</th>
                        </tr>
                    </thead>
                    <tbody className="relative">
                        {!loading ? (
                            data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                                >
                                    <th className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {item.title}
                                    </th>
                                    <td className="px-6 py-4">{item.body}</td>
                                </tr>
                            ))
                        ) : (
                            <LoadingAnimation infinite />
                        )}
                    </tbody>
                </table>
                <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageClick} />
            </div>
        </div>
    );
}

Affiliate.layout = (page) => (
    <MasterLayout>
        <ProfileLayout>{page}</ProfileLayout>
    </MasterLayout>
);
export default Affiliate;
