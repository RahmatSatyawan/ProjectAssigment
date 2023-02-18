<template>
  <div class="text-center">
    <h2>404 Not Found</h2>
    <button @click="goHome" class="btn">Home</button>
    <button @click="goBack" class="btn">Back</button>
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
