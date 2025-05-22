import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

export default function Filter() {
    const [data, setData] = useState({
        "price-range": "",
        "sort-order": "",
        code: "",
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value],
        });
        console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="game-search mb-10">
            <form action="" className="grid w-full grid-cols-1 items-end gap-5 lg:grid-cols-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="sort-order" className="font-medium text-gray-600">
                        Chọn mức giá:
                    </label>
                    <select
                        name="price-range"
                        id="price-range"
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                    >
                        <option value="under-100000">Dưới 100.000đ</option>
                        <option value="100000-200000">100.000đ - 200.000đ</option>
                        <option value="200000-500000">200.000đ - 500.000đ</option>
                        <option value="500000-1000000">500.000đ - 1.000.000đ</option>
                        <option value="over-1000000">Trên 1.000.000đ</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sort-order" className="font-medium text-gray-600">
                        Sắp xếp theo:
                    </label>
                    <select
                        name="sort-order"
                        onChange={handleChange}
                        id="sort-order"
                        className="mt-2 w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                    >
                        <option value="default">Mặc định</option>
                        <option value="newest">Mới nhất</option>
                        <option value="oldest">Cũ nhất</option>
                        <option value="low-to-high">Giá: Thấp đến Cao</option>
                        <option value="high-to-low">Giá: Cao đến Thấp</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="code" className="font-medium text-gray-600">
                        Tìm kiếm:
                    </label>
                    <input
                        type="text"
                        id="code"
                        onChange={handleChange}
                        className="mt-2 h-full w-full rounded-lg border border-[#ddd] bg-white px-4 py-2 text-gray-600 duration-400"
                        placeholder="Tìm theo mã số"
                    />
                </div>
                <div className="flex items-end gap-2">
                    <button className="ht-button-color-primary flex basis-1/2 items-center justify-center gap-1 px-2 text-xs xl:px-8 xl:text-sm">
                        <FaSearch /> Tìm kiếm
                    </button>
                    <Link
                        href=""
                        className="ht-button flex basis-1/2 items-center justify-center gap-1 border border-[#ddd] px-2 text-xs text-gray-600 xl:px-8 xl:text-sm"
                    >
                        <RxReset />
                        Đặt lại
                    </Link>
                </div>
            </form>
        </div>
    );
}
