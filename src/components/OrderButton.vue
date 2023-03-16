<template>
    <div>
        <button class="order-button" @click="() => {handleClick();sendEmail();}">Beställ</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Payload } from "@/interfaces";
import emailjs from "emailjs-com";

export default defineComponent({
    mounted() {
        emailjs.init("aJoppP8gvteb65_ur");
    },
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
        sendEmail() {
            emailjs
                .send(
                    "service_ne3xu3v",
                    "template_chpkccp",
                    {
                        to_name: "Recipient Name",
                        from_name: "Your Name",
                        message:
                            "This is a test email sent from Vue.js using EmailJS and Gmailaaaaaaaaaaaa.",
                        to_email: "jawntalol@gmail.com",
                    },
                    "aJoppP8gvteb65_ur"
                )
                .then(
                    function (response) {
                        console.log("SUCCESS!", response.status, response.text);
                    },
                    function (error) {
                        console.log("FAILED...", error);
                    }
                );
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
