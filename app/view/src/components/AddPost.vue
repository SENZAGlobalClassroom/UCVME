<template>
    <TabView>
        <TabPanel header="Job Post">
            <div class="form-container">
                <div class="form-item">
                    <input placeholder="Title" v-model="title" />
                </div>
                <br>
                <div>
                    <div class="form-item">
                        <select v-model="selectedCategory">
                            <option v-for="type in categories" :value="type.code" :key="type.code">{{ type.name }}
                            </option>
                        </select>
                    </div>
                    <br>
                    <div class="form-item">
                        <Calendar placeholder="Job date" v-model="jobDate" />
                    </div>
                    <br>
                    <div class="form-item">
                        <textarea placeholder="Job description" v-model="description" style="min-height: 5rem;" />
                    </div>
                    <br>
                    <div class="pictures-container">
                        <div v-for="(picture, index) in media" :key="index" class="picture-preview">
                            <img :src="picture.url" class="image-preview" />
                            <Button icon="pi pi-times" class="remove-picture-button" @click="removeMedia(index)" />
                        </div>
                        <Button icon="pi pi-plus" class="add-picture-button" @click="() => mediaInput.click()" />
                    </div>
                    <input type="file" ref="mediaInput" hidden @change="handleMediaUpload" accept="image/*" />
                </div>
                <br>
                <Button label="Post" class="post-button" @click="post" />
            </div>
        </TabPanel>
        <TabPanel header="Self Promotion">
            <div class="form-container">
                <div class="form-item">
                    <input placeholder="Title" v-model="title" />
                </div>
                <br>
                <div>
                    <div class="form-item">
                        <textarea placeholder="Job description" v-model="description" style="min-height: 5rem;" />
                    </div>
                    <br>
                    <div class="media-container">
                        <video v-if="video.url" controls class="video-preview">
                            <source :src="video.url" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <Button icon="pi pi-times" v-if="video.url" class="remove-video-button"
                            @click="removeVideo()" />
                        <Button icon="pi pi-plus" class="add-video-button" v-else @click="() => videoInput.click()" />
                    </div>
                    <input type="file" ref="videoInput" hidden @change="handleVideoUpload" accept="video/*" />
                </div>
                <br>
                <Button label="Post" class="post-button" @click="post" />
            </div>
        </TabPanel>
    </TabView>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
    { name: 'Tech', code: 'TECH' },
    { name: 'Healthcare', code: 'HC' },
    { name: 'Education', code: 'EDU' },
    { name: 'Construction', code: 'CONS' },
    { name: 'Finance', code: 'FIN' }
]);

const postType = ref('JOB');
const title = ref('');
const selectedCategory = ref('TECH');
const jobDate = ref(null);
const description = ref('');
const media = ref([]);
const video = ref({});
const mediaInput = ref(null);
const videoInput = ref(null);

function handleMediaUpload(event) {
    const files = event.target.files;
    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        media.value.push({ file, url });
    }
}

function handleVideoUpload(event) {
    const files = event.target.files;
    if (!files.length || video.value.url) return;

    const file = files[0];
    const url = URL.createObjectURL(file);
    video.value = { file, url };
}

function removeVideo() {
    URL.revokeObjectURL(video.value.url);
    video.value = {};
}

function removeMedia(index) {
    URL.revokeObjectURL(media.value[index].url);
    media.value.splice(index, 1);
}

function post() {
    const postData = {
        job_post_title: title.value,
        job_post_category: selectedCategory.value,
        job_post_date: jobDate.value,
        job_post_description: description.value
    };

    fetch('/addpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            console.log('Post successful');
            title.value = '';
            selectedCategory.value = 'TECH';
            jobDate.value = null;
            description.value = '';
            media.value = [];
            video.value = {};
        })
        .catch(error => {
            console.error('Error posting data:', error.message);
        });
}
</script>

<style scoped>
:deep(.p-tabview-panels ){
    background: transparent !important;
}

.post-heading {
    padding-bottom: 1rem
}

.form-item input,
.form-item select,
.form-item textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-size: 1rem;
    color: #333;
    outline: none;
}

.form-item input:hover,
.form-item select:hover,
.form-item textarea:hover {
    border-color: #888;
}

.form-item input:focus,
.form-item select:focus,
.form-item textarea:focus {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 86, 179, 0.25);
}

.pictures-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.picture-preview {
    position: relative;
    width: 10rem;
    height: 10rem;
    margin: 0.2rem;
}

.image-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.video-preview {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
}

.remove-picture-button,
.remove-video-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-picture-button,
.add-video-button {
    width: 10rem;
    height: 10rem;
    border: 2px dashed #ccc;
    border-radius: 8px;
    background-color: rgb(220, 220, 220);
}

.post-button {
    display: flex;
    margin: auto;
    width: 40dvw;
}


@media (max-width: 1100px) {
    .form-container {
        padding: 0;
        max-width: 100%;
    }

    .pictures-container {
        gap: 0.5rem;
    }
}

@media (max-width: 767px) {

    .form-item input,
    .form-item select,
    .form-item textarea {
        padding: 0.5rem;
        font-size: 0.9rem;
    }
}
</style>