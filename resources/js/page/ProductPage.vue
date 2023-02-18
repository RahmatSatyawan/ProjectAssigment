<template>
  <div class="shadow container container-lg p-0">
    <modal-atom :totalCart2="totalCart2"></modal-atom>

    <h1>Semua Produk</h1>
    <product-list
      :listProduct="listProduct"
      @emitClick="addCartClick"
    ></product-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listProduct: [
        {
          title: "Indomie Goreng Rendang",
          desc: "Masakan instan terenak di dunia",
          qty: 10,
          price: 3900,
        },
        {
          title: "Mie Gelas Rendang",
          desc: "Mie instan khusus anak kosan",
          qty: 3,
          price: 1500,
        },
        {
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
};
</script>
