/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// const { default: VueRouter } = require("vue-router");

require("./bootstrap");

window.Vue = require("vue").default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component("home-page", require("./page/HomePage.vue").default);
Vue.component("product-page", require("./page/ProductPage.vue").default);
Vue.component("cart-page", require("./page/CartPage.vue").default);
Vue.component("not-found-page", require("./page/NotFoundPage.vue").default);

// Vue.component("shop-page", require("./components/ShopPage.vue").default);

Vue.component(
    "product-list",
    require("./components/organism/ProductList.vue").default
);
Vue.component(
    "cart-list",
    require("./components/organism/CartList.vue").default
);
// Vue.component("list-item", require("./components/atom/ItemAtom.vue").default);
Vue.component(
    "button-atom",
    require("./components/atom/ButtonAtom.vue").default
);
// Vue.component("modal-atom", require("./components/atom/ModalAtom.vue").default);
// Vue.component("modal-atom", require("./compinents/atom/ModalAtom.vue").default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes,
});

const app = new Vue({
    el: "#app",
    router,
});
