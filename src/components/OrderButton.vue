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
