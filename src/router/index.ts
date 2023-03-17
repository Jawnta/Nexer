import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/MainPage.vue";
import OrderConfirmation from "@/views/OrderConfirmation.vue";
import ArTest from "@/views/ArTest.vue";
import ArMain from "@/views/ArMain.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/orderConfirmation",
            name: "OrderConfirmation",
            component: OrderConfirmation,
        },
        {
            path: "/ArTest",
            name: "ArTest",
            component: ArTest,
        },
        {
            path: "/ArMain",
            name: "ArMain",
            component: ArMain,
        },
    ],
});

export default router;
