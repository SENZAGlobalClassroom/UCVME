<template>
    <div class="wallet-controls">
        <button class="wallet-control-button" @click="openSettings">
            <i class="pi pi-cog" style="font-size: 2rem;"></i>
        </button>
        <button class="wallet-control-button" @click="showDialog = true">
            <i class="pi pi-plus" style="font-size: 2rem;"></i>
        </button>
    </div>
    <div class="collections-grid">
        <div class="collection" v-for="collection in collections" :key="collection.id">
            <div class="collection-images">
                <div class="image primary"
                    :style="{ backgroundImage: collection.cvs.length > 0 ? 'url(' + collection.cvs[0].stillImage + ')' : '' }">
                    <div v-if="collection.cvs.length === 0" class="placeholder"></div>
                </div>
                <div class="side-images">
                    <div class="image secondary"
                        :style="{ backgroundImage: collection.cvs.length > 1 ? 'url(' + collection.cvs[1].stillImage + ')' : '' }">
                        <div v-if="collection.cvs.length < 2" class="placeholder"></div>
                    </div>
                    <div class="image secondary"
                        :style="{ backgroundImage: collection.cvs.length > 2 ? 'url(' + collection.cvs[2].stillImage + ')' : '' }">
                        <div v-if="collection.cvs.length < 3" class="placeholder"></div>
                    </div>
                </div>
            </div>
            <div class="collection-info">
                <h3 class="collection-title">{{ collection.name }}</h3>
                <button v-if="collection.id !== 0" class="edit-button" @click="openEditDialog(collection)">
                    <i class="pi pi-pencil" style="font-size: 1rem;"></i>
                </button>
                <p class="collection-details">{{ collection.cvs.length }} Saved</p>
            </div>
        </div>
    </div>

    <!-- Add new collection popup -->
    <Dialog v-model:visible="showDialog" header="Add New Collection" :style="{ width: '35rem' }">
        <div class="dialog-content">
            <div>
                <label>Collection Name:</label>
                <InputText class="input-text" v-model="newCollectionName" placeholder="Enter collection name" />
            </div>

            <div class="button-container">
                <Button type="button" label="Save" @click="addNewCollection"></Button>
            </div>
        </div>
    </Dialog>

    <!-- Edit collection popup -->
    <Dialog v-model:visible="showEditDialog" header="Edit Collection" :style="{ width: '35rem' }">
        <div class="dialog-content">
            <div>
                <label for="editCollectionName">Collection Name:</label>
                <InputText class="input-text" v-model="editCollectionName" placeholder="Enter new collection name" />
            </div>

            <div class="button-container">
                <Button type="button" label="Save Changes" @click="saveChanges"></Button>
                <Button type="button" label="Delete Collection" severity="danger" @click="deleteCollection"></Button>
            </div>
        </div>
    </Dialog>

    <Toast />
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import PropTypes from 'vue-types';
import { useToast } from 'primevue/usetoast';

const openSettings = () => {
    //settings button
};

//add colection dialogue logic
const showDialog = ref(false);
const newCollectionName = ref('');
const toast = useToast();
const emit = defineEmits(['add-collection']);

const addNewCollection = () => {
    if (newCollectionName.value.trim()) {
        emit('add-collection', newCollectionName.value);

        toast.add({ severity: 'success', summary: 'Success', detail: 'Collection added' });
        newCollectionName.value = '';
        showDialog.value = false;
    } else {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please enter a collection name' });
    }
};


//Edit dialogue logic
const showEditDialog = ref(false);
const editCollectionName = ref('');
const editingCollectionId = ref(null);

const props = defineProps({
    collections: PropTypes.array.isRequired
});

const openEditDialog = (collection) => {
    editingCollectionId.value = collection.id;
    editCollectionName.value = collection.name;
    showEditDialog.value = true;
};

const saveChanges = () => {
    const newName = editCollectionName.value.trim();
    if (newName) {
        emit('update-collection', { id: editingCollectionId.value, name: newName });
        toast.add({ severity: 'success', summary: 'Success', detail: 'Collection updated',life: 3000 });
    }
    showEditDialog.value = false;
};

const deleteCollection = () => {
    emit('delete-collection', editingCollectionId.value);
    toast.add({ severity: 'success', summary: 'Success', detail: 'Collection deleted',life: 3000 });
    showEditDialog.value = false;
};

</script>

<style scoped>
.wallet-controls {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.wallet-control-button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
}

.collections-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding: 10px;
}

.collection {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 18dvw;
}

.collection:hover {
    transform: translateY(-5px);
}

.collection-images {
    display: flex;
}

.image {
    background-size: cover;
    background-position: center;
}

.primary {
    flex: 1;
    height: 10rem;
}

.side-images {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.image.secondary {
    flex: 1;
}

.placeholder {
    background-color: #ccc;
    height: 100%;
}

.collection-info {
    padding: 15px;
}

.collection-title {
    font-size: 1.2rem;
    margin: 0;
    color: #333;
}

.collection-details {
    font-size: 0.9rem;
    color: #666;
}

.edit-button {
    margin-left: 85%;
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    font-size: 1rem;
}

.dialog-content label {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.dialog-content div {
    width: 100%;
    display: flex;
    align-items: center;
}

.button-container {
    padding: 1rem;
    justify-content: space-between;
}

.input-text {
    width: 90%;
    margin: 0 auto;
}

.p-dialog .p-button {
    margin: 0.5rem;
}

@media (max-width: 1200px) {
    .collections-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .collection {
        min-width: 24dvw;
    }

}

@media (max-width: 768px) {
    .collections-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .collection {
        min-width: 38dvw;
    }

}

@media (max-width: 700px) {
    .collections-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .collection {
        min-width: 45dvw;
    }
}

@media (max-width: 468px) {
    .collections-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .collection {
        min-width: 90dvw;
    }
}
</style>
