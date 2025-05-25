import React from "react";

export default function Profile() {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <div className="shadow-s rounded-lg bg-white p-4">
                        <h4 className="mb-6 text-base font-bold">Giới thiệu bạn bè</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="rounded-lg bg-gray-100 p-2">
                                        <img
                                            src="https://cdn3.upanh.info/upload/server-sw3/images/Icon/Ma%20gi%E1%BB%9Bi%20thi%E1%BB%87u.png"
                                            alt="Mã giới thiệu"
                                            className="h-6 w-6 object-cover"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">Mã giới thiệu</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="rounded-lg bg-gray-100 p-2">
                                        <img
                                            src="https://cdn3.upanh.info/upload/server-sw3/images/Icon/Ma%20gi%E1%BB%9Bi%20thi%E1%BB%87u.png"
                                            alt="Minigame giới thiệu bạn bè"
                                            className="h-6 w-6 object-cover"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">
                                        Minigame giới thiệu bạn bè
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="rounded-lg bg-gray-100 p-2">
                                        <img
                                            src="https://cdn3.upanh.info/upload/server-sw3/images/Icon/Ma%20gi%E1%BB%9Bi%20thi%E1%BB%87u.png"
                                            alt="Minigame giới thiệu bạn bè"
                                            className="h-6 w-6 object-cover"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">Lịch sử chơi Minigame</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2"></div>
            </div>
        </div>
    );
}
