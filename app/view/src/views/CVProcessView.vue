<template>

  <head>
    <title>Make your CV</title>
  </head>
  <div class="gray-background">
    <TopBarFT></TopBarFT>
    <div class="centered">
      <Stepper linear>
        <StepperPanel>
          <template #header=>
            <Button>
              <i class="pi pi-user" />
            </Button>
          </template>
          <template #content="{ nextCallback }">
            <div class="space">
              <CVProcessStep1 @update:firstName="updateFirstName" @update:lastName="updateLastName"
                @update:phone="updatePhone" @update:email="updateEmail" @update:country="updateCountry"
                :selectedCountry="selectedCountry"></CVProcessStep1>
            </div>
            <div class="buttons">
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
          </template>
        </StepperPanel>
        <StepperPanel>
          <template #header>
            <Button>
              <i class="pi pi-palette" />
            </Button>
          </template>
          <template #content="{ prevCallback, nextCallback }">
            <div class="space">
              <CVProcessStep2 @update:selectedColor="logCubeColor"></CVProcessStep2>
            </div>
            <div class="buttons">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
          </template>
        </StepperPanel>
        <StepperPanel>
          <template #header>
            <Button>
              <i class="pi pi-star" />
            </Button>
          </template>
          <template #content="{ prevCallback, nextCallback }">
            <div class="space">
              <CVProcessStep3></CVProcessStep3>
            </div>
            <div class="buttons">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
          </template>
        </StepperPanel>
        <StepperPanel>
          <template #header>
            <Button>
              <i class="pi pi-video" />
            </Button>
          </template>
          <template #content="{ prevCallback }">
            <div class="space">
              <CVProcessStep4 @videoUploaded="handleVideoData"></CVProcessStep4>
            </div>
            <div class="buttons">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
              <Button label="Complete" @click="completeCV"></Button>

            </div>
          </template>
        </StepperPanel>
      </Stepper>
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import CVProcessStep1 from '@/components/CVProcessStep1.vue';
import CVProcessStep2 from '@/components/CVProcessStep2.vue';
import CVProcessStep3 from '@/components/CVProcessStep3.vue';
import CVProcessStep4 from '@/components/CVProcessStep4.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    CVProcessStep1,
    CVProcessStep2,
    CVProcessStep3,
    CVProcessStep4,
  },
  setup() {
    const router = useRouter();

    const sendDataToDatabase = () => {
      // this is called when the complete button is pressed
      // you can send the data to the db here @jia
    };

    const completeCV = async () => {
      try {
        await sendDataToDatabase();
        // Redirect to the CVProcessCompleteView.vue page after data is sent
        router.push({ name: 'CVComplete' });
      } catch (error) {
        console.error('Error while completing CV:', error);
      }
    };

    const firstName = ref("");
    const updateFirstName = (value) => {
      firstName.value = value;
      console.log(firstName.value);
    };
    const lastName = ref("");
    const updateLastName = (value) => {
      lastName.value = value;
      console.log(lastName.value);
    };
    const phone = ref("");
    const updatePhone = (value) => {
      phone.value = value;
      console.log(phone.value);
    };
    const email = ref("");
    const updateEmail = (value) => {
      email.value = value;
      console.log(email.value);
    };
    const selectedCountry = ref("");
    const updateCountry = (value) => {
      selectedCountry.value = value;
      console.log(selectedCountry.value);
    };

    const selectedColor = ref("");
    const logCubeColor = (color) => {
      selectedColor.value = color;
      console.log(selectedColor.value);
    };

    const videoData = ref(null);
    const handleVideoData = (data) => {
      videoData.value = data;
      console.log('Received video data:', videoData.value);
    };

    return {
      firstName,
      lastName,
      phone,
      email,
      selectedCountry,
      updateFirstName,
      updateLastName,
      updatePhone,
      updateEmail,
      updateCountry,
      selectedColor,
      logCubeColor,
      videoData,
      handleVideoData,
      completeCV
    }
  },
}
</script>

<style scoped>
.gray-background {
  padding: 1rem;
  background-color: #ededed98;
  background-image: url('@/assets/Pastel_11.png');
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
