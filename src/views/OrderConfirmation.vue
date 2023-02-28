<script setup lang="ts"></script>
<template>
    <div class="main">
        <h1>Order Confirmation</h1>
        <div class="order-details" v-if="payload">
            <p>Leveransdatum: {{ payload.deliveryDate }}</p>
            <p>Upphätmningsdatum: {{ payload.pickupDate }}</p>
            <p>Förnamn: {{ payload.firstName }}</p>
            <p>Efternamn: {{ payload.lastName }}</p>
            <p>Personnummer: {{ payload.socialSecurity }}</p>
            <p>Telefonnummer: {{ payload.phoneNumber }}</p>
            <p>E-post adress: {{ payload.email }}</p>
            <p>Gatuadress: {{ payload.address }}</p>
            <p>Postnummer: {{ payload.zipCode }}</p>
            <p>Ort: {{ payload.city }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import type { Payload } from "@/interfaces";
export default {
    // computed: {
    //     payload(): Payload {
    //         return JSON.parse(this.$route.query.payload) as Payload;
    //     },
    // },
    computed: {
        payload(): Payload {
            const payloadString = this.$route.query.payload as string;
            if (payloadString !== null) {
                return JSON.parse(payloadString) as Payload;
            } else {
                throw new Error("Payload is null");
            }
        },
    },
};
</script>
