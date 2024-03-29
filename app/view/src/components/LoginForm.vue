<template>
  <div class="login-form">
    <h2>Sign In</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" id="username" v-model="username" placeholder="Username" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required>
        <div class="actions">
          <label class="checkbox-container">
            Remember me
            <input type="checkbox" v-model="rememberMe">
            <span class="checkmark"></span>
          </label>
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
      </div>
      <button type="submit" class="login-button">Login</button>
      <div class="signup-link">Don’t have an account? <a href="/signup">Sign up</a></div>
      <div class="separator">or</div>
      <button type="button" class="google-sign-in">Sign in with Google</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      onSubmit() {
        console.log('Form submitted:', this.username, this.password, this.rememberMe);
      }
    }
  };
</script>

  <style scoped>
  .login-form {
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 4px;
  }

  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: #3498db;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .login-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    width: 100%;
  }

  .login-button:hover {
    background-color: #2980b9;
  }

  .google-sign-in {
    background-color: #db4437;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    width: 100%;
    margin-top: 10px;
  }

  .google-sign-in:hover {
    background-color: #c1351d;
  }

  .signup-link, .separator {
    text-align: center;
    margin-top: 20px;
  }

  .forgot-password {
    color: #3498db;
    text-decoration: none;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }
</style>
