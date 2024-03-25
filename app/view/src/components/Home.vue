<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
  <div class="page-background">
    <div class="navbar">
      <!-- Search Bar -->
      <div class="search-container">
        <i class="pi pi-search search-icon" style="color: black; font-size: 1rem"></i>
        <input type="text" placeholder="Search for users or jobs...">
      </div>

      <!-- Hamburger Menu Icon -->
      <div class="hamburger-menu" @click="toggleMenu">
        <i class="pi pi-bars" style="color: black; font-size: 1.5rem"></i>
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
          <div class="user-info">
            <img class="user-avatar" src="@/assets/Pastel_1.png" alt="User Avatar" />
            <h3 class="user-name">Jane Kim</h3>
          </div>
          <div class="post-content">
            <h2>Looking for a gardener</h2>
            <p>Needed for 22/04/2024, 16:00</p>
            <p>Hi, I am a mom of two and need someone to clean up the garden and plant some of the flowers I have
              bought. Swipe for pictures of my garden and how I want it to look like.</p>
            <!-- Swipe for pictures if necessary -->
          </div>
          <div class="post-actions">
            <button class="save-post"><i class="far fa-heart"></i> Save Post</button>
            <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
          </div>
        </div>
        <!-- Second post -->
        <div class="post-upload-card">
          <div class="user-info">
            <img class="user-avatar" src="@/assets/Pastel_2.png" alt="User Avatar" />
            <h3 class="user-name">John Doe</h3>
          </div>
          <div class="post-content">
            <h2>Need a Math Tutor</h2>
            <p>Urgent requirement for my son's exam preparation</p>
            <p>Looking for an experienced math tutor for my son who is preparing for his final exams. He needs help in
              calculus and algebra. Sessions needed for the upcoming three weekends.</p>
          </div>
          <div class="post-actions">
            <button class="save-post"><i class="far fa-heart"></i> Save Post</button>
            <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
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
  background-color: rgba(250, 250, 250, 0.578);
  width: 100%;
  padding: 3rem;
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
  transform: translateY(-50%);
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
}

.user-name {
  font-size: 1.5rem;
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
  background-color: #f0f0f0;
}

.apply-post {
  background-color: #4CAF50;
  color: white;
}

.posts-background {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
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
  background-color: white;
  margin-top: 20px;
  width: 90%;
  max-width: 600px;
}
</style>