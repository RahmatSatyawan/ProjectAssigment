<template>
    <div class="container">
        <h1>To-do</h1>
        <input-form @emitSubmit="addList" />
        <list :listdata="list" @emitDelete="deleteList" />
        <button-atom
            type="button"
            :class="{ color, show }"
            @click="buttonClick"
        />
    </div>
</template>

<script>
export default {
    data: {},
    props: {},
    methods: {},
};
</script>
>
