import React from "react";

export default function Detail() {
    return (
        <div className="mb-20">
            <div className="grid-col-3 grid">
                {/* Hiển thị danh sách bài viết */}
                <div className="col-span-2 grid grid-cols-2">
                    <div className="col-span-2">post nổi bật</div>
                    <div>POST BÌNH THƯỜNG</div>
                    <div>POST BÌNH THƯỜNG</div>
                </div>
                {/* Hiển thị thanh tìm kiếm */}
                <div className="col-span-1"></div>
            </div>
        </div>
    );
}
