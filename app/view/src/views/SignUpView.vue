<template>
  <div class="sign-up-view">
    <TopBarFirstTime />

    <div class="form-container">
      <SignUpForm @submit="handleSignUp" />
    </div>
    <Footer />

  </div>
</template>

<script setup>
import TopBarFirstTime from '@/components/topBarFirstTime.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import Footer from '@/components/Footer.vue';

const handleSignUp = (credentials) => {
  console.log('Sign-up credentials:', credentials);
};
</script>

<style scoped>
.sign-up-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 0; 
  background-image: url('@/assets/Pastel_11.png'), url('@/assets/Pastel_12.png');
  background-position: left center, right center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover;
}

.form-container {
  width: 100%;
  max-width: 500px; 
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}


.top-bar {
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

@media (max-width: 600px) {
  .sign-up-view {
    padding: 10px;
  }

  .form-container {
    padding: 1rem;
  }
}
</style>