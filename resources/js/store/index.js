import Vue from "vue";
import Vuex from "vuex";

import example from "./modules/example/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listProduct: [],
        // {
        //     title: "Indomie Goreng Rendang",
        //     desc: "Masakan instan terenak di dunia",
        //     qty: 10,
        //     price: 3900,
        // },
        // {
        //     title: "Mie Gelas Rendang",
        //     desc: "Mie instan khusus anak kosan",
        //     qty: 3,
        //     price: 1500,
        // },
        // {
        //     title: "Bakmi Mewah",
        //     desc: "Kalau anak kosan jangan macam2 deh",
        //     qty: 80,
        //     price: 10000,
        // },

        listCart: [],
        totalCart: 0,
    },
    getters: {
        getAllData(state) {
            state.listProduct.forEach((item) => {
                item.price = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                }).format(item.price);
                if (item.qty == 0) {
                    item.qty = 0;
                }
            });
            return state.listProduct;
        },
        // getProduct(state) {
        //     state.listProduct.forEach((item) => {
        //         item.price = new Intl.NumberFormat("id-ID", {
        //             style: "currency",
        //             currency: "IDR",
        //         }).format(item.price);
        //         if (item.qty == 0) {
        //             item.qty = 0;
        //         }
        //     });
        //     return state.listProduct;
        // },
        getCart(state) {
            state.listCart.forEach((item) => {
                item.price = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                }).format(item.price);
            });
            return state.listCart;
        },
        getTotalCart(state) {
            let total = 0;
            state.listCart.forEach((item) => {
                total += item.qty * item.price;
            });
            total = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(total);
            return total;
        },
    },
    actions: {
        async getAllData(context) {
            let url = "api/getAllData";
            await axios
                .get(url)
                .then((response) => {
                    context.commit("UPDATE_DATA", response.data);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async addCart(context, payload) {
            let url = "api/postData";
            await axios
                .post(url, payload)
                .then((response) => {
                    context.commit("ADD_CART", payload);
                    console.log(response);
                    console.log(payload);
                })
                .catch((error) => {
                    console.log(error);
                });
            // context.commit("ADD_CART", payload);
            // console.log("ADD_CART_ACT" + payload.title);
        },
        removeOneCart(context, payload) {
            context.commit("REMOVE_ONE_CART", payload);
            console.log("REMOVE_ONE_CART_ACT" + payload.title);
        },
        removeAllCart(context, payload) {
            context.commit("REMOVE_ALL_CART", payload);
            console.log("REMOVE_ALL_CART_ACT" + payload.title);
        },
        checkoutCart(context, payload) {
            context.commit("CHECKOUT", payload);
            console.log("CHECKOUT_ACT" + payload);
        },
    },
    mutations: {
        UPDATE_DATA(state, payload) {
            state.listProduct = payload.listProduct;
        },
        ADD_CART(state, payload) {
            // let newProduct = state.listProduct.find((item) => item.index == payload.index);
            let newProduct = state.listProduct[payload];
            console.log(newProduct);

            let cart = state.listCart.find(
                (item) => item.title == newProduct.title
            );
            if (cart) {
                cart.qty++;
                state.listProduct.find((item) => item.title == newProduct.title)
                    .qty--;
            } else {
                state.listCart.push({
                    title: newProduct.title,
                    desc: newProduct.desc,
                    qty: 1,
                    price: newProduct.price,
                });
                state.listProduct.find((item) => item.title == newProduct.title)
                    .qty--;
            }
            if (
                state.listProduct.find((item) => item.title == newProduct.title)
                    .qty == 0
            ) {
                state.listProduct.qty = 0;
            }
            console.log("ADD_CART_MUT" + payload);
        },
        REMOVE_ONE_CART(state, payload) {
            let cart = state.listCart.find(
                (item) => item.title == payload.title
            );
            if (cart.qty > 1) {
                cart.qty--;
                state.listProduct.find((item) => item.title == payload.title)
                    .qty++;
            } else {
                state.listCart = state.listCart.filter(
                    (item) => item.title != payload.title
                );
                state.listProduct.find((item) => item.title == payload.title)
                    .qty++;
            }
            console.log("REMOVE_ONE_CART_MUT" + payload.title);
        },
        REMOVE_ALL_CART(state, payload) {
            let cart = state.listCart.find(
                (item) => item.title == payload.title
            );
            state.listProduct.find((item) => item.title == payload.title).qty +=
                cart.qty;
            state.listCart = state.listCart.filter(
                (item) => item.title != payload.title
            );
            console.log("REMOVE_ALL_CART_MUT" + payload.title);
        },
        CHECKOUT(state, payload) {
            state.totalCart = 0;
            state.totalCart = state.listCart.reduce(
                (total, item) => total + item.qty * item.price,
                0
            );
            console.log("CHECKOUT_MUT" + payload);
        },
    },
    modules: {},
});
