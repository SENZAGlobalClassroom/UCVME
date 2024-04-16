<template>
  <div class="helpForm">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Name" required>
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="E-mail" required>
      </div>
      <div class="form-group">
        <textarea type="description" v-model="description" placeholder="Enter Text Here" required></textarea>
      </div>
    <button class="button">Submit</button>

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

.form-group input, textarea {
width: 100%;
min-width: 400px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 25px;
}

.form-group textarea {
height: 8dvw;
min-height: 150px;
}

.button {
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

@media (max-width: 766px) {
.form-group input,
.button {
  width: 60dvw;
  max-width: none;
}

.textarea {
  height: 10dvw;
  min-height: 150px;
}


}
</style>