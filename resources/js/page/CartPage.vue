<template>
    <div class="shadow content-container container-lg p-0">
        <modal-atom :totalCart="totalCart2"></modal-atom>
        <h2 class="title">Keranjang Belanja</h2>
        <h2>{{ totalCart }}</h2>
        <cart-list
            :listCart="listCart"
            :totalCart="totalCart"
            @emitClick="removeCartClick"
            @emitClick2="removeAllClick"
        >
        </cart-list>

        <button-atom
            class="btn btn-success btn-lg btnCheckout"
            text="Checkout"
            color="blue"
            :disabled="listCart.length == 0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        ></button-atom>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            // listCar: 11,
            //   listProduct: [
            //     {
            //       title: "Indomie Goreng Rendang",
            //       desc: "Masakan instan terenak di dunia",
            //       qty: 10,
            //       price: 3900,
            //     },
            //     {
            //       title: "Mie Gelas Rendang",
            //       desc: "Mie instan khusus anak kosan",
            //       qty: 3,
            //       price: 1500,
            //     },
            //     {
            //       title: "Bakmi Mewah",
            //       desc: "Kalau anak kosan jangan macam2 deh",
            //       qty: 80,
            //       price: 10000,
            //     },
            //   ],
            //   listCart: [
            //            {
            //       title: "Bakmi Mewah",
            //       desc: "Kalau anak kosan jangan macam2 deh",
            //       qty: 80,
            //       price: 10000,
            //     },
            //   ],
            // totalCart2: 0,
        };
    },
    computed: {
        ...mapGetters({
            listCart: "getCart",
            totalCart: "getTotalCart",
            // "listCart", "totalCart"
        }),
        listCar() {
            return 15;
        },
        totalCart() {
            this.$store.dispatch("checkoutCart", this.listCart);
            return this.$store.getters.getTotalCart;
        },
        // totalCart() {
        //     return {
        //         totalCart: this.$store.getters.getTotalCart,
        //         this.$store.dispatch("checkoutCart", this.listCart);
        //     };
        // },

        totalCart2() {
            if (this.listCart.length < 0 || null || undefined) {
                return 0;
            } else {
                return this.listCart.reduce(
                    (total, item) => total + item.qty * item.price,
                    0
                );
            }
        },
        //      totalCart2= this.listCart.reduce((acc, item) => {
        //     return acc + item.qty * item.price;
        // }, 0);

        // totalCart2() {
        //     if (this.listCart.length < 0 || null || undefined) {
        //         return 0;
        //     } else {
        //         let newTotalCart = 0;
        //         newTotalCart = this.listCart.reduce((acc, item) => {
        //             return acc + item.qty * item.price;
        //         }, 0);
        //         return newTotalCart;
        //     }
        // },
    },
    methods: {
        removeCartClick(index) {
            let Product = this.listCart[index];
            this.$store.dispatch("removeOneCart", Product);
        },

        removeAllClick(index) {
            let Product = this.listCart[index];
            this.$store.dispatch("removeAllCart", Product);
        },

        // checkoutClick() {
        //     // this.totalCart = 0;
        //     // this.totalCart = this.listCart.reduce((acc, item) => {
        //     //     return acc + item.qty * item.price;
        //     // }, 0);
        //     this.$store.dispatch("checkoutCart", this.listCart);
        // },

        // addCartClick(index) {
        //   let newCart = {
        //     title: null,
        //     qty: 0,
        //     price: 0,
        //   };

        //   newCart = {
        //     title: this.listProduct[index].title,
        //     qty: 1,
        //     price: this.listProduct[index].price,
        //   };

        //   if (this.listCart.filter((e) => e.title == newCart.title).length > 0) {
        //     for (let i = 0; i < this.listCart.length; i++) {
        //       if (
        //         newCart.title == this.listCart[i].title &&
        //         this.listProduct[index].qty > 0
        //       ) {
        //         return (
        //           (this.listCart[i].qty += 1), (this.listProduct[index].qty -= 1)
        //         );
        //       }
        //       if (
        //         newCart.title == this.listCart[i].title &&
        //         this.listProduct[index].qty == 0
        //       ) {
        //         return (this.listProduct[index].qty = 0);
        //       }
        //     }
        //   } else {
        //     this.listCart.push(newCart), (this.listProduct[index].qty -= 1);
        //   }
        // },

        // removeCartClick(index) {
        //   if (this.listCart[index].qty > 1) {
        //     for (let i = 0; i < this.listProduct.length; i++) {
        //       if (this.listCart[index].title == this.listProduct[i].title) {
        //         return (
        //           (this.listCart[index].qty -= 1), (this.listProduct[i].qty += 1)
        //         );
        //       }
        //     }
        //   } else {
        //     for (let i = 0; i < this.listProduct.length; i++) {
        //       if (this.listCart[index].title == this.listProduct[i].title) {
        //         return (
        //           this.listCart.splice(index, 1), (this.listProduct[i].qty += 1)
        //         );
        //       }
        //     }
        //   }
        // },
        // removeAllClick(index) {
        //     this.listCart.splice(index, 1);
        // },
    },
    mounted() {
        console.log("Component CartPage mounted.");
    },
};
</script>
