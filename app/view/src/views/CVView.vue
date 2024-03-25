<template>
  <div class="gray-background">
    <!-- top bar needs to be added -->
    <Card class="card-container">
      <template #content>
        <div class="header-container">
          <h1>{{ name }}</h1>
          <div>
            <SpeedDial :model="items" direction="down" showIcon="pi pi-ellipsis-v" hideIcon="pi pi-ellipsis-h"
              :tooltipOptions="{ position: 'left' }" />
          </div>
        </div>
        <div class="video-container">
          <Video :videomp4="videoUrl"></Video>
        </div>
        <div class="work-experience-container">
          <h1>Work Experience</h1>
          <ScrollPanel class="scroll-panel">
            <WorkExperience v-for="(experience, index) in workExperiences" :key="index" :jobTitle="experience.jobTitle"
              :description="experience.description" :startDate="experience.startDate" :endDate="experience.endDate" />
          </ScrollPanel>
        </div>
        <div class="button-container">
          <button class="button-74" role="button"> <i class="pi pi-envelope"></i> Contact!</button>
          <button class="button-74" role="button"> <i class="pi pi-heart"></i> Save CV</button>
        </div>
      </template>
    </Card>
  </div>
  <Navbar></Navbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import WorkExperience from '@/components/WorkExp.vue';
import Video from '@/components/Video.vue';
import video from '../assets/TestVideo.mp4'

// the actual data needs to come from the db (from whatever the user put in the CV Process)
const workExperiences = ref([
  {
    jobTitle: "Pet Sitter",
    description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
    startDate: "10/03/23",
    endDate: "20/03/23"
  },
  {
    jobTitle: "Pet Sitter",
    description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
    startDate: "10/03/23",
    endDate: "20/03/23"
  },
  {
    jobTitle: "Pet Sitter",
    description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
    startDate: "10/03/23",
    endDate: "20/03/23"
  },
  {
    jobTitle: "Pet Sitter",
    description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
    startDate: "10/03/23",
    endDate: "20/03/23"
  },
]);

const videoUrl = video

const name = "Linda Smith"

const router = useRouter();

//This is for the SpeedDial menu
const items = ref([
  {
    label: 'Edit CV',
    icon: 'pi pi-file-edit',
    command: () => {
      //open up edit page
    }
  },
  {
    label: 'Share CV',
    icon: 'pi pi-share-alt',
    command: () => {
      //open up share options
    }
  },
  {
    label: 'Privacy',
    icon: 'pi pi-lock',
    command: () => {
      //open privacy menu
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {
      // open up delete popup
    }
  },

])

</script>

<style lang="scss" scoped>
.header-container {
  max-width: 74dvw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(255, 250, 250, 0.808);
}

.video-container {
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.work-experience-container {
  padding: 1.5rem;
  min-width: 78dvw;
  border-radius: 20px;
  background-color: #d2dff3; //should be decided based on the colour the user picked
}

.scroll-panel {
  padding: 0.5rem;
  width: 100%;
  max-height: 50dvh;
  max-width: 78dvw;
  overflow: auto;
}

.scroll-panel::-webkit-scrollbar {
  width: 10px;
}

.scroll-panel::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}

.scroll-panel::-webkit-scrollbar-track {
  background-color: #7998C8;
  border-radius: 10px;
}

.button-container-right {
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
}

:deep .p-speeddial-button {
  background-color: #fbeee000;
  color: black;
  border-color: transparent;
}

:deep .p-speeddial-action {
  background-color: #ffffff;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.button-74 {
  background-color: #ffffff;
  border: 2px solid #1E2828;
  border-radius: 30px;
  box-shadow: #1E2828 4px 4px 0 0;
  color: #1E2828;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 0 18px;
  line-height: 50px;
  touch-action: manipulation;
  margin: 0 10px;
}

.button-74:hover {
  background-color: transparent;
}

.button-74:active {
  box-shadow: #1E2828 2px 2px 0 0;
  transform: translate(2px, 2px);
}

.gray-background {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 10dvw;
  padding-right: 10dvw;
  background-color: #ededed98;
  background-image: url('@/assets/Pastel_11.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .gray-background {
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: 0dvw;
    padding-right: 0dvw;
  }

  .header-container {
    max-width: 96dvw;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .video-container {
    padding-top: 0rem;
    padding-bottom: 0.1rem;
    min-width: 100dvw;
  }

  .work-experience-container {
    padding: 1.5rem;
    min-width: 100dvw;
    border-radius: 0px;
    background-color: #d2dff3; //should be decided based on the colour the user picked
  }

  .scroll-panel {
    padding: 0rem;
    width: 100%;
    max-height: 30dvh;
    max-width: 100dvw;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
  }

  .button-container text {
    display: none;
  }

  .button-74 {
    margin: 10px 0;

  }

  .button-74 i {
    font-size: 24px;
  }

}
</style>
