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
          <div>
            <input type="checkbox" id="terms" v-model="agreeToTerms">
            <label for="terms" class="checkmark"></label>
          </div>
          <div>
            <label for="terms"><p>I agree to all the Terms and Privacy Policies</p></label>
          </div>
        </div>
        <button type="submit" class="login-button">Create account</button>
      </form>
      <br>
      <button class="google-sign-in">Sign up with Google</button>
      <br>
      <div class="alternative signup-link">
        <div class="centered-text">
          <p>Already have an account?</p> <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    };
  },
  methods: {
    onSubmit() {
      if (!this.agreeToTerms) {
        alert('You must agree to the Terms and Privacy policies');
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // Send POST request to your server
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password
        })
      })
      .then(response => response.json())
      .then(data => {
        // Handle response from the server
        console.log(data); // You can do something based on the response, like redirecting to another page or showing a message
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
    }
  }
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
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    .form-group.checkbox-container p {
      margin: 0;
      font-size: 12px;
      text-align: center;
    }

   .centered-text {
      text-align: center;
    }

    .signup-form button {
      width: calc(100% - 60px);
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 10px;
    }

    .google-sign-in {
      background: #435efa;
      border-color: #435efa;
      color: #fff;
    }

</style>

