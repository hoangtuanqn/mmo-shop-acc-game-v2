import React from "react";
import Sidebar from "../pages/Profile/components/Sidebar";


export default function ProfileLayout({ children }) {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
                <aside className="order-2 col-span-1 flex flex-col gap-4 lg:order-1">
                    <Sidebar />
                </aside>
                <div className="top-25 order-1 col-span-1 lg:sticky lg:order-2 lg:col-span-2">{children}</div>
            </div>
        </div>
    );
}
