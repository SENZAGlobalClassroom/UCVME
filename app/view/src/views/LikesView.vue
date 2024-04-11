<script setup>
import Likes from '@/components/Likes.vue';

</script>

<template>
    <div class="gray-background">
        <TopBar></TopBar>
        <Card class="card-container">
            <template #header>
                <h3>Liked Posts</h3>
            </template>
            <template #content>
            <Likes></Likes>
            </template>
        </Card>
        <Navbar></Navbar>
    </div>
</template>

<style>
.card-container {
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.808);
    align-items: center;
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