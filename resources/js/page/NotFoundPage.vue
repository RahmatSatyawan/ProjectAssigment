<template>
    <div class="text-center mt-5">
        <h2 class="title center">404 Not Found</h2>
        <button @click="goHome" class="btn btn-warning m-2">Home</button>
        <button @click="goBack" class="btn btn-warning m-2">Back</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>
