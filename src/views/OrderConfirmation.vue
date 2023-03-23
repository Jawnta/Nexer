<script setup lang="ts">
import { usePayloadStore } from "@/store/orderStore";
const payloadStore = usePayloadStore();
</script>
<template>
    <div class="main">
        <h1>Order Confirmation</h1>
        <div class="order-details" v-if="payloadStore">
            <p>Leveransdatum: {{ payloadStore.deliveryDate }}</p>
            <p>Upphätmningsdatum: {{ payloadStore.pickupDate }}</p>
            <p>Förnamn: {{ payloadStore.firstName }}</p>
            <p>Efternamn: {{ payloadStore.lastName }}</p>
            <p>Personnummer: {{ payloadStore.socialSecurity }}</p>
            <p>Telefonnummer: {{ payloadStore.phoneNumber }}</p>
            <p>E-post adress: {{ payloadStore.email }}</p>
            <p>Gatuadress: {{ payloadStore.address }}</p>
            <p>Postnummer: {{ payloadStore.zipCode }}</p>
            <p>Ort: {{ payloadStore.city }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {};
</script>
