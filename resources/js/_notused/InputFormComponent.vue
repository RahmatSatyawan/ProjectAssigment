<template>
    <form action="">
        <input type="text" v-model="inputform" />
        <button type="button" @click="reset">Reset</button>
        <button type="button" @click="addList">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputform: "",
        };
    },
    methods: {
        addList() {
            this.$emit("emitSubmit", this.inputform);
            this.inputform = "";
        },
        reset() {
            this.inputform = "";
        },
    },
};
</script>
