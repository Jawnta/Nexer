<script setup lang="ts"></script>

<template>
    <div class="wrapper">
        <RouterView />
    </div>
</template>

<style>
.wrapper {
    display: flex;
    flex-flow: column wrap;
    background: #ffffff;
}

p, h1, h2, h3, label, button {
    font-family: 'Ubuntu';
}

</style>
