<template>
    <button type="button" :class="[color, show]" @click="buttonClick">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "button",
        },
        color: {
            type: String,
            default: "",
        },
        show: {
            type: String,
            default: "show",
        },
    },
    methods: {
        buttonClick() {
            this.$emit("emitClick");
        },
    },
};
</script>
