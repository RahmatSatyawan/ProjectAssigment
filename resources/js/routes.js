import HomeWrapper from "./page/HomeWrapper.vue";
import HomePage from "./page/HomePage.vue";
import ProductPage from "./page/ProductPage.vue";
import CartPage from "./page/CartPage.vue";
import NotFound from "./page/NotFoundPage.vue";
import DetailProduct from "./page/DetailProductPage.vue";

export const routes = [
    {
        name: "homewrapper",
        path: "/",
        component: HomeWrapper,
        children: [
            {
                name: "home",
                path: "",
                component: HomePage,
            },
            {
                name: "product",
                path: "/product",
                component: ProductPage,
            },
            {
                name: "cart",
                path: "/cart",
                component: CartPage,
            },
            {
                path: "/product/:id",
                name: "DetailProduct",
                component: DetailProduct,
            },
            {
                path: "/*",
                name: "NotFound",
                component: NotFound,
            },
        ],
    },
];
