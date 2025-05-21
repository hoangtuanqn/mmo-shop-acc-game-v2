import React from "react";
import { Head } from "@inertiajs/react";
import Header from "../../Components/Header";
import CategoryCommon from "./CategoryCommon";
import { dataCategoriesCommon, dataCategoriesGame, dataCategoriesLucky, dataCategoriesService } from "./fakerData";
import CategoryGame from "./CategoryGame";
import CategoryService from "./CategoryService";
import CategoryLucky from "./CategoryLucky";
import Footer from "../../Components/Footer";
import Hero from "./Hero";
import Popup from "../../Components/Popup";
import MarqueeData from "./MarqueeData";
import ModalPopup from "../../Components/ModalPopup";

export default function Home() {
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Header />
            <div className="container-content">
                {/* <Popup /> */}
                <Hero />
                <MarqueeData />

                {/* Hiển thị tất cả các thể loại game */}
                <CategoryCommon data={dataCategoriesCommon} />

                {/* Danh mục Game */}
                {dataCategoriesGame.map((item) => (
                    <CategoryGame key={`CategoryGame-${item.id}`} nameCategory={item.name} data={item.data} />
                ))}

                {/* Danh mục Cày thuê */}
                {dataCategoriesService.map((item) => (
                    <CategoryService key={`CategoryService-${item.id}`} nameCategory={item.name} data={item.data} />
                ))}

                {/* Danh mục Vòng quay may mắn */}
                <CategoryLucky data={dataCategoriesLucky} />
            </div>
            <Footer />
            <ModalPopup />
        </>
    );
}
