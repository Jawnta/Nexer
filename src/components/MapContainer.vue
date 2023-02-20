<script setup lang="ts"></script>
<template>
    <div class="map-view">
        <h1>Containerplacering</h1>
    <p class="placering-info">Ange placering för containern genom att sätta en markör.</p>
        <l-map ref="map" v-model:zoom="zoom" :center="center" :zoomControl="false" style="border-radius: 15px;">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
        </l-map>
    </div>
    <button class="ar-button">Ta bild med AR</button>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    mounted() {
        if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = [position.coords.latitude, position.coords.longitude];
        });
        }
    },
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
        zoom: 15,
        center: [56.16156, 15.58661],
        };
    },

};
</script>

<style>
.map-view {
    height: 300px;
    width: 300px;
    margin: 20px 0 20px 0;
}

.ar-button {
    box-shadow: #00000020 10px 10px 40px;
    cursor: pointer;
    min-width: 250px;
    padding: 15px;
    margin-bottom: 50px;
    border: none;
    border-radius: 40px;
    background-color: #2C84D0;
    color: white;
}

.placering-info {
    font-size: 16px;
    margin: 0 0 10px 0;
}
</style>
