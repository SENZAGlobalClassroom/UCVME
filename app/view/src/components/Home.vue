<template>
  <ScrollPanel style="width: 100%; height: 80dvh" class="posts-background">
    <div class="post-upload-container">
      <div class="post-upload-card">
        <video class="user-video" autoplay loop muted>
          <source src="@/assets/test1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <h3 class="user-name">{{ posts[0].name }}</h3>
        <div class="post-details-actions">
          <div class="post-content">
            <h2>{{ posts[0].title }}</h2>
            <p>{{ posts[0].date }}</p>
            <p>{{ posts[0].description }}</p>
          </div>
          <div class="post-actions">
            <button class="save-post" @click="likePost(posts[0])">
              <i class="pi pi-heart" style="margin-right: .5em;"></i> Save Post
            </button>
            <button class="apply-post">
              <i class="pi pi-send"></i> Apply</button>
          </div>
        </div>
      </div>

      <div class="post-upload-card">
        <video class="user-video" autoplay loop muted>
          <source src="@/assets/test1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <h3 class="user-name">{{ posts[1].name }}</h3>
        <div class="post-details-actions">
          <div class="post-content">
            <h2>{{ posts[1].title }}</h2>
            <p>{{ posts[1].date }}</p>
            <p>{{ posts[1].description }}</p>
          </div>
          <div class="post-actions">
            <button class="save-post" @click="likePost(posts[1])">
              <i class="pi pi-heart" style="margin-right: .5em;"></i> Save Post
            </button>
            <button class="apply-post">
              <i class="pi pi-send"></i> Apply</button>
          </div>
        </div>
      </div>
      <!-- ... additional posts ... -->
    </div>
  </ScrollPanel>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
import { likedPosts } from '@/store';

const posts = ref([
  {
    id: 1,
    name: 'Jane Kim',
    title: 'Looking for a gardener',
    date: 'Needed for 22/04/2024, 16:00',
    description: 'Hi, I am a mom of two and need someone to clean up the garden and plant some of the flowers I have bought. Swipe for pictures of my garden and how I want it to look like.'
  },
  {
    id: 2,
    name: 'Hoexeng Park',
    title: 'Tutor Needed for High School Math',
    date: 'Starting May 2024',
    description: 'Seeking an experienced math tutor for my high schooler, focusing on algebra and geometry. Preferably twice a week after school hours. Looking for someone patient and engaging.'
  }
  // Add more posts here as needed
]);

function likePost(post) {
  if (!likedPosts.value.some(likedPost => likedPost.id === post.id)) {
    likedPosts.value.push(post);
    console.log('Post liked:', post);
    console.log('All liked posts:', likedPosts.value);
  }
}
</script>

<style scoped>
.posts-background {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 20px;
  border-radius: 25px;
}

.apply-post {
  background-color: #4CAF50;
  color: white;
}

.apply-post i {
  margin-right: 5px;
}

.post-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 1rem;
}

.post-upload-card {
  display: flex;
  align-items: stretch;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 20px;
  width: 100%;
  margin-top: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* Ensures the video covers the area without stretching. */
}

.user-name {
  font-size: small;
  position: absolute;
  margin: 5px;
  color: black;
  padding: 0.5em;
  border-radius: 5px;
  z-index: 2;
  /* Make sure it's above the video layer */
  transform: translateY(-100%);
  /* Shift it up by its own height */
}

.user-video-container {
  position: relative;
  flex: 1;
  /* Adjust the flex value to match the desired width of the video */
}

.post-content h2 {
  font-size: 1.25rem;
  color: #333;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-post,
.apply-post {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-post {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  /* Change the color as needed */
  color: #333;
  /* Change text color as needed */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-post:hover {
  background-color: #e0e0e0;
  /* Change hover color as needed */
}

.apply-post {
  background-color: #4CAF50;
  color: white;
}


.post-upload-container+.post-upload-container {
  margin-top: 30px;
}

.post-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.post-upload-card {
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  align-items: stretch;
  /* Ensure the children stretch to fill the card */
}

.user-video {
  height: auto;
  width: 50%;
  /* Half the width of the post-upload-card */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
}

.post-details-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  /* Add padding to match the video side */
}
</style>