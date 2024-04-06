<template>
  <div class="login-form">
    <h2>Sign In</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" id="username" v-model="username" placeholder="Username" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required>
        <br>
        <div class="actions">
          <label class="checkbox-container">
            <p>Remember me</p>
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
        this.$emit('submit-form', {
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe
        });
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
    width: calc(100% - 60px); 
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    display: block;
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

  .login-form button {
    width: calc(100% - 60px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
  }

  .login-form button:hover {
    background: #e5e5e5;
  }

  .google-sign-in {
    background: #435efa;
    border-color: #435efa;
    color: #fff;
  }

  .google-sign-in:hover {
    background: #3b4d91 !important;
  }

  .signup-link, .separator {
    text-align: center;
    margin-top: 20px;
  }

  .forgot-password {
    font-size: 12px;
    color: #3498db;
    padding-bottom: 10px;
    text-decoration: none;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }
</style>
