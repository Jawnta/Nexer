<script setup lang="ts">
import TopLogo from "@/components/TopLogo.vue";
</script>

<template>
    <div class="wrapper">
        <div class="main-wrapper">
            <TopLogo />
            <RouterView />
        </div>
    </div>
</template>

<style>
.wrapper {
    display: flex;
    flex-flow: column wrap;
    background: #ffffff;
}

p,
h1,
h2,
h3,
label,
button {
    font-family: "Ubuntu", serif;
}

.main-wrapper {
    padding: 25px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background: #e2e2e2;
    overflow: hidden;
}
</style>
