import React from "react";
import CategoriesPopular from "./CategoriesPopular";
import MarqueeData from "../../components/MarqueeData";
import Hero from "./Hero";
import Categories from "./Categories";
import ModalPopup from "../../Components/ModalPopup";
import {
    dataCategoriesCommon,
    dataCategoriesGame,
    dataCategoriesLucky,
    dataCategoriesService,
    histories,
} from "./fakerData";
import Dialog from "../../components/Dialog";

export default function Home() {
    return (
        <>
            <Hero />
            <MarqueeData histories={histories} />

            {/* Hiển thị tất cả các thể loại game */}
            <CategoriesPopular data={dataCategoriesCommon} />

            {/* Danh mục Game */}
            {dataCategoriesGame.map((category) => (
                <Categories
                    key={`CategoryGame-${category.id}`}
                    nameCategory={category.name}
                    categories={category.data}
                    type="account"
                    url="/accounts"
                    urlIconImage="/images/icons/ViewAllIcon.gif"
                />
            ))}

            {/* Danh mục Cày thuê */}
            {dataCategoriesService.map((category) => (
                <Categories
                    key={`CategoryService-${category.id}`}
                    nameCategory={category.name}
                    categories={category.data}
                    type="service"
                    url="/services"
                    urlIconImage="/images/icons/ViewAllIcon.gif"
                />
            ))}

            {/* Danh mục Vòng quay may mắn */}
            <Categories
                nameCategory="Vòng Quay May Mắn"
                categories={dataCategoriesLucky}
                type="tryYourLuck"
                url="/try-your-luck"
                urlIconImage="/images/icons/PlayNowIcon.png"
            />

            <ModalPopup />
        </>
    );
}
