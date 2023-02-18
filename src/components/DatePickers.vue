<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>

<template>
    <div class="main">
        <label For="send" class="date-label"> Leveransdatum: </label>
        <Datepicker
            id="send"
            class="datepicker"
            v-model="deliveryDate"
            :format="setDeliveryDate"
        />
        <label for="return" class="date-label"> Upphämtningsdatum: </label>
        <Datepicker
            id="return"
            class="datepicker"
            v-model="pickupDate"
            :format="setPickupDate"
        />
    </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
    async mounted() {},

    emits: ["addDates"],
    methods: {
        handleChange() {
            this.$emit("addDates", this.dates);
        },
        formatDate(date: {
            getDate: () => any;
            getMonth: () => any;
            getFullYear: () => any;
        }): string {
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();
            return `${year}/${month}/${day}`;
        },
        setDeliveryDate(date: Date) {
            const formattedDate = this.formatDate(date);
            this.dates.deliveryDate = formattedDate;
            this.handleChange();
            return formattedDate;
        },
        setPickupDate(date: Date) {
            const formattedDate = this.formatDate(date);
            this.dates.pickupDate = formattedDate;
            this.handleChange();
            return formattedDate;
        },
    },
    data() {
        return {
            dates: { deliveryDate: "", pickupDate: "" },
            deliveryDate: ref(new Date()),
            pickupDate: ref(new Date()),
        };
    },
};
</script>

<style scoped>
.main {
    display: flex;
    flex-flow: column wrap;
}

.datepicker {
    box-shadow: #0000002e 3px 3px 20px;
    margin-bottom: 20px;
}

.date-label {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    font-size: 1.5em;
}
</style>
