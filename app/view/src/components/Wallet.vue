<template>
    <div class="grid-container">
        <Card v-for="collection in collections" :key="collection.id" >
            <template #content>
                <h3 style="text-align: center;">{{collection.name}}</h3>
                <br>
                <div class="grid2x2">
                    <!-- assuming we have stillImage generated from the video upload at the CVProcess -->
                    <img v-for="(cv, index) in collection.cvs.slice(0, 4)" :key="index" :src="cv.stillImage" />
                </div>
            </template>
        </Card>
        <Card class="new-collection-card" @click="addNewCollection">
            <template #content>
                <div class="new-collection-content">
                    <i class="pi pi-plus"></i>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup>
import PropTypes from 'vue-types';

const props = defineProps({
    collections: PropTypes.array.isRequired
});

const addNewCollection = () => {
    //adds a new empty collection to the db
    console.log('Add new collection');
};
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.grid2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
}

.grid2x2 img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
}

.new-collection-card {
    background-color: rgba(239, 239, 239, 0.749);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
}

.new-collection-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pi{
    font-size: 3rem;
}
@media (max-width: 767px) {
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
</style>