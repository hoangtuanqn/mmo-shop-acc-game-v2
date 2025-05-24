import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import Button from "../../components/Form/Button";

export default function Filter() {
    const [form, setForm] = useState({
        "price-range": "",
        "sort-order": "",
        code: "",
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value],
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // logic tìm kiếm
    };

    return (
        <div className="mb-10 game-search">
            <form action="" className="grid items-end w-full grid-cols-1 gap-5 lg:grid-cols-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="sort-order" className="font-medium text-gray-600">
                        Chọn mức giá:
                    </label>
                    <Select name="price-range" id="price-range" onChange={handleChange}>
                        <option value="under-100000">Dưới 100.000đ</option>
                        <option value="100000-200000">100.000đ - 200.000đ</option>
                        <option value="200000-500000">200.000đ - 500.000đ</option>
                        <option value="500000-1000000">500.000đ - 1.000.000đ</option>
                        <option value="over-1000000">Trên 1.000.000đ</option>
                    </Select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sort-order" className="font-medium text-gray-600">
                        Sắp xếp theo:
                    </label>
                    <Select name="sort-order" id="sort-order" onChange={handleChange}>
                        <option value="default">Mặc định</option>
                        <option value="newest">Mới nhất</option>
                        <option value="oldest">Cũ nhất</option>
                        <option value="low-to-high">Giá: Thấp đến Cao</option>
                        <option value="high-to-low">Giá: Cao đến Thấp</option>
                    </Select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="code" className="font-medium text-gray-600">
                        Mã số:
                    </label>
                    <Input
                        id="code"
                        name="code"
                        onChange={handleChange}
                        placeholder="Tìm theo mã số"
                        value={form.code}
                    />
                </div>
                <div className="flex items-end gap-2">
                    <Button type="submit" className="flex-1">
                        <FaSearch /> Tìm kiếm
                    </Button>

                    <Button mode="transparent" Element="Link" href="" className="flex-1">
                        <RxReset />
                        Đặt lại
                    </Button>
                </div>
            </form>
        </div>
    );
}
