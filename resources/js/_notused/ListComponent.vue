<template>
    <ul class="list">
        <li v-for="(item, index) in listdata" :key="index">
            {{ item.title }}
            <span class="delete" @click="deleteList(index)">Hapus</span>
        </li>
        <ul></ul>
    </ul>
</template>

<script>
export default {
    props: {
        listdata: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    methods: {
        deleteList(index) {
            this.$emit("emitDelete", index);
        },
    },
};
</script>
