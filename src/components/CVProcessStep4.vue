<template>
    <h1 class="title"> Add Your Video</h1>

    <div style="padding: 2rem;">
        <div class="center">
            <div class="image-preview-container">
                <div class="image-preview" v-if="previewImage">
                    <img :src="previewImage" alt="Video preview" class="rounded-preview">
                </div>
                <div class="default-image" v-else>
                    <img src="\src\assets\videoUpload.png" alt="Default Image" class="rounded-preview">
                </div>
            </div>

            <div class="file-input-container">
                <label for="fileInput" class="file-label">Choose File</label>
                <input id="fileInput" type="file" @change="handleFileInputChange" accept="video/*"
                    style="display: none">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            previewImage: null
        };
    },
    methods: {
        handleFileInputChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.generatePreviewImage(file);
            }
        },
        generatePreviewImage(videoFile) {
            const video = document.createElement('video');
            video.setAttribute('crossorigin', 'anonymous');
            video.setAttribute('controls', 'true');

            const blobUrl = URL.createObjectURL(videoFile);
            video.src = blobUrl;

            video.addEventListener('seeked', async () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                this.previewImage = canvas.toDataURL('image/png');
                URL.revokeObjectURL(blobUrl);
            });

            video.addEventListener('error', () => {
                console.error('Error loading the video.');
            });

            video.load();
            video.currentTime = 1; // Seek to a specific time to trigger 'seeked' event
        }
    }
};
</script>


<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-preview-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 10px;
}

.image-preview {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.default-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.rounded-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.file-input-container {
    text-align: center;
}

.file-label {
    display: inline-block;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.file-label:hover {
    background-color: #45a049;
}

#fileInput {
    display: none;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
</style>