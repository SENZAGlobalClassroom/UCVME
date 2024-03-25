<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-0" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1030;">
      <div class="d-flex justify-content-between w-100" style="padding-left: 1rem; padding-right: 1rem;">
        <RouterLink to="/" class="nav-item nav-link active">
          <img src="@/assets/icons/home.png" alt="Home" class="nav-icon">
        </RouterLink>
        <RouterLink to="/about" class="nav-item nav-link">
          <img src="@/assets/icons/wallet.png" alt="Wallet" class="nav-icon">
        </RouterLink>
        <!-- other nav items -->
        <RouterLink to="/contact" class="nav-item nav-link">
          <img src="@/assets/icons/add.png" alt="Plus" class="nav-icon">
        </RouterLink>
        <!-- Placeholder for the last nav item to ensure visibility -->
        <RouterLink to="/likes" class="nav-item nav-link">
          <img src="@/assets/icons/heart.png" alt="Likes" class="nav-icon">
        </RouterLink>
        <RouterLink to="/profile" class="nav-item nav-link">
          <img src="@/assets/icons/profile.png" alt="Profile" class="nav-icon">
        </RouterLink>
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  
  export default {
    components: {
      RouterLink
    }
  }
  </script>
  
  <style scoped>
  .nav-icon {
    /* Example style */
    width: 35px;
  }

  .d-flex {
  display: flex;
  justify-content: space-between; /* This will spread the items out */
}

  .navbar {
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 0.5rem 1rem;
  background-color: white;
  border-top: 1px solid #eaeaea;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}


/* Existing styles for .d-flex, .nav-item, .nav-link, and .nav-icon */

/* Additional styles for a slight shadow as per the screenshot, if needed */
.navbar {
  background-color: white; /* Solid white background */
  border-top: 1px solid #eaeaea; /* Thin line of a slightly different color for contrast */
  /* Rest of your styles */
}

  </style>
  