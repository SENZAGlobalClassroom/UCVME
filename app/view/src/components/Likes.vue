<script setup>
import { likedPosts } from '@/store'; // Importing the reactive likedPosts reference
console.log(likedPosts.value);
</script>

<template>
    <h1>My Likes</h1>
    <div class="posts-background">
      <div class="post-upload-container">
        <!-- Loop over likedPosts and create a card for each -->
        <div class="post-upload-card" v-for="post in likedPosts" :key="post.id">
          <!-- Video element -->
          <!-- <video class="user-video" controls>
            <source :src="post.videoSource" type="video/mp4">
            Your browser does not support the video tag.
          </video> -->
          <div class="post-details-actions">
            <h3 class="user-name">{{ post.name }}</h3>
            <div class="post-content">
              <h2>{{ post.title }}</h2>
              <p>{{ post.date }}</p>
              <p>{{ post.description }}</p>
            </div>
            <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

.posts-background {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 20px;
  border-radius: 25px;
}

h1 {
  font-size: 3em; /* Increase font size */
  font-weight: bold; /* Make it bold */
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5); /* Add shadow */
  margin-bottom: 0.5em; /* Add more space below the title */
  text-align: center; /* Center the title text */
  width: 100%; /* Make sure it spans the width to center properly */
  color: #4CAF50; /* Optional: Change color to match your design */
}
.post-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 1rem;
}
.post-upload-card {
  display: flex;
  align-items: stretch;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
}
.user-name {
  font-size: medium;
  color: black;
  padding-bottom: 1em;
  border-radius: 5px;
}
.user-video {
  height: auto;
  width: 50%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
}
.post-details-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
.apply-post {
  margin-top: 2em; /* Space between apply post and text */
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>