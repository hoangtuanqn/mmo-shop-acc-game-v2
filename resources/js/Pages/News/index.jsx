import React from "react";
import HeadLineCenter from "../../components/HeadLineCenter";
import { dataNews } from "./fakerData";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Post from "./Post";

export default function index() {
    return (
        <div className="mb-20">
            <HeadLineCenter title="TIN TỨC MỚI NHẤT" />
            <div className="grid grid-cols-3 items-start">
                {/* Hiển thị danh sách bài viết */}
                <div className="col-span-3 grid grid-cols-1 gap-x-2.5 gap-y-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                    {dataNews.map((post, index) => (
                        <Post key={`Post-${index}`} post={post} index={index} />
                    ))}
                </div>
                {/* Hiển thị thanh tìm kiếm */}
                <aside className="sticky top-20 col-span-3 flex flex-col gap-2 pt-6 lg:col-span-1 lg:pt-0 lg:pl-6">
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h3 className="mb-2 text-base font-semibold text-gray-700">Tìm kiếm từ khóa</h3>
                        <form className="flex w-full items-end gap-2">
                            <Input className="basis-5/8" placeholder="Tìm kiếm từ khóa" />
                            <Button className="w-full basis-3/8">Tìm kiếm</Button>
                        </form>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-base font-semibold text-gray-700">Được quan tâm nhất</h3>
                        <ul className="flex flex-col gap-3">
                            {dataNews.slice(0, 3).map((item) => (
                                <li key={item.id} className="flex gap-3">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="h-12 w-16 rounded object-cover"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <a
                                            href="/"
                                            className="ht-text-primary line-clamp-2 text-sm font-semibold duration-200"
                                        >
                                            {item.title}
                                        </a>
                                        <span className="text-xs text-gray-400">20/5/2025</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
