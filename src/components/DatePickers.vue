<script setup lang="ts"></script>

<template>

    <div class="date-container">
        <!-- Delivery date -->
        <div class="date-column">
            <label For="deliveryDate" class="date-label">Datum för önskad leverans</label>
            <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                v-model="dates.deliveryDate"
                @input="handleChange"
            />
        </div>
        <!-- Pickup date -->

        <div class="date-column">
            <label for="pickupDate" class="date-label">Datum för hemtagning </label>

            <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                v-model="dates.pickupDate"
                @input="handleChange"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    async mounted() {},

    emits: ["addDates"],
    methods: {
        handleChange() {
            this.$emit("addDates", this.dates);
        },
    },
    data() {
        return {
            dates: { deliveryDate: "", pickupDate: "" },
        };
    },
};
</script>

<style scoped>
.date-label {
    margin-bottom: 10px;
    margin-top: 20px;
    width: 80%;
}
.date-container {
    display: flex;
    font-size: medium;
    margin-bottom: 20px;
    width: 90%;
}

.date-container input {
    font-family: "ubuntu", serif;
    background-color: white;
    box-shadow: #0000002e 3px 3px 20px;
    border: none;
    width: 110px;
    border-radius: 5px;
    padding: 5px;
}

.date-container input:focus {
    outline: rgb(151, 149, 149) solid 1px;
}

.date-column {
    display: flex;
    flex-flow: column wrap;
    word-break: break-word;
}
</style>
