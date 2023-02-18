<template>
  <div class="map-view">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :zoomControl="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
//@ts-ignore
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
</style>
