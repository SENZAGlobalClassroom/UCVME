<template>
    <div class="sidebar" :class="{ 'sidebar-visible': isSidebarVisible }">
        <!-- Your sidebar content -->
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px; /* Width of the sidebar */
    height: 100%; /* Full height */
    background: #fff; /* Background color */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3); /* Shadow for a nice effect */
    transition: transform 0.3s ease;
    transform: translateX(-100%); /* Hide sidebar off-screen */
  }
  
  /* You'll need a class added when the sidebar is visible */
  .sidebar-visible {
    transform: translateX(0); /* Move sidebar into view */
  }
  </style>