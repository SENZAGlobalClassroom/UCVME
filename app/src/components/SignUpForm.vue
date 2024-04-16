<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Username" required>
        <p class="errortext" id="userexists" style="display: none;">Username already exists!</p>
        <p class="errortext" id="userformat" style="display: none;">Username can only contain characters!</p>
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="E-mail" required>
        <p class="errortext" id="emailexists" style="display: none;">Email already exists!</p>
        <p class="errortext" id="emailformat" style="display: none;">Invalid email format!</p>

      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" required>
        <p class="errortext" id="passformat" style="display: none;">Password requires a number, a capital letter and a special character, and must be at least 8 characters long!</p>
      </div>
      <div class="form-group">
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
        <p class="errortext" id="passmatch" style="display: none;">Passwords do not match!</p>
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
      document.getElementById('userexists').style.display = 'none';
      document.getElementById('userformat').style.display = 'none';
      document.getElementById('emailexists').style.display = 'none';
      document.getElementById('emailformat').style.display = 'none';
      document.getElementById('passformat').style.display = 'none';
      document.getElementById('passmatch').style.display = 'none';

      if (!this.agreeToTerms) {
        alert('You must agree to the Terms and Privacy policies');
        return;
      }

      if (this.password !== this.confirmPassword) {
        document.getElementById('passmatch').style.display = 'block';
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
        if (data.error) {
          // Show the corresponding error message on the form
          const errorMap = {
            'Username-dupe': 'userexists',
            'Email-dupe': 'emailexists',
            'Invalid-username': 'userformat',
            'Invalid-email': 'emailformat',
            'Invalid-password': 'passformat'
          };
          
          document.getElementById(errorMap[data.error]).style.display = 'block';
        } else {
          // Success logic here
          alert('Signup successful!');
          this.$router.push('/');
        }
      })
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

.errortext {
  color: red;
  font-size: smaller;
  text-align: justify;
  text-align-last: center;
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
