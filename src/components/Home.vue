<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
         <!-- Search Bar -->
        <div class="search-container">
            <i class="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search for users or jobs...">
        </div>

        <img alt="UCVME logo" class="logo" src="@/assets/UCVME_logo-removebg-preview.png" width="300" height="125" />

        <div class="wrapper">
            <p>This is /home, here are shortcut dev links, we need to implement the routing logic after all the pages are done:
            </p>
            <ul>
                <li>when user opens page for the first time -> Login Page</li>
                <li>When user is already logged in -> Home page</li>
                <li>After sign up user is redirected to -> CV process page</li>
            </ul>
            <nav>
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
            </nav>
        </div>
    </header>
</template>

<style scoped>
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

.search-icon {
  position: absolute;
  left: 16px;   
  top: 50%;
  transform: translateY(-50%);
  color: #495057;
  z-index: 10;
  margin-top: 1%;
}
</style>