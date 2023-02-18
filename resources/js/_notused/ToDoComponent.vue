<template>
    <div class="container">
        <h1>To-do</h1>
        <input-form @emitSubmit="addList" />
        <list :listdata="list" @emitDelete="deleteList" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "menyapu",
                },
                {
                    title: "cuci piring",
                },
            ],
        };
    },
    methods: {
        addList(inputform) {
            let newList = {
                title: inputform,
            };
            this.list.push(newList);
            // this.input = "";
        },
        deleteList(index) {
            this.list.splice(index, 1);
        },
    },
    mounted() {
        console.log("Component todo mounted.");
    },
};
</script>
