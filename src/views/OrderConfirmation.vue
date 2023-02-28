<script setup lang="ts"></script>
<template>
    <div class="main">
        <h1>Order Confirmation</h1>
        <div class="order-details">
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
        <button @click="logProps">Logga ut Props</button>
    </div>
</template>

<script lang="ts">
import type { Payload } from "@/interfaces";
export default {
    computed: {
        payload(): Payload {
            return JSON.parse(this.$route.query.payload) as Payload;
        },
    },
    methods: {
        logProps() {
            console.log(this.payload);
        },
    },
};
</script>
