<template>
  <div class="setting-form">
    <h2>Update Settings</h2>
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

      <button type="submit" class="btn">Update Settings</button>
      <button type="button" class="btn btn-danger" @click="onDeleteAccount">Delete Account</button>
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
.settings-form {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
}

.btn-danger {
  background-color: red;
  color: white;
}

</style>
