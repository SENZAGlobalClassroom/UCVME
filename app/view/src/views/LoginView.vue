<template>
  <div class="login-view">
    <TopBarFirstTime />

    <div class="form-container">
      <LoginForm @submit-form="handleLogin" />
    </div>
    
    <Footer />
  </div>
</template>


<script setup>
  import TopBarFirstTime from '@/components/topBarFirstTime.vue';
  import LoginForm from '@/components/LoginForm.vue';
  import Footer from '@/components/Footer.vue';

  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);

    // Send the credentials to the server
    // For now, just log the credentials to the console
  };
</script>

<style scoped>
  .login-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    padding-top: 0;

    background-image: url('@/assets/Pastel_12.png');
    background-position: left center, right center;
    background-repeat: no-repeat, no-repeat;
    background-size: cover;
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  }

  .logo {
    max-height: 60px; 
  }

  .globe-icon {
    font-size: 2rem; 
  }

  footer {
    position: fixed;
    bottom: 2rem;
  }

  @media (max-width: 600px) {
    .login-view {
      padding: 10px;
    }

    .form-container {
      padding: 1rem;
    }
  }
</style>
