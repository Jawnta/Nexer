<template>
    <transition name="slide">
        <div
            v-show="showInfo"
            class="info-box"
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
                    <p>{{ card.title }}</p>
                    <button @click="showCardInfo(card)">Show Info</button>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script lang="ts">
import Swiper, { Pagination } from "swiper";
import "swiper/css/bundle";

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
                    title: "Container Card #1",
                    info: "This is some information for card #1",
                },
                {
                    title: "Container Card #2",
                    info: "This is some information for card #2",
                },
                {
                    title: "Container Card #3",
                    info: "This is some information for card #3",
                },
            ],
        };
    },
    methods: {
        showCardInfo(card: Card) {
            this.selectedCard = card;
            this.showInfo = true;
        },
    },
};
</script>

<style scoped>
.swiper-container {
    display: flex;
    width: 264px;
    margin-bottom: 40px;
    position: relative;
    Height: 460px;
    border-radius: 24px;
}

.swiper-slide {
    display: flex;
    width: 100%;
    height: 460px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 24px;
}

.content {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px;
    height: 10px;
    word-break: break-word;
}

.swiper-pagination {
    --swiper-pagination-bottom: -20px;
}

.info-box {
    position: absolute;
    margin: 20px;
    width: 95%;
    height: 600px;
    background: white;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
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
