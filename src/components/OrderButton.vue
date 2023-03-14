<template>
    <div>
        <button class="order-button" @click="handleClick">Beställ</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Payload } from "@/interfaces";

export default defineComponent({
    name: "OrderButton",
    props: {
        payload: {
            type: Object as () => Payload,
            required: true,
        },
    },
    methods: {
        handleClick() {
            const payloadString = JSON.stringify(this.$props.payload);
            this.$router.push({
                name: "OrderConfirmation",
                query: { payload: payloadString },
            });
        },
    },
});
</script>

<style>
.order-button {
    font-weight: medium;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2C84D0;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    cursor: pointer;
    font-size: 17px;
    min-width: 250px;
    padding: 15px;
    margin-bottom: 5px;
    margin-top: 40px;
    border: none;
    border-radius: 40px;
    color: white;
}
</style>
