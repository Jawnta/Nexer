<script setup lang="ts"></script>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="content">
                    <p>Container Card #1</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="content">
                    <p>Container Card #2</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="content">
                    <p>Container Card #3</p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script lang="ts">
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
        });
    },
};
</script>

<style scoped>
.swiper-container {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
}

.swiper-slide {
    display: flex;
    width: 100%;
    border: 1px solid red;
    height: 460px;
    box-shadow: 48px 48px 48px rgba(49, 49, 49, 0.1);
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
    z-index: 10;
}
</style>
