<template>
    <div class="shadow container container-lg p-0">
        <!-- <modal-atom :totalCart2="totalCart2"></modal-atom> -->
        <div class="header-container">
            <h1>Selamat Datang di Online Shopping</h1>
            <hr />
            <div>{{ $route.params.id }}</div>
            <div>{{ listProduct[$route.params.id].title }}</div>
            <div>{{ listProduct[$route.params.id].desc }}</div>
        </div>
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
        };
    },
};
</script>
