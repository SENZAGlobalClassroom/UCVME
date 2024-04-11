<script setup>
import Likes from '@/components/Likes.vue';

</script>

<template>
  <div class="gray-background">
      <TopBar></TopBar>
      <Likes />
      <Navbar></Navbar>
  </div>
</template>

<style>
.card-container {
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.808);
    align-items: center;
}

.button-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

.gray-background {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10dvw;
    padding-right: 10dvw;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_13.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}

@media (max-width: 767px) {
    .gray-background {
        padding-top: 0rem;
        padding-bottom: 0rem;
        padding-left: 0dvw;
        padding-right: 0dvw;
    }
}
</style>