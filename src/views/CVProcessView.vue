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
            <div class="flex flex-column h-12rem ">
              <CVProcessStep1></CVProcessStep1>
            </div>
            <div class="flex pt-4 justify-content-end">
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
            <div class="flex flex-column h-12rem">
              <CVProcessStep2></CVProcessStep2>
            </div>
            <div class="flex pt-4 justify-content-between">
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
            <div class="flex flex-column h-12rem">
              <CVProcessStep3></CVProcessStep3>
            </div>
            <div class="flex pt-4 justify-content-between">
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
            <div class="flex flex-column h-12rem">
              <CVProcessStep4></CVProcessStep4>
            </div>
            <div class="flex pt-4 justify-content-between">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
              <Button label="Complete" @click="" />
            </div>
          </template>
        </StepperPanel>
      </Stepper>
      <Footer></Footer>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import CVProcessStep1 from '@/components/CVProcessStep1.vue';
import CVProcessStep2 from '@/components/CVProcessStep2.vue';
import CVProcessStep3 from '@/components/CVProcessStep3.vue';
import CVProcessStep4 from '@/components/CVProcessStep4.vue';

const enteredData = ref({});
const activeStep = ref(0);

const handleContinueClicked = (data) => {
  console.log("Data received in CVProcessView:", data);

  enteredData.value = data;

};


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


:deep .p-stepper .p-stepper-panels {
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
  .p-stepper .p-stepper-panels {
    width: 100%;
    padding: 1rem;
  }

  .p-button {
    margin: 5px;
    padding: 10px 10px;
  }
}
</style>
