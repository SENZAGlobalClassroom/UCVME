<template>
  <div>
    <Card class="card" v-for="post in posts" :key="post.id">
      <template #header>
        <div style="display: flex; align-items: center;">
          <Avatar label="P" size="large" />
          <h3 style="padding-left: 1rem;" class="user-name">{{ post.name }}</h3>
        </div>
      </template>
      <template #content>
        <div class="title">
          <h2>{{ post.title }}</h2> <br>
          <h4>{{ post.date }}</h4>
        </div>
        <br><br>
        <div class="video-content">
          <Galleria :value="images" :numVisible="3" containerStyle="max-width: 70dvh" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true">
            <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                style="width: 100%; display: block; border-radius: 25px;" />
            </template>
          </Galleria>
        </div>
        <div class="post-details">
          <div class="post-content">
            <p v-html="post.description" style="max-height: 40dvh; overflow-y: scroll;" class="scroll-panel"></p>
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
import { ref, onMounted } from 'vue'
import { likedPosts } from '@/store';

// Test Data The images should come from db
import cat3 from '@/assets/cat3.jpg';
import cat1 from '@/assets/cat1.jpg';

const PhotoService = {
  getData() {
    return [
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
    ];
  },
  getImages() {
    return Promise.resolve(this.getData());
  }
};

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

// Test data by Mate, all these should come from db
const images = ref();

const posts = ref([
  {
    id: 1,
    name: 'Jane Kim',
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
      "If you’re ready to dive into two weeks of purr-dise with our fur babies, drop us a line with a little about yourself and why you’re the cat’s meow for this job. References from fellow feline enthusiasts would make our whiskers twitch with excitement. Thanks a million!"
  },
  {
    id: 2,
    name: 'Hoexeng Park',
    title: 'Tutor Needed for High School Math',
    date: 'Starting May 2024',
    description: 'Seeking an experienced math tutor for my high schooler, focusing on algebra and geometry. Preferably twice a week after school hours. Looking for someone patient and engaging.'
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

}
</script>

<style scoped>
.panel {
  width: 100%;
  height: 100dvh;
  padding: 2em;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  padding: 1rem;
  margin: auto;
}

.post-card {
  display: flex;
  flex-direction: row;
}

.video-content {
  float: left;
  padding-right: 1rem;
  max-width: 30dvw;
  margin: 0 auto;
}


.post-details {
  flex: 2;
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


.scroll-panel::-webkit-scrollbar {
  width: 6px;
}

.scroll-panel::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}

.scroll-panel::-webkit-scrollbar-track {
  background-color: #6d6d6d;
  border-radius: 10px;
}
.video-content {
  float: left;
  padding-right: 1rem;
  max-width: 30dvw;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .video-content {
  max-width: 50dvw;
}

}
@media (max-width: 768px) {
  .title {
    display: inline;
  }

  .video-content {
    float: none;
    max-width: 100dvw;
  }

  .video-content,
  .post-details {
    max-width: 100%;
  }

  .video-content {
    padding: 1rem;

  }
}
</style>