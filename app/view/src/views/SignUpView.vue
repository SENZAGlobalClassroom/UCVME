<template>
  <div class="gray-background">
    <TopBarFirstTime />
    <Card class="card-container">
      <template #content>
        <SignUpForm @submit-form="handleSignUp" />
      </template>
    </Card>
    <Footer />
  </div>
</template>

<script setup>
import TopBarFirstTime from '@/components/topBarFirstTime.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import Footer from '@/components/Footer.vue';

const handleSignUp = (credentials) => {
  console.log('Sign-up credentials:', credentials);

  // Here you can send the credentials to the server
  // For now, we will just log them
};
</script>

<style scoped>
.card-container {
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.808);
    align-items: center;
    max-width: 40dvw;
    margin: auto;
}

.gray-background {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10dvw;
    padding-right: 10dvw;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_13.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}

@media (max-width: 767px) {
    .card-container {
    max-width: 80dvw;
    margin: auto;
}
}
</style>