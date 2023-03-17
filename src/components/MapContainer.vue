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
            style="height: 300px; border-radius: 10px"
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
        <GMapAutocomplete
            placeholder="Flytta kartan till:"
            @place_changed="setPlace"
            class="GMapAutoComp"
        >
        </GMapAutocomplete>
    </div>
</template>

<script lang="ts">
export default {
    
    name: "App",
    data() {
        return {
            location: "",
            center: { lat: 56.16156, lng: 15.58661 },
            markers: [
                {
                    position: {
                        lat: 56.16156,
                        lng: 15.58661,
                    },
                },
            ],
        };
    },
    methods: {
        setPlace(place: any) {
            this.center = { 
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
        }
    }
};
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
