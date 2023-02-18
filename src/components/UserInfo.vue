<script setup lang="ts"></script>

<template>
    <div class="userinfo">
        <h2>UserInfo</h2>
        <label>First name</label>
        <input v-model="firstName"><br>
        <label>Last name</label>
        <input v-model="lastName"><br>
        <label>Personnummer</label>
        <input v-model="ssn"><br>
        <label>Telefonnummer</label>
        <input v-model="phone"><br>
        <label>E-postadress</label>
        <input v-model="email"><br>
        <label>Adress</label>
        <input v-model="adress"><br>
        <label>Postnummer</label>
        <input v-model="post"><br>
        <label>Post-ort</label>
        <input v-model="ort"><br>
    </div>
</template>

<style>
.userinfo {
    text-align: left;
    display: grid;
}

.userinfo input {
    font-weight: bold;
    box-shadow: #0000002e 3px 3px 20px;
    border: #cccccc solid 1px;
    padding: 10px;
    border-radius: 5px;
}

.userinfo input:focus {
    outline: rgb(151, 149, 149) solid 1px;
}
</style>
