import type { UserDetails, Payload, ContainerCard } from "@/interfaces";
import { defineStore } from "pinia";
export const usePayloadStore = defineStore({
    id: "payload",
    state: (): Payload => ({
        deliveryDate: "",
        pickupDate: "",
        coordinates: "",
        firstName: "",
        lastName: "",
        socialSecurity: "",
        phoneNumber: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        message: "",
        selectedContainer: undefined,
    }),
    actions: {
        assignDates(data: { deliveryDate: string; pickupDate: string }) {
            this.deliveryDate = data.deliveryDate;
            this.pickupDate = data.pickupDate;
        },
        assignUserDetails(userData: UserDetails) {
            for (const key in userData) {
                if (key in this) {
                    this[key] = userData[key];
                }
            }
        },
        assignMessage(message: string) {
            this.message = message;
        },
        assignContainer(container: ContainerCard) {
            this.selectedContainer = container;
        },
    },
});
