<template>
    <div class="wrapper">
        <div class="header-container">
        <h1>{{ firstname }} {{ lastname }}</h1>
        <div>
            <SpeedDial :model="items" direction="down" showIcon="pi pi-ellipsis-v" hideIcon="pi pi-ellipsis-h"
                :tooltipOptions="{ position: 'left' }" />
        </div>
    </div>
    <div class="video-container">
        <Video :videomp4="videoUrl"></Video>
    </div>
    <div class="work-experience-container">
        <h1>Work Experience</h1>
        <ScrollPanel class="scroll-panel">
            <WorkExperience v-for="(experience, index) in workExperiences" :key="index" :jobTitle="experience.jobTitle"
                :description="experience.description" :startDate="experience.startDate" :endDate="experience.endDate" />
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

const confirm = useConfirm();
const toast = useToast();

// the actual data needs to come from the db (from whatever the user put in the CV Process)
const workExperiences = ref([
    {
        jobTitle: "Pet Sitter",
        description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
        startDate: "10/03/23",
        endDate: "20/03/23"
    },
    {
        jobTitle: "Pet Sitter",
        description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
        startDate: "10/03/23",
        endDate: "20/03/23"
    },
    {
        jobTitle: "Pet Sitter",
        description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
        startDate: "10/03/23",
        endDate: "20/03/23"
    },
    {
        jobTitle: "Pet Sitter",
        description: "I have worked previously as a pet sitter for my friend Anna. She was gone on a holiday to France for 2 weeks and I had the pleasure to take care of her 3 lovely cats, Samuel, Candy and Lilly. I played with them every day for 1 hour before their morning meal. I made sure they have fresh water and are brushed daily. I also clipped their nails and made sure their toilet is always clean. See the cute pictures I took of them. I also sent daily updates to Anna with video and pictures of her babies happy.",
        startDate: "10/03/23",
        endDate: "20/03/23"
    },
]);

const videoUrl = video

const firstname = "Linda"
const lastname = "Smith"

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

:deep .p-speeddial-button {
    background-color: #fbeee000;
    color: black;
    border-color: transparent;
}

:deep .p-speeddial-action {
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

    :deep .p-card .p-card-body {
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
