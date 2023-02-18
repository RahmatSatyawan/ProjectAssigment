import HomePage from "./page/HomePage.vue";
import ProductPage from "./page/ProductPage.vue";
import CartPage from "./page/CartPage.vue";
import NotFound from "./page/NotFoundPage.vue";
import ShopPage from "./components/ShopPage.vue";
import ExampleComponent from "./components/ExampleComponent.vue";

// import Home from "./components/HomeComponent.vue";
// import User from "./components/UserComponent.vue";
// import HelloUser from "./components/HelloUser.vue";
// import ByeUser from "./components/ByeUser.vue";
// import NotFound from "./components/NotFoundComponent.vue";
// import Find from "./components/FindComponent.vue";
// import TestNavigasi from "./components/TestNavigasi.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    children: [
      {
        path: "/*",
        name: "NotFound",
        component: NotFound,
      },
    ],
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
  // {
  //     path: "/about",
  //     name: "about",
  //     component: () =>
  //         import(
  //             /* webpackChunkName: "about" */ "./components/AboutComponent.vue"
  //         ),
  //     alias: "/tentang",
  // },
  // {
  //     path: "/user/:username",
  //     name: "user",
  //     component: User,
  //     children: [
  //         {
  //             path: "hello",
  //             component: HelloUser,
  //         },
  //         {
  //             path: "bye",
  //             component: ByeUser,
  //         },
  //     ],
  // },
  // {
  //     path: "/find",
  //     name: "find",
  //     component: Find,
  // },
  // {
  //     path: "/cari",
  //     redirect: "/cari",
  // },
  // {
  //     path: "/testnavigasi",
  //     name: "test_navigasi",
  //     component: TestNavigasi,
  // },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
  },
];