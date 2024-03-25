<script setup>
import { RouterLink } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>

<div id="app">
    <Navbar />
    <RouterView />
</div>

</template>

<style>
* {
    margin: 0%;
};
</style>
