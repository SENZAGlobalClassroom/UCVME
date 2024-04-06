<template>
    <div class="helpForm">
      <h2>Help Form</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" v-model="name" placeholder="Name" required>
        </div>
        <div class="form-group">
          <input type="email" v-model="email" placeholder="E-mail" required>
        </div>
        <div class="form-group">
          <input type="description" v-model="description" placeholder="Enter Text Here" required>
        </div>
      <button class="submitHelpForm">Submit</button>

      </form>
    </div>

</template>

<script setup>
    import { ref } from 'vue';

    const name = ref('');
    const email = ref('');

    const onSubmit = () => {
        console.log({
            name: name.value,
            email: email.value,
        });
    };
</script>

<style scoped>

.helpForm {
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

    .centered {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
