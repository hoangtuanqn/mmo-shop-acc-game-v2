import React from "react";
import { Link } from "@inertiajs/react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
export default function Post({ post, index }) {
    return (
        <div
            className={`col-span-1 ${index === 0 ? "lg:col-span-3" : ""} overflow-hidden rounded-lg bg-white shadow-sm ${index === 0 ? "text-xs lg:text-sm" : "text-xs"}`}
            key={`TinTuc-${index}`}
        >
            <Link
                href={post.url}
                className={`border-pink-second block ${index === 0 ? "h-[160px] lg:h-[400px]" : "h-[160px]"} overflow-hidden border-b`}
            >
                <img
                    src={post.thumbnail}
                    alt="Bài viết nổi bật"
                    className="aspect-auto h-full w-full object-cover duration-250"
                />
            </Link>
            <div className={`flex flex-col ${index === 0 ? "gap-3.5 p-6" : "gap-2 px-4 py-6"}`}>
                <div className="flex items-center gap-2 font-bold text-gray-400">
                    <FaCalendarAlt /> <span>20/5/2025 - 20:08:30</span>
                </div>
                <Link
                    href={post.url}
                    className={`ht-text-primary line-clamp-2 text-base ${index === 0 ? "lg:text-xl" : ""} font-bold duration-200 hover:line-clamp-none`}
                >
                    <h1>{post.title}</h1>
                </Link>
                <p
                    className={`line-clamp-4 font-medium text-gray-400 ${index === 0 ? "lg:text-gray-500" : "lg:line-clamp-2"}`}
                >
                    {post.excerpt}
                </p>
                <Link
                    href={post.url}
                    className={`text-pink-second hover:text-primary flex items-center gap-2 font-bold duration-200 hover:transform-[translateX(2px)] ${index === 0 ? "text-sm" : "text-xs"}`}
                >
                    <span>Đọc tiếp</span>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}
