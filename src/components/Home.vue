<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
  <div class = "page-background">
      <div class="home" :style="{ backgroundImage: 'url(' + randomImageUrl + ')' }">
        <header>
          <!-- Search Bar -->
          <div class="search-container">
            <i class="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search for users or jobs...">
          </div>

          <!-- Hamburger Menu Icon -->
          <div class="hamburger-menu" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </div>

           <!-- Dropdown Menu -->
          <div class="dropdown-menu" v-if="isMenuVisible">
            <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          </div>
    
          <!-- <img alt="UCVME logo" class="logo" src="@/assets/UCVME_logo-removebg-preview.png" width="300" height="125" />
    -->
          <div class="wrapper">
            <!-- <p>This is /home, here are shortcut dev links, we need to implement the routing logic after all the pages are done:</p>
            <ul>
              <li>when user opens page for the first time -> Login Page</li>
              <li>When user is already logged in -> Home page</li>
              <li>After sign up user is redirected to -> CV process page</li>
            </ul> -->
            <!-- <nav>
              <ul>
                <li>
                  <RouterLink to="/cvProcess">CV Process</RouterLink>
                </li>
                <li>
                  <RouterLink to="/login">Login</RouterLink>
                </li>
                <li>
                  <RouterLink to="/signup">Sign Up</RouterLink>
                </li>
              </ul>
            </nav> -->
          </div>
        </header>
      </div>
      <body>
        <div class="posts-background">
          <div class="post-upload-container">
            <div class="post-upload-card">
              <div class="user-info">
                <img class="user-avatar" src="@/assets/Pastel_1.png" alt="User Avatar" />
                <h3 class="user-name">Jane Kim</h3>
              </div>
              <div class="post-content">
                <h2>Looking for a gardener</h2>
                <p>Needed for 22/04/2024, 16:00</p>
                <p>Hi, I am a mom of two and need someone to clean up the garden and plant some of the flowers I have bought. Swipe for pictures of my garden and how I want it to look like.</p>
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
                  <p>Looking for an experienced math tutor for my son who is preparing for his final exams. He needs help in calculus and algebra. Sessions needed for the upcoming three weekends.</p>
                </div>
                <div class="post-actions">
                  <button class="save-post"><i class="far fa-heart"></i> Save Post</button>
                  <button class="apply-post"><i class="fas fa-paper-plane"></i> Apply</button>
                </div>
              </div>
          </div>
        </div>
      </body>
    </div>
</template>
  
<style scoped>

.hamburger-menu {
  cursor: pointer;
  padding: 10px;
  order: 1; /* Positions the menu icon first within the header */
  font-size: 30px;
}

.search-container {
  position: relative;
  width: 35%;
  order: 2; /* Adjusts the search container position */
}


.menu-content {
  display: none; /* Hide by default */
  position: absolute;
  top: 100%; /* Position it below the header */
  left: 0;
  background-color: white;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

/* Show the menu when isMenuOpen is true */
.menu-content[isMenuOpen] {
  display: block;
}

.menu-icon {
  font-size: 24px; /* Adjust icon size as needed */
  cursor: pointer;
  /* Add other styling as needed, such as padding, margins, etc. */
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Adjust as necessary to fit under your header */
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px; /* Adjust as necessary */
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1001; /* Should be above other content */
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
  position: relative;
  background-image: url('https://cdn.discordapp.com/attachments/921069550240411652/1218844949794258964/image.png?ex=660924d1&is=65f6afd1&hm=77e2fdee53c9796284a0467b3fa4ee598d2c1a14a0ea66af0f2d03b6094b4bc5&');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* This makes sure it covers the full viewport height */
  overflow: hidden;
}

.posts-background {
    background-color: rgba(250, 250, 250, 0.8); /* Light grey background with a bit of transparency */
    width: 100%;
    padding: 2rem;
  }

header {
  /* Your header styles */
  display: flex; /* Use flexbox for positioning */
  align-items: center; /* Align items vertically */
  padding: 0 20px; /* Add padding on the left and right */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000; /* Ensure header is above other content */
}

main {
  padding-top: 70px; /* Adjust this value so that the main content starts below the header */
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
  max-width: 600px; /* Set a max-width for the card */
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
  width: 50px; /* Set the size of the avatar */
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

.save-post, .apply-post {
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
    background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
    padding: 20px;
  }

  .post-upload-container + .post-upload-container {
    margin-top: 30px; /* Space between posts */
  }

  .post-upload-container {
    display: flex;
    flex-direction: column; /* This will stack the cards vertically */
    align-items: center; /* Center the cards horizontally */
    padding-bottom: 20px; /* Add space at the bottom of the container */
  }

  .post-upload-card {
    background-color: white;
    /* ... other styles ... */
    margin-top: 20px; /* Adds space between cards */
    width: 90%; /* Adjust the width as desired */
    max-width: 600px; /* Keeps the card width from getting too large */
  }
</style>