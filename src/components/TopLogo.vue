<script setup lang="ts"></script>

<template>
    <div class="logo"></div>
</template>

<style scoped>

.logo {
    display: flex;
    align-items: center;
    width: 154px;
    height: 50px;
    background: url("../src/assets/img/logo.png") no-repeat;
    background-size: contain;
}

</style>

<script lang="ts">
export default {
    methods: {},
    data() {
        return {
        imageUrl: "../src/assets/img/logo.png",
        };
    },
};
</script>
