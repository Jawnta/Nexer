<script setup lang="ts"></script>

<template>
    <h1>Välj datum</h1>
    <div class="date-container">
        <!-- Delivery date -->
        <div class="date-column">
            <label For="deliveryDate" class="date-label">Leverans</label>
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
            <label for="pickupDate" class="date-label">Upphämtning</label>
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
}
.date-container {
    font-size: large;
    display: flex;
    gap: 15px;
}

.date-container input {
    font-family: "ubuntu";
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
