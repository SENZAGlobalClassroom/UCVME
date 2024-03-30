<template>
    <div class="gray-background">
        <Card style="min-height: 80dvh; padding: 2rem; ">
            <template #header>
                <h3 class="post-heading">Post a new job</h3>
            </template>
            <template #content>
                <div class="form-container">
                    <InputText placeholder="Job title" v-model="jobTitle" />
                    <br>
                    <Dropdown placeholder="Job category" v-model="selectedCategory" :options="categories"
                        optionLabel="name" />
                    <br>
                    
                    <Calendar placeholder="Job date" v-model="jobDate" />
                    <br>
                    <InputText placeholder="Job description" v-model="jobDescription" style="min-height: 5rem;" />
                    <br>
                    <div class="pictures-container">
                        <div v-for="(picture, index) in jobPictures" :key="index" class="picture-preview">
                            <img :src="picture.url" class="image-preview" />
                            <Button icon="pi pi-times" class="remove-picture-button" @click="removePicture(index)" />
                        </div>
                        <Button icon="pi pi-plus" class="add-picture-button" @click="() => fileInput.click()" />
                    </div>
                    <input type="file" ref="fileInput" hidden @change="handlePictureUpload" accept="image/*" />
                    <Button label="Post" class="post-button" @click="postJob" />
                </div>
            </template>

        </Card>
        <Navbar></Navbar>
    </div>
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

const jobTitle = ref('');
const selectedCategory = ref(null);
const jobDate = ref(null);
const jobDescription = ref('');
const jobPictures = ref([]);
const fileInput = ref(null);

function handlePictureUpload(event) {
    const files = event.target.files;
    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Create a URL for the file, which can be used in an <img> element
        const url = URL.createObjectURL(file);
        jobPictures.value.push({ file, url });
    }
}

function removePicture(index) {
    // Revoke the object URL to free up memory
    URL.revokeObjectURL(jobPictures.value[index].url);
    jobPictures.value.splice(index, 1);
}
function postJob() {
    //add db logic
    console.log({
        title: jobTitle.value,
        category: selectedCategory.value,
        date: jobDate.value,
        description: jobDescription.value,
        pictures: jobPictures.value
    });
}
</script>

<style scoped>
.gray-background {
    padding: 2rem 10vw;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_2.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}

.post-heading {
    margin-top: 1rem;
    text-align: center;
}

.form-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 40dvw;
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

.remove-picture-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-picture-button {
    width: 10rem;
    height: 10rem;
    border: 2px dashed #ccc;
    border-radius: 8px;
    background-color: rgb(220, 220, 220);
}

.post-button {
    margin-top: 1rem;
    width: 100%;
}

@media (max-width: 1100px) {
    .gray-background {
        padding: 1rem;
    }

    .form-container {
        padding: 0;
        max-width: 100%;
    }

    .pictures-container {
        gap: 0.5rem;
    }
}
</style>