import HomeWrapper from "./page/HomeWrapper.vue";
import HomePage from "./page/HomePage.vue";
import ProductPage from "./page/ProductPage.vue";
import CartPage from "./page/CartPage.vue";
import NotFound from "./page/NotFoundPage.vue";
import DetailProduct from "./page/DetailProductPage.vue";
// import ShopPage from "./components/ShopPage.vue";
// import ExampleComponent from "./components/ExampleComponent.vue";

// import Home from "./components/HomeComponent.vue";
// import User from "./components/UserComponent.vue";
// import HelloUser from "./components/HelloUser.vue";
// import ByeUser from "./components/ByeUser.vue";
// import NotFound from "./components/NotFoundComponent.vue";
// import Find from "./components/FindComponent.vue";
// import TestNavigasi from "./components/TestNavigasi.vue";

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
