import { Head } from "@inertiajs/react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MasterLayout({ children }) {
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Header />
            <div className="container-content">{children}</div>
            <Footer />
        </>
    );
}
