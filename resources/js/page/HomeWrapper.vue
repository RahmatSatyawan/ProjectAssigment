<template>
    <div class="shadow container container-lg p-0">
        <div class="header-container">
            <h1>Online Shopping</h1>
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
                        v-model.trim="searchQuery"
                        class="form-control me-2"
                        type="search"
                        placeholder="Search by Name"
                        aria-label="Search"
                    />
                    <button
                        @click="search()"
                        class="btn btn-primary me-2 p-2"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </nav>
        </div>
        <div class="content-container">
            <h3>{{ listProductFiltered }}</h3>
            <router-view> </router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: null,
            listProductFiltered: [],
        };
    },
    computed: {
        listProduct() {
            return this.$store.state.listProduct;
        },
    },
    methods: {
        search() {
            console.log(this.searchQuery);
            if (this.searchQuery) {
                this.listProductFiltered.push(
                    this.$store.state.listProduct.filter((product) => {
                        return product.title
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase());
                    })
                );
                return this.listProductFiltered;
            }
            console.log("search");
        },
    },
};
</script>
