<template>
    <div class="map-view">
        <h1>Containerplacering</h1>
        <p class="placering-info">
            Ange placering för containern genom att sätta en markör.
        </p>
        <GMapMap
            ref="myMarker"
            :center="center"
            :zoom="10"
            map-type-id="terrain"
            style="height: 300px; border-radius: 10px;"
        >
            <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :icon="'../src/assets/img/container_icon.png'"
            :clickable="true"
            :draggable="true"
            />
        </GMapMap>

    </div>
</template>

<script lang="ts">

export default {
    name: 'App',
    data() {
        return {
            center: {lat: 56.16156, lng: 15.58661},
            markers: [
                {
                position: {
                    lat: 56.16156, lng: 15.58661
                },
                }
            ]
        }
    },
}

</script>

<style>
.gmnoprint  {
 display: none;
}
.map-view {
    width: 300px;
    margin-bottom: 20px;
}

.placering-info {
    font-size: 16px;
    margin: 0 0 10px 0;
}
.vue-map {
    border-radius: 25px;
}
</style>
