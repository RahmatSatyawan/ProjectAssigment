<template>
    <table class="table table-striped table-hover">
        <thead class="table-head">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in listProduct" :key="index">
                <td scope="row">{{ item.title }}</td>
                <td>{{ item.desc }}</td>
                <td>{{ item.qty }}</td>
                <td>
                    {{
                        new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(item.price)
                    }}
                </td>
                <td>
                    <button-atom
                        class="btn btn-primary btn-sm m-2"
                        text="Add to Cart"
                        color="blue"
                        :disabled="item.qty == 0"
                        @emitClick="buttonClick(index)"
                    ></button-atom>
                    <button-atom
                        class="btn btn-primary btn-sm m-2"
                        text="Detail"
                        color="blue"
                        :disabled="item.qty == 0"
                        @emitClick="buttonClick2(index)"
                    ></button-atom>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        listProduct: {
            type: Array,
            default: () => {
                return [];
            },
        },
        show: {
            type: String,
            default: "show",
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
