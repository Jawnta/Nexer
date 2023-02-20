<script setup lang="ts"></script>
<template>
    <transition name="slide">
        <div
            v-show="showInfo"
            class="info-popup"
            :class="showInfo ? 'animation-in' : 'animation-out'"
        >
            <p>{{ selectedCard.info }}</p>
            <button @click="showInfo = false">Close</button>
        </div>
    </transition>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div
                v-for="(card, index) in cards"
                :key="index"
                class="swiper-slide"
            >
                <div class="content">
                    <img
                        :src="card.logo"
                        style="width: inherit"
                        alt="container-logo"
                    />
                    <h2>{{ card.title }}</h2>
                    <button class="get-button">+</button>
                    <button class="info-button" @click="showCardInfo(card)">
                        Pris & info
                    </button>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script lang="ts">
import { Swiper, Pagination } from "swiper";
import "swiper/css/bundle";
import container8 from "../assets/img/container_8.png";
import container10 from "../assets/img/container_10.png";
import container20 from "../assets/img/container_20.png";

interface Card {
    title: string;
    info: string;
}

export default {
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
            modules: [Pagination],
            pagination: {
                el: ".swiper-pagination",
            },
        });
    },
    data() {
        return {
            showInfo: false,
            selectedCard: {} as Card,
            cards: [
                {
                    logo: container8,
                    title: "8 Kubikmeter",
                    info: "This is some information for card #1",
                },
                {
                    logo: container10,
                    title: "10 Kubikmeter",
                    info: "This is some information for card #2",
                },
                {
                    logo: container20,
                    title: "20 Kubikmeter",
                    info: "This is some information for card #3",
                },
            ],
        };
    },
    methods: {
        showCardInfo(
            card:
                | { logo: string; title: string; info: string }
                | { title: string; info: string }
        ) {
            this.selectedCard = card;
            this.showInfo = true;
        },
    },
};
</script>

<style scoped>
.swiper-container {
    display: flex;
    width: 90%;
    margin-bottom: 40px;
    position: relative;
    height: 460px;
    border-radius: 24px;
}

.swiper-slide {
    display: flex;
    width: 100%;
    height: 460px;
    background-color: white;
    box-shadow: #00000020 10px 10px 40px;
    border-radius: 24px;
}

.content {
    display: grid;
    justify-items: center;
    width: 100%;
    margin: 50px 20px 20px;
    height: 10px;
    word-break: break-word;
}

.get-button {
    cursor: pointer;
    font-size: 1.5em;
    padding: 15px;
    width: 60%;
    margin-bottom: 30px;
    border: none;
    border-radius: 40px;
    box-shadow: #00000028 4px 4px 20px;
    background-color: #2c84d0;
    color: white;
}

.info-button,
.info-popup button {
    cursor: pointer;
    padding: 10px;
    width: 80%;
    border: none;
    border-radius: 40px;
    background-color: #c0e0ff;
    color: #2985e1;
}

.swiper-pagination {
    --swiper-pagination-bottom: -30px;
}

.info-popup {
    position: fixed;
    text-align: center;
    margin: 20px;
    width: 90vw;
    height: 80vh;
    background: white;
    box-shadow: #00000028 4px 4px 20px;
    border-radius: 24px;
    z-index: 9999;
}

.animation-in {
    animation: slide-in 0.1s ease-out forwards;
}

.animation-out {
    animation: slide-out 0.1s ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
</style>
