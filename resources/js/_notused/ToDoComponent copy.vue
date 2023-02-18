<template>
    <div class="container">
        <h1>To-do</h1>
        <form action="" class="form">
            <input type="text" v-model="input" />
            <button type="button" @click="addList">Submit</button>
        </form>
        <ul class="list" v-for="(item, index) in list" :key="index">
            <li>
                {{ item.title }}
                <span class="delete" @click="deleteList(index)">Hapus</span>
            </li>
        </ul>
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
            input: "",
        };
    },
    methods: {
        addList() {
            let newList = {
                title: this.input,
            };
            this.list.push(newList);
            this.input = "";
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
