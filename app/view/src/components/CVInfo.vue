<template>
    <div class="wrapper">
        <div class="header-container">
        <h1>{{ username }}</h1>
        <div>
            <SpeedDial :model="items" direction="down" showIcon="pi pi-ellipsis-v" hideIcon="pi pi-ellipsis-h"
                :tooltipOptions="{ position: 'left' }" />
        </div>
    </div>
    <div class="video-container">
        <Video :videomp4="videoUrl"></Video>
    </div>
    <div class="work-experience-container">
        <h1>About me</h1>
        <ScrollPanel class="scroll-panel">
            {{ aboutMe }}
        </ScrollPanel>
    </div>
    </div>


    <!-- Share CV Popup -->
    <Dialog v-model:visible="sharingDialogue" modal header="Share CV" :style="{ width: '25rem' }">
        <div class="center">
            <!-- qr code needs to be generated -->
            <img src="/src/assets/qr_placeholder.png" alt="QR Code" />
            <br> <br>
            <!-- @click the button should open sharing options -->
            <Button type="button" label="Share Link" severity="primary"></Button>
            <br>
        </div>
    </Dialog>
    <!-- Privacy Popup -->
    <Dialog v-model:visible="privacyDialogue" modal header="CV Privacy" :style="{ width: '25rem' }">
        <div class="center">
            <ToggleButton v-model="privacyChecked" onLabel="Private" offLabel="Public" onIcon="pi pi-lock"
                offIcon="pi pi-lock-open" class="w-9rem" aria-label="Do you confirm" />
        </div>
    </Dialog>
    
    <!-- Delete Popup -->
    <ConfirmDialog></ConfirmDialog>


</template>

<script setup>
import { ref } from 'vue';
import WorkExperience from '@/components/WorkExp.vue';
import Video from '@/components/Video.vue';
import video from '../assets/TestVideo.mp4'
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { jwtDecode } from 'jwt-decode'; 

const confirm = useConfirm();
const toast = useToast();

// the actual data needs to come from the db (from whatever the user put in the CV Process)
const aboutMe = `Hi there! I'm Joe, a proud resident of the stunning landscapes of Kerry, where the rolling green hills inspire my passion for farming. With roots deeply embedded in this rich agricultural region, I find joy in cultivating the land and nurturing life from seed to harvest. Whether it's tending to crops or caring for livestock, there's an undeniable connection to the earth that fuels my spirit. When I'm not knee-deep in soil, you'll likely find me exploring the countryside or sharing stories over a cup of tea. Farming isn't just a livelihood for me; it's a way of life that I cherish every day.`;
const videoUrl = video
var username = 'username'; // Placeholder username

const token = localStorage.getItem('token');
var decoded = jwtDecode(token).username;

if (token && decoded) {
  decoded = toTitleCase(decoded);
  username = decoded;
}

function toTitleCase(str) {
  return str.replace(/\b(\w)/g, function(match, capture) {
    return capture.toUpperCase();
  });
}

//SpeedDial menu 
const sharingDialogue = ref(false);

const privacyDialogue = ref(false);
const privacyChecked = ref(false);

const deleteCV = () => {
    confirm.require({
        message: 'Do you want to delete your CV?',
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'CV deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const items = ref([
    {
        label: 'Edit CV',
        icon: 'pi pi-file-edit',
        command: () => {
            //edit cv menu opens
        }
    },
    {
        label: 'Share CV',
        icon: 'pi pi-share-alt',
        command: () => {
            sharingDialogue.value = true;
        }
    },
    {
        label: 'Privacy',
        icon: 'pi pi-lock',
        command: () => {
            privacyDialogue.value = true;
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            deleteCV();
        }
    },

])

</script>

<style lang="scss" scoped>
.wrapper{
    padding-left: 2rem;
    padding-right: 2rem;

}
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.header-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.video-container {
    padding-top: 1rem;
}


.work-experience-container {
    padding: 1.5rem;
    border-radius:  0px 0px 25px 25px;
    background-color: #e3e3e367; //should be decided based on the colour the user picked
}

.scroll-panel {
    padding: 0.5rem;
    width: 100%;
    max-height: 50dvh;
    overflow: auto;
}

.scroll-panel::-webkit-scrollbar {
    width: 8px;
}

.scroll-panel::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    background-clip: padding-box;
    border: 2px solid transparent;
}

.scroll-panel::-webkit-scrollbar-track {
    background-color: #a8a8a8;
}

:deep(.p-speeddial-button) {
    background-color: #fbeee000;
    color: black;
    border-color: transparent;
}

:deep(.p-speeddial-action) {
    background-color: #ffffff;
}

@media (max-width: 767px) {

    .header-container {
        max-width: 96dvw;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .video-container {
        padding-top: 0rem;
        padding-bottom: 0.1rem;
        min-width: 90dvw;
    }

    :deep(.p-card .p-card-body) {
        padding: 0rem;
    }

    .work-experience-container {
        padding: 1.5rem;
    }

    .scroll-panel {
        width: 100%;
        max-height: 30dvh;
    }

}
</style>
