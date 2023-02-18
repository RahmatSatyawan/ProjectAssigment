<template>
  <div class="shadow container container-lg p-0">
    <!-- <modal-atom :totalCart2="totalCart2"></modal-atom> -->
    <h1 class="header-container">Selamat Datang di Online Shopping</h1>
    <div class="content-container">
      <h2>User : {}</h2>
      <router-view> </router-view>
    </div>
    <div class="nav-container">
      <router-link to="/product" class="btn btn-primary btn-lg btn_nav"
        >Product</router-link
      >
      <router-link to="/cart" class="btn btn-primary btn-lg btn_nav"
        >Cart</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
