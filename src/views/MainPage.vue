<script setup lang="ts">
import TopLogo from "@/components/TopLogo.vue";
import TopHeader from "@/components/TopHeader.vue";
import Containers from "@/components/Containers.vue";
import Calender from "@/components/Calender.vue";
import Maps from "@/components/Maps.vue";
import UserInfo from "@/components/UserInfo.vue";
</script>

<template>
    <div class="main-wrapper">
        <TopLogo />
        <TopHeader />
        <Containers />
        <Calender />
        <Maps />
        <UserInfo />
    </div>
</template>

<style scoped>
.main-wrapper {
    padding: 25px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
</style>
