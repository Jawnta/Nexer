<template>
    <div class="map-view">
        <h1>Containerplacering</h1>
        <p class="placering-info">
            Ange placering för containern genom att sätta en markör.
        </p>
        <GMapMap
            ref="myMapRef"
            :center="center"
            :zoom="14"
            map-type-id="hybrid"
            :options="options"
            style="height: 300px; border-radius: 10px"
            @click="setMarker"
        >
            <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :icon="'../src/assets/img/container_icon.png'"
                :draggable="true"
                @dragend="setMarker"
            />
        </GMapMap>
        <GMapAutocomplete
            placeholder="Flytta kartan till:"
            @place_changed="setPlace"
            class="GMapAutoComp"
            :options="{
                componentRestrictions: {
                    country: [
                        'se',
                    ],
                },
            }"
            
        >
        </GMapAutocomplete>
    </div>
</template>

<script lang="ts">
import { usePayloadStore } from "@/store/orderStore";

export default {
    name: "MapCointainer",
    data() {
        return {
            location: "",
            options: {
                clickableIcons: false
            },
            center: { lat: 56.16156, lng: 15.58661 },
            markers: [
                {
                    position: {
                        lat: 0,
                        lng: 0,
                    },
                },
            ],
        };
    },
    methods: {
        setPlace(place: any) {
            const myMap = this.$refs.myMapRef as any;
            myMap.fitBounds(place.geometry.viewport);

            this.center = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };

            this.markers[0].position = {
                lat: 0,
                lng: 0,
            };
        },
        setMarker(event: any) {
            this.markers[0].position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            }

            const payloadStore = usePayloadStore();
            payloadStore.containerMarker.value = this.markers[0].position;
        }
    },
};
</script>

<style>
.gmnoprint {
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

.GMapAutoComp {
    font-weight: bold;
    box-shadow: #00000028 4px 4px 40px;
    border: #cccccc solid 1px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: -webkit-fill-available;
}

.GMapAutoComp:focus {
    outline: rgb(151, 149, 149) solid 1px;
}
</style>
