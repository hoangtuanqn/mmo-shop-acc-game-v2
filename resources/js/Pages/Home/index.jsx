import React from "react";
import CategoryCommon from "./CategoryCommon";
import CategoryGame from "./CategoryGame";
import CategoryService from "./CategoryService";
import CategoryLucky from "./CategoryLucky";
import Hero from "./Hero";
import MarqueeData from "./MarqueeData";
import ModalPopup from "../../Components/ModalPopup";
import { dataCategoriesCommon, dataCategoriesGame, dataCategoriesLucky, dataCategoriesService } from "./fakerData";

export default function Home() {
    return (
        <>
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
            <ModalPopup />
        </>
    );
}
