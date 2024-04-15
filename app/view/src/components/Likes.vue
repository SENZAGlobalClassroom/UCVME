<template>
  <div class="header">
    <h3>Liked Posts</h3>
  </div>
  <Card class="card" v-for="post in likedPosts" :key="post.id">
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
</template>

<script setup>
import { likedPosts } from '@/store'; // Importing the reactive likedPosts reference
console.log(likedPosts.value);
import { ref, onMounted } from 'vue'

// Test Data The images should come from db
import cat3 from '@/assets/cat3.jpg';
import cat1 from '@/assets/cat1.jpg';

const images = ref();

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
</script>


<style scoped>
.header{
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  color: #454545;
  border-radius: 25px 25px 0px 0px;
}
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
  border-radius: 0px;

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
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
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