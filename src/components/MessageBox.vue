<script setup lang="ts"></script>
<template>
    <div class="message-box">
        <label>Meddelande</label>
        <textarea v-model="message" @input="handleChange"></textarea>
    </div>
</template>

<style scoped>
.message-box {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
}

.message-box textarea {
    box-shadow: #00000028 4px 4px 40px;
    border: #cccccc solid 1px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    min-width: 250px;
    height: 100px;
    resize: none;
}

.message-box textarea:focus {
    outline: rgb(151, 149, 149) solid 1px;
}
</style>

<script lang="ts">
export default {
    emits: ["message"],
    methods: {
        handleChange() {
            this.$emit("message", this.message);
        },
    },
    data() {
        return {
            message: "",
        };
    },
};
</script>
