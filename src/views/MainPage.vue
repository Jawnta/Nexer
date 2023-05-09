<script setup lang="ts">
import TopHeader from "@/components/TopHeader.vue";
import Containers from "@/components/ContainerCards.vue";
import Calender from "@/components/DatePickers.vue";
import MapContainer from "@/components/MapContainer.vue";
import UserInfo from "@/components/UserInfo.vue";
import OrderButton from "@/components/OrderButton.vue";
import ArButton from "@/components/ArButton.vue";
</script>

<template>
    <TopHeader />
    <Containers />
    <ArButton />
    <MapContainer />
    <Calender />
    <UserInfo />
    <OrderButton />


  
</template>
<style>

#ARButton {
    position: absolute !important; 
    bottom: 20px !important; 
    padding: 12px 6px !important; 
    color: rgb(255, 255, 255) !important; 
    font: 13px sans-serif !important; 
    text-align: l !important;
    opacity: 0.8 !important;
    outline: none !important;
    z-index: 999 !important; 
    cursor: pointer !important;
    left: 19px !important;
    width: 100px !important;

    border: none !important;
    border-radius: 40px !important;
    box-shadow: #00000028 4px 4px 20px !important;
    background-color: #2c84d0 !important;
    min-height: 42px !important;
}

#ARButton:hover{
    opacity: 1 !important;
}
    </style>