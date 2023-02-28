<script setup lang="ts"></script>
<template>
    <div>
        <router-link
            :to="{
                name: 'OrderConfirmation',
                query: { payload: JSON.stringify(this.$props.payload) },
            }"
        >
            <button class="order-button">Beställ</button>
        </router-link>
    </div>
</template>

<style>
.order-button {
    box-shadow: #00000020 10px 10px 40px;
    cursor: pointer;
    font-size: 1.5em;
    min-width: 250px;
    padding: 15px;
    margin-bottom: 50px;
    margin-top: 50px;
    border: none;
    border-radius: 40px;
    background-color: #2c84d0;
    color: white;
}
</style>

<script lang="ts">
import type { Payload } from "@/interfaces";
export default {
    props: {
        payload: {
            type: Object as () => Payload,
            required: true,
        },
    },
};
</script>
