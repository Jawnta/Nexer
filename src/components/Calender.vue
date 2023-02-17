<script setup lang="ts">
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
const date2 = ref();
</script>

<template>
    <div>
        <label for="Send">
            Leverans datum:
        </label>
        <Datepicker v-model="date" class="datepicker"/><br>
        <label for="Send">
            Upphämtnings datum:
        </label>
        <Datepicker v-model="date2" class="datepicker"/>
    </div>
</template>

<style scoped>
.datepicker {
    box-shadow: #0000002e 3px 3px 20px;
}
</style>
