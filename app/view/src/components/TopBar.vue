<template>
  <div class="navbar">
    <!-- Hamburger Menu Icon -->
    <div class="hamburger-menu" @click="toggleMenu">
      <i class="pi pi-bars"></i>
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <i class="pi pi-search search-icon"></i>
      <input type="text" placeholder="Search for users or jobs...">
    </div>

    <!-- Sidebar Menu -->
    <Sidebar v-model:visible="visible" position="left">
      <div class="sidebar-logo">
        <img @click="goToHomePage" style="  max-width: 10rem; height: auto; cursor: pointer;"
          src="/src/assets/UCVME_logo-removebg-preview.png" alt="UCVME Logo" class="logo-img" />
      </div>

      <ul class="sidebar-links">
        <li><a href="javascript:void(0)" @click="goToSettingsPage">Settings Page</a></li>
        <li><a href="javascript:void(0)" @click="goToHelpPage">Help Page</a></li>
      </ul>

      <div class="user-panel">
        <Avatar image="/src/assets/user.jpg" shape="circle" />
        {{ username }}
        <button class="sign-out-btn" @click="signOut">
          <i class="pi pi-sign-out"></i>
        </button>
      </div>

    </Sidebar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const visible = ref(false);
const router = useRouter();

const toggleMenu = () => {
  visible.value = !visible.value;
};

const goToSettingsPage = () => {
  router.push({ name: 'SettingView' });
  visible.value = false;
};

const goToHelpPage = () => {
  router.push({ name: 'HelpView' });
  visible.value = false;
};

const goToHomePage = () => {
  router.push({ name: 'Home' });
  visible.value = false;
};

const signOut = () => {
  // sign out function for now just go back to login
  router.push({ name: 'Login' });
}


// test data should come from db
const username = ref('Stelle Robbins');

</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.hamburger-menu {
  cursor: pointer;
  font-size: 30px;
}

.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 500px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.search-container input {
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
}

.sidebar-logo {
  text-align: center;
  margin-bottom: 20px;
}


.sidebar-links li {
  list-style-type: none;
  margin: 5px 0;
}

.sidebar-links li a {
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s;
}

.sidebar-links li a:hover {
  background-color: #f6f6f6;
}

.user-panel {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem;
}

.sign-out-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.sign-out-btn .pi {
  font-size: 1.5em;
}
</style>