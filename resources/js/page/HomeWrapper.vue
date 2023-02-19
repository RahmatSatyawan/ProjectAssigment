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
            <router-view> </router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: null,
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
            // if(this.searchQuery == null || this.searchQuery == undefined || this.searchQuery == ""){
            //     alert("Please input search query");
            //     return;
            // }
            // if(this.searchQuery.length < 3){
            //     alert("Please input search query more than 3 character");
            //     return;
            // }
            if (this.searchQuery) {
                return this.$store.state.listProduct.filter((product) => {
                    return product.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase());
                });
            }
            // this.$router.push({ name: "search", params: { search: this.searchQuery } });

            // this.$router.push({ name: "search", params: { search: "test" } });

            console.log("search");
        },
    },
};
</script>
