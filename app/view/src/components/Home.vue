<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

import { likedPosts } from '@/store';

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

const posts = ref([
  { 
    id: 1, 
    name: 'Jane Kim',
    title: 'Looking for a gardener', 
    date: 'Needed for 22/04/2024, 16:00', 
    description: 'Hi, I am a mom of two and need someone to clean up the garden and plant some of the flowers I have bought. Swipe for pictures of my garden and how I want it to look like.' 
  },
  { 
    id: 2, 
    name: 'Hoexeng Park',
    title: 'Tutor Needed for High School Math', 
    date: 'Starting May 2024', 
    description: 'Seeking an experienced math tutor for my high schooler, focusing on algebra and geometry. Preferably twice a week after school hours. Looking for someone patient and engaging.' 
  }
  // Add more posts here as needed
]);

function likePost(post) {
  if (!likedPosts.value.some(likedPost => likedPost.id === post.id)) {
    likedPosts.value.push(post);
    console.log('Post liked:', post);
    console.log('All liked posts:', likedPosts.value);
  }
}
</script>

<template>
  <div class="page-background">
    <div class="navbar">
      <!-- Search Bar -->
      <div class="search-container">
        <i class="pi pi-search search-icon"></i>
        <input type="text" placeholder="Search for users or jobs...">
      </div>

      <!-- Hamburger Menu Icon -->
      <div class="hamburger-menu" @click="toggleMenu">
        <i class="pi pi-bars"></i>
      </div>

      <!-- Dropdown Menu -->
      <div class="dropdown-menu" v-if="isMenuVisible">
        <ul>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </div>
    </div>

    <ScrollPanel style="width: 100%; height: 80dvh" class="posts-background">
      <div class="post-upload-container">
        <div class="post-upload-card">
          <video class="user-video" autoplay loop muted>
            <source src="@/assets/test1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h3 class="user-name">{{ posts[0].name }}</h3>
          <div class="post-details-actions">
            <div class="post-content">
              <h2>{{ posts[0].title }}</h2>
              <p>{{ posts[0].date }}</p>
              <p>{{ posts[0].description }}</p>
            </div>
            <div class="post-actions">
              <button class="save-post" @click="likePost(posts[0])">
                <i class="pi pi-heart" style="margin-right: .5em;"></i> Save Post
              </button>
              <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
            </div>
          </div>
        </div>

        <div class="post-upload-card">
          <video class="user-video" autoplay loop muted>
            <source src="@/assets/test1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h3 class="user-name">{{ posts[1].name }}</h3>
          <div class="post-details-actions">
            <div class="post-content">
              <h2>{{ posts[1].title }}</h2>
              <p>{{ posts[1].date }}</p>
              <p>{{ posts[1].description }}</p>
            </div>
            <div class="post-actions">
              <button class="save-post" @click="likePost(posts[1])">
                <i class="pi pi-heart" style="margin-right: .5em;"></i> Save Post
              </button>
              <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
            </div>
          </div>
        </div>
        <!-- ... additional posts ... -->
      </div>
    </ScrollPanel>
  </div>
</template>



<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  position: relative; /* added this to fix the hamburger menu*/
}

.hamburger-menu {
  cursor: pointer;
  padding: 10px;
  order: 1;
  font-size: 30px;
}

.search-container {
  position: relative;
  width: 35%;
  order: 2;
}


.menu-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Show the menu when isMenuOpen is true */
.menu-content[isMenuOpen] {
  display: block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #ccc;
}

.dropdown-menu li:last-child a {
  border-bottom: none;
}

.dropdown-menu li a:hover {
  background-color: #f6f6f6;
}

.page-background {
  padding: 2rem;
  background-color: #ededed98;
  background-image: url('@/assets/Pastel_11.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.posts-background {
  background-color: rgba(255, 255, 255, 0.9); 
  width: 100%;
  padding: 20px;
  border-radius: 25px;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-container {
  position: relative;
  width: 35%;
  margin-bottom: 5px;
  padding-top: 1%;
  margin-left: auto;
  margin-right: auto;
}

.search-container input {
  width: 100%;
  padding: 7px 15px 7px 40px;
  font-size: 0.750rem;
  border: 2px solid #ccc;
  border-radius: 25px;
  outline: none;
}

.apply-post {
  background-color: #4CAF50;
  color: white;
}

.apply-post i {
  margin-right: 5px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-75%);
  color: #495057;
  z-index: 10;
  margin-top: 1%;
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
  margin: 20px;
  width: 100%;
  margin-top: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover; /* Ensures the video covers the area without stretching. */
}

.user-name {
  font-size: small;
  position: absolute;
  margin: 5px;
  color: black;
  padding: 0.5em;
  border-radius: 5px;
  z-index: 2; /* Make sure it's above the video layer */
  transform: translateY(-100%); /* Shift it up by its own height */
}

.user-video-container {
  position: relative;
  flex: 1; /* Adjust the flex value to match the desired width of the video */
}

.post-content h2 {
  font-size: 1.25rem;
  color: #333;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-post,
.apply-post {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-post {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Change the color as needed */
  color: #333; /* Change text color as needed */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-post:hover {
  background-color: #e0e0e0; /* Change hover color as needed */
}

.apply-post {
  background-color: #4CAF50;
  color: white;
}


.post-upload-container+.post-upload-container {
  margin-top: 30px;
}

.post-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.post-upload-card {
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  align-items: stretch; /* Ensure the children stretch to fill the card */
}

.user-video {
  height: auto;
  width: 50%; /* Half the width of the post-upload-card */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
}

.post-details-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px; /* Add padding to match the video side */
}
</style>