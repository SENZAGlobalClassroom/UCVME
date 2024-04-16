<template>
  <div>
    <Card class="card" v-for="post in posts" :key="post.id">
      <template #header>
        <div style="display: flex; align-items: center;">
          <Avatar label="E" size="large" />
          <h3 style="padding-left: 1rem;" class="user-name">{{ post.firstname }} {{ post.lastname }}</h3>
        </div>
      </template>
      <template #content>
        <div class="title">
          <h2>{{ post.title }}</h2> <br>
          <h4>{{ post.date }}</h4>
        </div>
        <br><br>
        <div class="galleria-content" v-if="!post.video && post.images.length">
          <Galleria :value="post.images" :numVisible="3" containerStyle="max-width: 70dvh" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true">
            <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="galleria-image" />
            </template>
          </Galleria>
        </div>
        <div class="video-content" v-if="post.video">
          <video class="video" controls>
              <source :src="post.video" type="video/mp4">
              Your browser does not support the video tag.
            </video>
        </div>
        <div class="post-details">
          <div class="post-content">
            <p v-html="post.description" class="scroll-panel"></p>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="post-actions">
          <Button label="&nbsp Like" @click="likePost(post)" icon="pi pi-heart" severity="secondary" text rounded
            aria-label="Like" />
          <Button label="&nbsp  Apply" icon="pi pi-send" severity="secondary" text rounded aria-label="Apply" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { likedPosts } from '@/store';

const token = localStorage.getItem('token');


// Test Data The images should come from db
import cat3 from '@/assets/cat3.jpg';
import cat1 from '@/assets/cat5.jpeg';
import garden1 from '@/assets/garden1.jpg';
import garden2 from '@/assets/garden2.jpg';
import video from '@/assets/test3.mp4';

// Test data by Mate, all these should come from db
const posts = ref([
  {
    id: 1,
    firstname: "Erica",
    lastname: "Harris",
    title: 'Your perfect pet sitter',
    video: video,
  },
  {
    id: 2,
    firstname: "Joe",
    lastname: "Alade",
    title: 'Looking for a cat sitter',
    date: 'Needed for 22/04/2024, 16:00',
    description: "<strong>Job Description:</strong><br>" +
      "Hey there! Are you someone who finds solace in the purrs of content kitties? We’re looking for a kind-hearted individual to pamper our two furry friends while we embark on a two-week adventure. If you're a cat whisperer who can make our fur babies feel like royalty, this gig is purr-fect for you!<br><br>" +
      "<strong>Responsibilities:</strong><br>" +
      "1. Feeding our cats with love and care, sticking to their meal schedules.<br>" +
      "2. Ensuring their water bowls are topped up for hydration.<br>" +
      "3. Keeping their litter boxes clean and cozy for their business.<br>" +
      "4. Engaging them in playful antics and cuddle sessions to keep their spirits high.<br>" +
      "5. If needed (though they're generally healthy fluff balls), administering any meds.<br>" +
      "6. Sharing daily snapshots or updates to assure us they're thriving.<br>" +
      "7. If you’re up for it, maybe water our plants and collect the mail (we’ll owe you big time!).<br><br>" +
      "<strong>Requirements:</strong><br>" +
      "1. A heart brimming with adoration for our furry pals.<br>" +
      "2. Past experience as a cat's confidant would be paw-some!<br>" +
      "3. Reliability that's as solid as a cat's nap schedule.<br>" +
      "4. Willingness to follow our feline friends' routines to the whisker.<br>" +
      "5. Your calendar should be clear for the whole two-week kitty cuddle fest.<br>" +
      "6. Access to transportation to whisk you to our home for kitty care.<br><br>" +
      "<strong>Compensation:</strong><br>" +
      "Let's chat about what feels fair based on your experience and the TLC you'll be giving our kitties.<br><br>" +
      "If you’re ready to dive into two weeks of purr-dise with our fur babies, drop us a line with a little about yourself and why you’re the cat’s meow for this job. References from fellow feline enthusiasts would make our whiskers twitch with excitement. Thanks a million!",
    images: [
      {
        itemImageSrc: cat3,
        thumbnailImageSrc: cat3,
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: cat1,
        thumbnailImageSrc: cat1,
        alt: 'Description for Image 2',
        title: 'Title 2'
      }
    ]
  },
  {
    id: 3,
    firstname: "Steve",
    lastname: "Lee",
    title: 'Backyard Cleanup Specialist Needed!',
    date: 'Needed for 14/04/2024',
    description: "<strong>Job Description:</strong><br>" +
      "Are you someone who loves transforming outdoor spaces from chaos to tranquility? We're on the hunt for a backyard cleanup specialist to tackle a project that's brimming with potential. If you have a knack for tidying up and creating inviting outdoor environments, this gig is for you!<br><br>" +
      "<strong>Responsibilities:</strong><br>" +
      "1. Clearing out debris, fallen branches, and other clutter from the backyard.<br>" +
      "2. Trimming overgrown vegetation, including bushes, hedges, and grass.<br>" +
      "3. Raking and disposing of leaves and other organic matter.<br>" +
      "4. Sweeping and power washing surfaces to remove dirt and grime.<br>" +
      "5. Organizing outdoor furniture, garden tools, and other items.<br><br>" +
      "<strong>Requirements:</strong><br>" +
      "1. Previous experience in yard cleanup or landscaping preferred.<br>" +
      "2. Physical fitness and ability to perform tasks that require bending, lifting, and manual labor.<br>" +
      "3. Attention to detail and a passion for creating neat and orderly outdoor spaces.<br>" +
      "4. Reliable transportation to access the job site.<br><br>" +
      "<strong>Compensation:</strong><br>" +
      "Let's discuss compensation based on the scope of the project and your expertise.<br><br>" +
      "If you're ready to roll up your sleeves and turn a neglected backyard into a backyard oasis, we want to hear from you! Please send us a brief overview of your relevant experience and why you're the perfect fit for this cleanup project. Let's transform this backyard together!",
    images: [
      {
        itemImageSrc: garden1,
        thumbnailImageSrc: garden1,
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: garden2,
        thumbnailImageSrc: garden2,
        alt: 'Description for Image 2',
        title: 'Title 2'
      }
    ]
  }
]);

function likePost(post) {
  if (!likedPosts.value.some(likedPost => likedPost.id === post.id)) {
    likedPosts.value.push(post);
    console.log('Post liked:', post);
    console.log('All liked posts:', likedPosts.value);
  }
}

function applyJob(post) {
  // get the post's user email
  // send stylysed email informing the recipient that the user has applied for their job and a qr code/link to their CV
}
</script>

<style scoped>
.title,
.post-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.post-card {
  display: flex;
  flex-direction: row;
}

.galleria-image {
  width: 100%;
  height: 35vh;
  object-fit: cover;
}

.galleria-content {
  float: left;
  padding-right: 1rem;
  max-width: 30dvw;
  width: 100%;
  margin-bottom: 1rem;
}

.video-content {
  width: 70%;
  box-shadow: 0 4px 25px rgba(0,0,0,0.1);
  border-radius: 25px; 
  overflow: hidden; 
  margin: auto;
}

video {
  width: 100%; 
  height: auto;
  display: block;
}

.post-details {
  display: flex;
  flex-direction: column;
}

.post-content {
  margin-bottom: 1rem;
}

.post-actions {
  display: flex;
  justify-content: space-between;
}

.scroll-panel {
  max-height: 35vh;
  overflow-y: scroll;
}

.scroll-panel::-webkit-scrollbar {
  width: 6px;
}

.scroll-panel::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  background-clip: padding-box;
  border: 2px solid transparent;
}

.scroll-panel::-webkit-scrollbar-track {
  background-color: #6d6d6d;
}


@media (max-width: 1024px) {
  .title {
    display: inline;
  }

  .galleria-content {
    float: none;
  }

  .galleria-content,
  .post-details {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  .galleria-content {
    padding: 1rem;
  }

  .galleria-image {
    object-fit: cover;
    width: 100dvw;
    height: 35dvh;
  }

  .video-content {
  width: 100%;
  margin: auto;
}

}
</style>