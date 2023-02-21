<script setup lang="ts"></script>
<template>
    <h1>Dina uppgifter</h1>
    <div class="userinfo">
        <label>Förnamn</label>
        <input v-model="userDetails.firstName" @input="handleChange" /><br />
        <label>Efternamn</label>
        <input v-model="userDetails.lastName" @input="handleChange" /><br />
        <label>Personnummer</label>
        <input
            v-model="userDetails.socialSecurity"
            @input="handleChange"
        /><br />
        <label>Telefonnummer</label>
        <input v-model="userDetails.phoneNumber" @input="handleChange" /><br />
        <label>E-postadress</label>
        <input v-model="userDetails.email" @input="handleChange" /><br />
        <label>Adress</label>
        <input v-model="userDetails.address" @input="handleChange" /><br />
        <label>Postnummer</label>
        <input v-model="userDetails.zipCode" @input="handleChange" /> <br />
        <label>Postort</label>
        <input v-model="userDetails.city" @input="handleChange" /> <br />
    </div>
</template>

<script lang="ts">

export default {
    async mounted() {},
    emits: ["userDetails"],
    methods: {
        handleChange() {
            this.$emit("userDetails", this.userDetails);
        },
    },
    data() {
        return {
            userDetails: {
                firstName: "",
                lastName: "",
                socialSecurity: "",
                phoneNumber: "",
                email: "",
                address: "",
                zipCode: "",
                city: "",
            },
        };
    },
};
</script>
<style>
.userinfo {
    text-align: left;
    display: grid;
    margin-bottom: 30px;
}

.userinfo label {
    margin-left: 5px;
}

.userinfo input {
    font-weight: bold;
    box-shadow: #00000028 4px 4px 40px;
    border: #cccccc solid 1px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
}

.userinfo input:focus {
    outline: rgb(151, 149, 149) solid 1px;
}
</style>
