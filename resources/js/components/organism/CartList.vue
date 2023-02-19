<template>
    <div>
        <table class="table table-striped table-hover">
            <thead class="table-head">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-if="listCart.length > 0">
                <tr v-for="(item, index) in listCart" :key="index">
                    <td scope="row">{{ item.title }}</td>
                    <td>{{ item.qty }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button-atom
                            class="btn btn-warning btn-sm m2"
                            text="Delete One"
                            color="blue"
                            @emitClick="buttonClick(index)"
                        ></button-atom>
                        <button-atom
                            class="btn btn-danger btn-sm m2"
                            text="Delete All"
                            color="blue"
                            @emitClick="buttonClick2(index)"
                        ></button-atom>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Total</td>
                    <td>{{ totalCart }}</td>
                </tr>
            </tbody>
        </table>
        <h2 class="empty-cart" v-if="listCart.length <= 0">
            No Product on Cart
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        listCart: {
            type: Array,
            default: () => {
                return [];
            },
        },
        totalCart2: {
            type: Number,
            default: 30,
        },
    },
    methods: {
        buttonClick(index) {
            this.$emit("emitClick", index);
        },
        buttonClick2(index) {
            this.$emit("emitClick2", index);
        },
    },
};
</script>
