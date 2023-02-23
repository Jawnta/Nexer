<script setup lang="ts">
import ArIcon from "../assets/img/AR.png";
</script>
<template>
    <div class="ar-wrapper">
        <button class="ar-button">
            Ta bild med AR
            <img :src="ArIcon" style="width: inherit" alt="container-logo" />
        </button>
        <p>
            Genom att använda augmented reality (AR) kan man se en modell av en
            container i vekrligheten och även placera den där man önskar.
        </p>
    </div>
</template>

<style>
.ar-wrapper {
    display: flex;
    width: 100%;
    flex-flow: column wrap;
}

.ar-wrapper img {
    width: 40px;
    height: 40px;
}

.ar-button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: #00000020 10px 10px 40px;
    cursor: pointer;
    font-size: 1.5em;
    min-width: 250px;
    padding: 15px;
    margin-bottom: 5px;
    margin-top: 40px;
    border: none;
    border-radius: 40px;
    background-color: #2c84d0;
    color: white;
}

.ar-wrapper p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
}
</style>
