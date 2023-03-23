<script setup lang="ts">
import { usePayloadStore } from "@/store/orderStore";
const payloadStore = usePayloadStore();
</script>
<template>
    <div class="message-box">
        <label>Meddelande</label>
        <textarea v-model="payloadStore.message.value"></textarea>
    </div>
</template>

<style scoped>
.message-box {
    display: flex;
    text-align: left;
    flex-flow: column wrap;
    width: 100%;
    margin-bottom: 24px;
}
.message-box label {
    margin-left: 5px;
    margin-bottom: 5px;
}

.message-box textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #919191;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    padding: 12px 12px;
    height: 220px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.message-box textarea {
    border: 2px solid #ededed;
    border-radius: 6px;
    box-shadow: none;
    color: #1e1e1e;
    font-family: Inter-400, sans-serif;
    font-size: 1rem;
}
</style>
