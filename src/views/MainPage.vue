<script setup lang="ts">
import TopLogo from "@/components/TopLogo.vue";
import TopHeader from "@/components/TopHeader.vue";
import Containers from "@/components/ConatinerCards.vue";
import Calender from "@/components/DatePickers.vue";
import MapContainer from "@/components/MapContainer.vue";
import UserInfo from "@/components/UserInfo.vue";
import OrderButton from "@/components/OrderButton.vue";
import ArButton from "@/components/ArButton.vue";
</script>

<template>
    <div class="main-wrapper">
        <TopLogo />
        <TopHeader />
        <Containers />
        <Calender @addDates="handleDates" />
        <UserInfo @userDetails="handleUserDetails" />
        <!-- Knapp för att logga ut datapaketet nedan -->
        <!-- <button @click="logThis">Logga ut Payloaden</button> -->
        <MapContainer />
        <ArButton />
        <OrderButton />
    </div>
</template>

<style scoped>
.main-wrapper {
    padding: 25px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background: #e2e2e2;
    overflow: hidden;
}
</style>

<script lang="ts">
import type { UserDetails, Payload } from "@/interfaces";
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
        logThis() {
            console.log(this.data);
        },
    },
};
</script>
