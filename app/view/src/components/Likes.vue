<script setup>
import { likedPosts } from '@/store'; // Importing the reactive likedPosts reference
console.log(likedPosts.value); // Add this line
</script>


<template>
    <div>
      <h1>My Likes</h1>
      <div v-for="post in likedPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </template>


<style scoped>
  /* Add the styles for your likes page here */
</style>