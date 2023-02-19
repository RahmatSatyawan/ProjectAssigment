<template lang="">
    <div div class="text-center mt-5">
        <h2 class="title center">Selamat Datang...</h2>
        <button @click="goProduct" class="btn btn-warning m-2">Product</button>
        <button @click="goCart" class="btn btn-warning m-2">Cart</button>
    </div>
</template>

<script>
export default {
    methods: {
        goCart() {
            this.$router.push({ name: "cart" });
        },
        goProduct() {
            this.$router.push({ name: "product" });
        },
    },
};
</script>
