<script setup lang="ts">
/* import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"; */
</script>

<template>
    <h1>Välj datum</h1>
    <div class="date-container">
        <!-- Delivery date -->
        <div class="date-column">
            <label For="deliveryDate"> Levereras: </label>
            <input 
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                v-model="deliveryDate"
                :format="setDeliveryDate"
            >
        </div>
        <!-- Pickup date -->
        <div class="date-column">
            <label for="pickupDate" class="date-label"> Hämtas: </label>
            <input 
                type="date"
                id="pickupDate"
                name="pickupDate"
                v-model="pickupDate"
                :format="setPickupDate"
            >
        </div>
    </div>
</template>

<script lang="ts">
/* import { ref } from "vue";

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
}; */
</script>

<style scoped>
.date-container {
    font-size: large;
    display: flex;
    gap: 15px;
}

.date-container input {
    font-family: 'ubuntu';
    background-color: white;
    box-shadow: #0000002e 3px 3px 20px;
    border: none;
    width: 100px;
    border-radius: 5px;
    padding: 5px;
}

.date-container input:focus {
    outline: rgb(151, 149, 149) solid 1px;
}

.date-column {
    display: grid;
}

</style>
