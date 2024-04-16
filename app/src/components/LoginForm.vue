<template>
  <h2>Sign In</h2>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input type="text" id="email" v-model="email" placeholder="Email" required>
    </div>
    <div class="form-group">
      <input type="password" id="password" v-model="password" placeholder="Password" required>
    </div>
    <a href="#" class="forgot-password">Forgot Password?</a>

    <div style="padding: 0.5rem;">
      <div class="checkbox-group" style="padding: 0.5rem;">
        <Checkbox v-model="rememberMe" inputId="rememberMe" name="remember" value="RememberMe" />
        <label for="rememberMe">&nbsp Remember me</label>
      </div>
    </div>
    <button type="submit" class="login-button">Login</button>

    <div class="form-separator">
      <span class="line"></span>
      <span class="or-text">or</span>
      <span class="line"></span>
    </div>
    <button type="button" class="google-sign-in">Sign in with Google</button>
    <div class="signup-link">Don’t have an account? <a href="/signup">Sign up</a></div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    onSubmit() {
      // Send POST request to your server
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        // Check if login was successful based on the response data
        if (data.status === 'success') {
          console.log(data); 
          // If login is successful, redirect to HomeView
          this.$router.push('/'); // Replace 'HomeView' with your route name if it's different
        } else {
          // If data.status is not 'success', handle the unsuccessful login
          console.error('Login failed:', data.message);
          // Here, you can set an error message in your data to display to the user
          // this.errorMessage = data.message; // Assuming you have an errorMessage data property
        }
      })
      .catch(error => {  });
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
