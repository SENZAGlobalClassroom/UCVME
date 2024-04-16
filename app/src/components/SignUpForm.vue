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

      <div class="checkbox-group" style="padding: 0.5rem;">
        <Checkbox v-model="agreeToTerms" inputId="terms" name="terms" value="terms" />
        <label for="rememberMe">&nbsp I agree to all the Terms and Privacy Policies</label>
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
      fetch('http://localhost:8080/signup', {
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
.form-group input,
.login-button,
.google-sign-in {
  width: calc(100% - 20px);
  max-width: 300px;
  margin: 10px auto;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
}

.actions {
  align-items: center;
  padding: 0 10%;
  flex-direction: row;
}

.checkbox-group {
  text-align: center;
}

.forgot-password {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #3498db;
  text-decoration: none;
  margin: 10px 0;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button,
.google-sign-in {
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  display: block;
  background: #ffffff;
  border: 1px solid rgb(132, 87, 187);
  color: #2e2e2e;
  padding: 0.8rem;
  border-radius: 25px;
  cursor: pointer;
}

.signup-link,
.separator {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.form-separator {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
}

.or-text {
  color: #aaa;
  white-space: nowrap;
}

@media (max-width: 766px) {

  .form-group input,
  .login-button,
  .google-sign-in {
    width: 70dvw;
    max-width: none;
  }

  .form-group,
  .form-separator,
  .signup-link,
  .forgot-password {
    padding: 0 20px;
  }


}
</style>
