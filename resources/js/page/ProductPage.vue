<template>
    <div class="shadow content-container container-lg p-0">
        <!-- <modal-atom :totalCart2="totalCart2"></modal-atom> -->

        <h1>Semua Produk</h1>
        <product-list
            :listProduct="listProduct"
            @emitClick="addCartClick"
            @emitClick2="detailProductClick"
        ></product-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listProduct: [
                {
                    id: 1,
                    title: "Indomie Goreng Rendang",
                    desc: "Masakan instan terenak di dunia",
                    qty: 10,
                    price: 3900,
                },
                {
                    id: 2,
                    title: "Mie Gelas Rendang",
                    desc: "Mie instan khusus anak kosan",
                    qty: 3,
                    price: 1500,
                },
                {
                    id: 3,
                    title: "Bakmi Mewah",
                    desc: "Kalau anak kosan jangan macam2 deh",
                    qty: 80,
                    price: 10000,
                },
            ],
            listCart: [],
            totalCart: 0,
        };
    },
    methods: {
        // totalCart2() {
        //     if (this.listCart.length < 0 || null || undefined) {
        //         return 0;
        //     } else {
        //         return this.listCart.reduce(
        //             (total, item) => total + item.qty,
        //             0
        //         );
        //     }
        // },
        addCartClick(index) {
            console.log("add" + index);
            // let product = this.listProduct[index];
            // let cart = this.listCart.find(
            //     (item) => item.title == product.title
            // );
            // if (cart) {
            //     cart.qty++;
            // } else {
            //     this.listCart.push({
            //         title: product.title,
            //         desc: product.desc,
            //         qty: 1,
            //         price: product.price,
            //     });
            // }
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
};
</script>
