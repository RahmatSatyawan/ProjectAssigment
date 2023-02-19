<template>
    <div class="">
        <div class="">
            <h2 class="title">Detail Product</h2>
            <hr />
            <h4 class="m-4">Id : {{ $route.params.id }}</h4>
            <h4 class="m-4">
                Title : {{ $store.state.listProduct[$route.params.id].title }}
            </h4>
            <h4 class="m-4">
                Desc : {{ $store.state.listProduct[$route.params.id].desc }}
            </h4>
            <hr />
            <button @click="goProduct" class="btn btn-warning m-4">
                Product
            </button>
             <button @click="goCart" class="btn btn-warning ">
                Cart
            </button>

            <button @click="goBack" class="btn btn-warning m-4">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // listProduct: [
            //     {
            //         id: 1,
            //         title: "Indomie Goreng Rendang",
            //         desc: "Masakan instan terenak di dunia",
            //         qty: 10,
            //         price: 3900,
            //     },
            //     {
            //         id: 2,
            //         title: "Mie Gelas Rendang",
            //         desc: "Mie instan khusus anak kosan",
            //         qty: 3,
            //         price: 1500,
            //     },
            //     {
            //         id: 3,
            //         title: "Bakmi Mewah",
            //         desc: "Kalau anak kosan jangan macam2 deh",
            //         qty: 80,
            //         price: 10000,
            //     },
            // ],
        };
    },
    methods: {
        goCart() {
            this.$router.push({ name: "cart" });
        },
        goProduct() {
            this.$router.push({ name: "product" });
        },
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>
