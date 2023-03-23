import type { UserDetails, Payload, ContainerCard } from "@/interfaces";
import { defineStore } from "pinia";
export const usePayloadStore = defineStore({
    id: "payload",
    state: (): Payload => ({
        deliveryDate: { value: "", hasError: false },
        pickupDate: { value: "", hasError: false },
        coordinates: { value: "" },
        firstName: { value: "", hasError: false },
        lastName: { value: "", hasError: false },
        socialSecurity: { value: "" },
        phoneNumber: { value: "" },
        email: { value: "", hasError: false },
        address: { value: "", hasError: false },
        zipCode: { value: "", hasError: false },
        city: { value: "", hasError: false },
        message: { value: "" },
        selectedContainer: { value: undefined, hasError: false },
    }),
    actions: {
        assignDates(data: { deliveryDate: string; pickupDate: string }) {
            this.deliveryDate.value = data.deliveryDate;
            this.pickupDate.value = data.pickupDate;
        },
        assignUserDetails(userData: UserDetails) {
            for (const key in userData) {
                if (key in this) {
                    this[key] = userData[key];
                }
            }
        },
        assignMessage(message: string) {
            this.message.value = message;
        },
        assignContainer(container: ContainerCard) {
            this.selectedContainer.value = container;
        },
        validateFields() {
            for (const key of Object.keys(this.$state)) {
                if (this.$state[key].hasOwnProperty("hasError")) {
                    this[key].hasError = !this[key].value;
                }
            }
        },
        allFieldsValid() {
            return Object.values(this.$state).every(
                (field: {
                    hasOwnProperty: (arg0: string) => any;
                    hasError: any;
                }) => !field.hasOwnProperty("hasError") || !field.hasError
            );
        },
        clearErrorOnFocus(item: string) {
            this.$state[item].hasError = false;
        },
    },
});
