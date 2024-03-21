<template>
  <div class="gray-background">
    <Card class="card-container">
      <template #content>
        <div class="video-container">
          <Video :videomp4="videoUrl"></Video>
        </div>
        <div class="work-experience-container">
          <h1>Work Experience</h1>
          <ScrollPanel class="scroll-panel">
            <WorkExperience v-for="(experience, index) in workExperiences" 
              :key="index" 
              :jobTitle="experience.jobTitle"
              :description="experience.description" 
              :startDate="experience.startDate" 
              :endDate="experience.endDate" />
          </ScrollPanel>
        </div>
        <div class="button-container">
          <button class="button-74" role="button"> <i class="pi pi-envelope"></i> Contact me</button>
          <button class="button-74" role="button"> <i class="pi pi-heart"></i> Save CV</button>
        </div>
      </template>
    </Card>
  </div>
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

const router = useRouter();

const goToHomePage = () => {
  router.push({ name: 'Home' });
};

</script>

<style lang="scss" scoped>
.card-container {
  margin-left: 10rem;
  max-width: 80dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(255, 250, 250, 0.808);
}

.video-container {
  margin-bottom: 20px;
}

.work-experience-container {
  width: 100%;
}

.scroll-panel {
  width: 100%;
  max-height: 50dvh;
  max-width: 60dvw;
  background-color: #FFF7DD;
  padding: 1rem;
  overflow-y: auto; 
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 0 18px;
  line-height: 50px;
  touch-action: manipulation;
  margin: 0 10px; 
}

.button-74:hover {
  background-color: #ffffff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
    line-height: 60px; 
  }
  
}

.gray-background {
  padding: 1rem;
  background-color: #ededed98;
  background-image: url('@/assets/Pastel_11.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
