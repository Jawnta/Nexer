<template>
    <div
        class="alert-container" 
        :class="
            payloadStore.selectedContainer.hasError
                ? 'animation-in'
                : 'animation-out'
        "
    >
        <p>Välj en container för att fortsätta!</p>
    </div>
    <div>
        <button
            class="order-button"
            @click="
                () => {
                    handleClick();
                    // sendAdminEmail();
                }
            "
        >
            Beställ
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emailjs from "emailjs-com";
import { usePayloadStore } from "@/store/orderStore";

export default defineComponent({
    name: "OrderButton",
    mounted() {
        emailjs.init("aJoppP8gvteb65_ur");
    },
    data() {
        return {
            payloadStore: usePayloadStore(),
        };
    },
    methods: {
        handleClick() {
            const payloadStore = usePayloadStore();
            if (!payloadStore.validateFields()) {
                return false;
            }

            this.$router.push("/OrderConfirmation");
        },
        // sendEmail() {
        //     emailjs
        //         .send(
        //             "service_ne3xu3v",
        //             "template_chpkccp",
        //             {
        //                 to_name: "Recipient Name",
        //                 from_name: "Your Name",
        //                 message:
        //                     "This is a test email sent from Vue.js using EmailJS and Gmailaaaaaaaaaaaa.",
        //                 to_email: "jawntalol@gmail.com",
        //             },
        //             "aJoppP8gvteb65_ur"
        //         )
        //         .then(
        //             function (response) {
        //                 console.log("SUCCESS!", response.status, response.text);
        //             },
        //             function (error) {
        //                 console.log("FAILED...", error);
        //             }
        //         );
        // },
        sendAdminEmail() {
            const payloadStore = usePayloadStore();
            emailjs
                .send(
                    "service_ne3xu3v",
                    "template_1e44wa8",
                    {
                        deliveryDate: payloadStore.deliveryDate.value,
                        pickupDate: payloadStore.pickupDate.value,
                        firstname: payloadStore.firstName.value,
                        lastname: payloadStore.lastName.value,
                        socialSecurity: payloadStore.socialSecurity.value,
                        phoneNumber: payloadStore.phoneNumber.value,
                        email: payloadStore.email.value,
                        address: payloadStore.address.value,
                        zipcode: payloadStore.zipCode.value,
                        city: payloadStore.city.value,
                        title:
                            payloadStore.selectedContainer.value?.title || "",
                        length:
                            payloadStore.selectedContainer.value?.length || 0,
                        width:
                            payloadStore.selectedContainer.value?.width || "",
                        height:
                            payloadStore.selectedContainer.value?.height || "",

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
    font-weight: medium;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2c84d0;
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    cursor: pointer;
    font-size: 17px;
    min-width: 250px;
    padding: 15px;
    margin-bottom: 5px;
    margin-top: 40px;
    border: none;
    color: white;
}

.alert-container {
    position: fixed;
    background-color: #ff5d5d;
    border-radius: 15px;
    padding: 10px;
    z-index: 999;
    color: white;
    transform: translateY(-120px);
    transition: translateY 0.2s ease-in-out;
}

.animation-in {
    animation: slide-in 0.1s ease-out forwards;
}

.animation-out {
    animation: slide-out 0.1s ease-out forwards;
}

@keyframes slide-in {
    to {
        transform: translateY(0px);
    }
}

@keyframes slide-out {
    to {
        transform: translateY(-120px);
    }
}

</style>
