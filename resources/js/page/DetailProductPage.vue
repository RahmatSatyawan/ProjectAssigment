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
            <button @click="goCart" class="btn btn-warning">Cart</button>

            <button @click="goBack" class="btn btn-warning m-4">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
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
