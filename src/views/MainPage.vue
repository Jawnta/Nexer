<script setup lang="ts">
import TopLogo from "@/components/TopLogo.vue";
import TopHeader from "@/components/TopHeader.vue";
</script>
<template>
  <div class="main-wrapper">
    <TopLogo />
    <TopHeader />
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 10px;
  height: auto;
}
</style>
