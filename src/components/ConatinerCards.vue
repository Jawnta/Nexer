<script setup lang="ts"></script>
<template>
    <transition name="slide">
        <div
            v-show="showInfo"
            class="info-popup"
            :class="showInfo ? 'animation-in' : 'animation-out'"
        >
            <p>Längd: {{ selectedCard.length }}</p>
            <p>Bredd: {{ selectedCard.width }}</p>
            <p>Höjd: {{ selectedCard.height }}</p>
            <p>{{ selectedCard.shortContainerInfo }}</p>
            <h3>Pris inklusive moms</h3>
            <p>Avgift per dag: {{ selectedCard.dailyFee }}</p>
            <p>Utsättningsavgift: {{ selectedCard.placementFee }}</p>
            <p>Tömningsavgift: {{ selectedCard.emptyingFee }}</p>
            <p>+ rörlig del per ton (se pris nedan).</p>
            <h3>Pris rörlig del inklusive moms</h3>
            <p>Brännbart avfall: {{ selectedCard.combustibleWaste }}</p>
            <p>Osorterat avfall: {{ selectedCard.unsortedWaste }}</p>
            <p>Trädgårdsavfall: {{ selectedCard.gardenWaste }}</p>
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
import type { ContainerCard } from "@/interfaces";

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
            selectedCard: {} as ContainerCard,
            cards: [
                {
                    logo: container8,
                    title: "8 Kubikmeter",
                    length: "3130 mm",
                    width: "2074 mm",
                    height: "1857 mm",
                    shortContainerInfo:
                        "Detta är en täckt container som är låsbar.",
                    dailyFee: "33 kronor",
                    placementFee: "525 kronor",
                    emptyingFee: "800 kronor",
                    combustibleWaste: "1731 kronor per ton",
                    unsortedWaste: "2250 kronor per ton",
                    gardenWaste: "363 kronor per ton",
                },
                {
                    logo: container10,
                    title: "10 Kubikmeter",
                    length: "3300 mm",
                    width: "1900 mm",
                    height: "1800 mm",
                    shortContainerInfo:
                        "En öppen container där ena kortsidan är lägre för att det ska vara lättare att nå in.",
                    dailyFee: "33 kronor",
                    placementFee: "525 kronor",
                    emptyingFee: "800 kronor",
                    combustibleWaste: "1731 kronor per ton",
                    unsortedWaste: "2250 kronor per ton",
                    gardenWaste: "363 kronor per ton",
                },
                {
                    logo: container20,
                    title: "20 Kubikmeter",
                    length: "6000 mm",
                    width: "2550 mm",
                    height: "1800 mm",
                    shortContainerInfo:
                        "Denna container är öppen upptill och har en öppningsbar kortsida.",
                    dailyFee: "53 kronor",
                    placementFee: "524 kronor",
                    emptyingFee: "969 kronor",
                    combustibleWaste: "1731 kronor per ton",
                    unsortedWaste: "2250 kronor per ton",
                    gardenWaste: "363 kronor per ton",
                },
            ],
        };
    },
    methods: {
        showCardInfo(card: ContainerCard) {
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
    /* height: 460px; */
    border-radius: 24px;
}

.swiper-slide {
    display: flex;
    width: 100%;
    /* height: 460px; */
    background-color: white;
    box-shadow: #00000020 10px 10px 40px;
    border-radius: 24px;
}

.content {
    display: grid;
    justify-items: center;
    width: 100%;
    margin: 50px 20px 20px;
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
    padding-top: 50px;
    padding-bottom: 50px;
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
