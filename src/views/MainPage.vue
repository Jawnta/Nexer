<script setup lang="ts">
import TopLogo from "@/components/TopLogo.vue";
import TopHeader from "@/components/TopHeader.vue";
import Containers from "@/components/ConatinerCards.vue";
import Calender from "@/components/DatePickers.vue";
import MapContainer from "@/components/MapContainer.vue";
import UserInfo from "@/components/UserInfo.vue";
import OrderButton from "@/components/OrderButton.vue";
</script>

<template>
    <div class="main-wrapper">
        <TopLogo />
        <TopHeader />
        <Containers />
        <Calender @addDates="handleDates" />
        <MapContainer />
        <UserInfo />
        <OrderButton />
    </div>
</template>

<style scoped>
.main-wrapper {
    padding: 25px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background: white;
    overflow: hidden;
}
</style>

<script lang="ts">
export default {
    data() {
        return {
            uppercase: "",
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
                zipcode: "",
                city: "",
            },
        };
    },
    methods: {
        handleDates(data: { deliveryDate: string; pickupDate: string }) {
            this.data.deliveryDate = data.deliveryDate;
            this.data.pickupDate = data.pickupDate;
        },
    },
};
</script>
