<template>
    <head>
      <title>Help Centre</title>
    </head>
    <div class="gray-background">
      <TopBar></TopBar>
        <div class="helpForm centered">
            <HelpForm @submit="handleHelpForm" />
        </div>
    <Footer></Footer>
    </div>
</template>
  
  
<script>
  import HelpForm from '@/components/HelpForm.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: {
      HelpForm
    },
    setup() {
      const router = useRouter();
  
      const sendDataToDatabase = () => {
        // Send data here @jia
      };
  
      const completeHelpForm = async () => {
        try {
          await sendDataToDatabase();
          // Redirect to HelpForm.vue page after data is sent
          router.push({ name: 'HelpView' });
        } catch (error) {
          console.error('Error while completing Help Form:', error);
        }
      };
  
      const name = ref("");
      const updateName = (value) => {
        name.value = value;
        console.log(name.value);
      };
      const email = ref("");
      const updateEmail = (value) => {
        email.value = value;
        console.log(email.value);
      };
  
      return {
        name,
        email,
        updateName
      }
    },
  }
</script>

<style scoped>
  .gray-background {
    padding: 1rem;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_10.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  
  .centered {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .space {
    padding: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  :deep .p-stepper .p-stepper-panels {
    width: 100dvh;
    margin-top: 1rem;
    background-color: rgba(255, 255, 255, 0.703);
    border-radius: 30px;
  }
  
  .p-button {
    background-image: linear-gradient(to right, #B993D6 0%, #8CA6DB 51%, #B993D6 100%);
    margin: 10px;
    padding: 15px 35px;
    background-size: 200% auto;
    color: white;
    border-radius: 50px;
  }
  
  
  @media only screen and (max-width: 1200px) {
    .p-stepper .p-stepper-panels {
      width: 75%;
      padding: 1rem;
    }
  }
  
  @media only screen and (max-width: 768px) {
    :deep .p-stepper .p-stepper-panels {
      width: 100%;
      padding: 1rem;
    }
  
  
    .p-button {
      margin: 5px;
      padding: 15px 15px;
    }
  
    .centered {
      align-items: normal;
    }
  }
</style>
  