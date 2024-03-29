<template>
    <div class="signup-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" v-model="username" placeholder="Username" required>
        </div>
        <div class="form-group">
          <input type="email" v-model="email" placeholder="E-mail" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
        </div>
        <div class="form-group checkbox-container">
          <input type="checkbox" id="terms" v-model="agreeToTerms">
          <label for="terms" class="checkmark"></label>
          <label for="terms">I agree to all the Terms and Privacy Policies</label>
        </div>
        <button type="submit" class="login-button">Create account</button>
      </form>
      <div class="alternative signup-link">
        Already have an account? <router-link to="/login">Login</router-link>
      </div>
      <button class="google-sign-in">Sign up with Google</button>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';

    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const agreeToTerms = ref(false);

    const onSubmit = () => {
    console.log({
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        agreeToTerms: agreeToTerms.value
    });
    };
</script>
  
<style scoped>

    .signup-form {
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%; 
    max-width: none; 
    box-sizing: border-box;max-width: 500px;
    box-sizing: border-box;
    }

    h2 {
    text-align: center;
    margin-bottom: 30px;
    }

    .form-group {
    margin-bottom: 20px;
    padding: 0 30px; 
    }

    .form-group input {
    width: calc(100% - 60px); 
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    }

    button {
    width: calc(100% - 60px);
    }

</style>

