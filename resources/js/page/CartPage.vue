<template>
    <div class="shadow content-container container-lg p-0">
        <modal-atom :totalCart="totalCart"></modal-atom>
        <h2 class="title">Keranjang Belanja</h2>
        <cart-list
            :listCart="listCart"
            :totalCart="totalCart"
            @emitClick="removeCartClick"
            @emitClick2="removeAllClick"
        >
        </cart-list>

        <button-atom
            class="btn btn-success btn-lg btnCheckout"
            text="Checkout"
            color="blue"
            :disabled="listCart.length == 0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        ></button-atom>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            listCart: "getCart",
        }),

        totalCart() {
            this.$store.dispatch("checkoutCart", this.listCart);
            return this.$store.getters.getTotalCart;
        },
    },
    methods: {
        removeCartClick(index) {
            let Product = this.listCart[index];
            this.$store.dispatch("removeOneCart", Product);
        },

        removeAllClick(index) {
            let Product = this.listCart[index];
            this.$store.dispatch("removeAllCart", Product);
        },
    },
    mounted() {
        console.log("Component CartPage mounted.");
    },
};
</script>
