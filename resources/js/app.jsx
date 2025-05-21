import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import MasterLayout from "./layout/MasterLayout";

createInertiaApp({
    title: (title) => `${title} - TUANORI.VN`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <MasterLayout>{page}</MasterLayout>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
