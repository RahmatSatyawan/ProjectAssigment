import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listProduct: [],
        listCart: [],
        totalCart: 0,
    },
    getters: {
        getProduct(state) {
            state.listProduct.forEach((item) => {
                if (item.qty <= 0) {
                    item.qty = 0;
                }
            });
            return state.listProduct;
        },
        getCart(state) {
            return state.listCart;
        },
        getTotalCart(state) {
            return state.totalCart;
        },
    },
    actions: {
        async getAllData(context) {
            let url = "api/getAllData";
            await axios
                .get(url)
                .then((response) => {
                    context.commit("ADD_PRODUCT", response.data);
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
        },
        removeOneCart(context, payload) {
            context.commit("REMOVE_ONE_CART", payload);
            console.log("REMOVE_ONE_CART_ACT" + payload.title);
        },
        removeAllCart(context, payload) {
            context.commit("REMOVE_ALL_CART", payload);
            console.log("REMOVE_ALL_CART_ACT" + payload.title);
        },
        //**WITHOUT AXIOS
        checkoutCart(context, payload) {
            context.commit("CHECKOUT", payload);
            console.log("CHECKOUT_ACT" + payload);
        },
        //**WITH AXIOS
        // async checkoutCart(context, payload) {
        //     let url = "api/postData";
        //     await axios
        //         .post(url)
        //         .then((response) => {
        //             context.commit("CHECKOUT", payload);
        //             console.log(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // },
    },
    mutations: {
        ADD_PRODUCT(state, payload) {
            state.listProduct = payload.listProduct;
        },
        ADD_CART(state, payload) {
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
        //**WITHOUT AXIOS
        CHECKOUT(state, payload) {
            state.totalCart = 0;

            payload.forEach((item) => {
                state.totalCart += item.qty * item.price;
            });
            console.log("CHECKOUT_MUT" + payload);
            console.log(payload);
        },
        //**WITH AXIOS
        // CHECKOUT(state, payload) {
        //     state.totalCart = 0;

        //     payload.forEach((item) => {
        //         state.totalCart += item.qty * item.price;
        //     });
        //     console.log("CHECKOUT_MUT" + payload);
        //     console.log(payload);
        // },
    },
    modules: {},
});
