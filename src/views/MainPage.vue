<script setup lang="ts">
import TopHeader from "@/components/TopHeader.vue";
import Containers from "@/components/ContainerCards.vue";
import Calender from "@/components/DatePickers.vue";
import MapContainer from "@/components/MapContainer.vue";
import UserInfo from "@/components/UserInfo.vue";
import OrderButton from "@/components/OrderButton.vue";
import ArButton from "@/components/ArButton.vue";
import MessageBox from "@/components/MessageBox.vue";
</script>

<template>
    <TopHeader />
    <Containers @selectedContainer="handleContainer" />
    <Calender @addDates="handleDates" />
    <UserInfo @userDetails="handleUserDetails" />
    <MessageBox @message="handleMessage" />
    <!--         Knapp för att logga ut datapaketet nedan-->
    <!--         <button @click="logThis">Logga ut Payloaden</button>-->
    <MapContainer />
    <ArButton />
    <OrderButton :payload="this.data" />
</template>

<script lang="ts">
import type { UserDetails, Payload, ContainerCard } from "@/interfaces";
export default {
    data() {
        return {
            data: {
                deliveryDate: "",
                pickupDate: "",
                coordinates: "",
                firstName: "",
                lastName: "",
                socialSecurity: "",
                phoneNumber: "",
                email: "",
                address: "",
                zipCode: "",
                city: "",
                message: "",
                selectedContainer: {},
            } as Payload,
        };
    },
    methods: {
        handleDates(data: { deliveryDate: string; pickupDate: string }) {
            this.data.deliveryDate = data.deliveryDate;
            this.data.pickupDate = data.pickupDate;
        },
        handleUserDetails(userData: UserDetails) {
            for (let key in userData) {
                if (key in this.data) {
                    this.data[key] = userData[key];
                }
            }
        },
        handleMessage(message: string) {
            this.data.message = message;
        },
        handleContainer(container: ContainerCard) {
            this.data.selectedContainer = container;
        },
        logThis() {
            console.log(this.data);
        },
    },
};
</script>
