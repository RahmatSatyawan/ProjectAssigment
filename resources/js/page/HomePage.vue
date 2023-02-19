<template>
    <div class="shadow container container-lg p-0">
        <!-- <modal-atom :totalCart2="totalCart2"></modal-atom> -->
        <div class="header-container">
            <h1>Selamat Datang di Online Shopping</h1>
            <hr />
            <nav class="navbar">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/product" class="nav-link"
                        >Product</router-link
                    >
                    <router-link to="/cart" class="nav-link">Cart</router-link>
                </div>

                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-primary me-2 p-2" type="submit">
                        Search
                    </button>
                </form>
            </nav>
        </div>
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
