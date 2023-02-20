<template>
    <h1>Din information</h1>
    <div class="userinfo">
        <label>Förnamn</label>
        <input v-model="firstName"><br>
        <label>Efternamn</label>
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
    margin-bottom: 30px;
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
