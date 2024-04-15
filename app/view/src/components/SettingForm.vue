<template>
  <div class="setting-form">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" v-model="user.username" type="text" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="user.email" type="email" required>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="user.password" type="password" required>
      </div>
      
      <div class="form-group">
        <label for="theme">Theme</label>
        <select id="theme" v-model="user.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button type="submit" class="btn">Update Profile</button>
      <button type="button" class="btn btn-danger" @click="onDeleteAccount">Deactivate Account</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
          theme: 'light', // Default theme
        },
      };
    },
    methods: {
      onSubmit() {
        // Implement submission logic here

        alert('Settings updated!');
      },
      onDeleteAccount() {
        // Implement account deletion logic here

        if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
          alert('Account deleted.');
        }
      }
    }
  }
</script>


<style scoped>
.form-group input,
.button {
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
  min-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
}

.form-group select {
  width: 100%;
  min-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  cursor: pointer;
}

.form-group select:focus {
  border-color: rgb(132, 87, 187);
  outline: none;
}

.btn {
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
.btn-danger {
  background: #f73737;
  border: 1px solid rgb(255, 255, 255);
  color: #ffffff;
  font-weight: bold;
}


@media (max-width: 766px) {
  .form-group input,
  .btn {
    width: 70dvw;
    max-width: none;
  }

  .form-group {
    padding: 0 20px; 
  }

}
</style>