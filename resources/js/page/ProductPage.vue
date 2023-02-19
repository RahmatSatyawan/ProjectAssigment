<template>
    <div class="shadow content-container container-lg p-0">
        <h2 class="title">Semua Produk</h2>
        <product-list
            :listProduct="listProduct"
            @emitClick="addCartClick"
            @emitClick2="detailProductClick"
        ></product-list>
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
            listProduct: "getProduct",
        }),
    },
    methods: {
        getAllData() {
            this.$store.dispatch("getAllData");
        },
        addCartClick(index) {
            this.$store.dispatch("addCart", index);
        },
        detailProductClick(index) {
            console.log("detail" + index);
            this.$router.push({
                name: "DetailProduct",
                params: {
                    id: index,
                },
                path: "/product/" + this.params,
            });
        },
    },
    mounted() {
        console.log("Component ProductPage mounted.");
        this.$store.dispatch("getAllData");
    },
};
</script>
