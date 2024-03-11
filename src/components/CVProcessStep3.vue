<template>
    <h1 class="title"> About You </h1>

    <div class="center">
        <!-- Personality Type Dropdown -->
        <Dropdown v-model="selectedPersonality" :options="groupedPersonalities" optionLabel="label"
            optionGroupLabel="type" optionGroupChildren="items" placeholder="Select a Personality Type"
            class="w-full md:w-14rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <div>{{ slotProps.option.type }}</div>
                </div>
            </template>
        </Dropdown>
    </div>

    <!-- Work Experience Form -->
    <div v-for="(experience, index) in workExperiences" :key="index" class="experience-container flex justify-center">
        <h2 style="padding-bottom: 3%;">Work Experience {{ index + 1 }}</h2>
        <div class="">
            <InputText v-model="experience.jobTitle" placeholder="Job Title" class="input-field" />
            <div class="date-fields">
                <Calendar v-model="experience.startDate" placeholder="Start Date" class="input-field" style="margin-right: 1rem;" />
                <Calendar v-model="experience.endDate" placeholder="End Date" class="input-field" />
            </div>
            <textarea v-model="experience.jobDescription" rows="3" placeholder="What you did in the job"
                class="input-field"></textarea>
            <textarea v-model="experience.favoriteMemory" rows="3" placeholder="Favorite Memory"
                class="input-field"></textarea>
            <InputMask v-model="experience.referencePhoneNumber" mask="+999 999 9999"
                placeholder="Reference Phone Number" class="input-field" />
            <button @click="removeExperience(index)" class="remove-button">Remove</button>
        </div>
    </div>
    <div class="center">
    <Button @click="addExperience">Add More Job Experience</Button>
    </div>


</template>

<script setup>
import { ref } from "vue";

const selectedPersonality = ref();
const groupedPersonalities = ref([
    {
        type: 'Analysts',
        items: [
            { label: 'INTJ - Architect', value: 'INTJ' },
            { label: 'INTP - Logician', value: 'INTP' },
            { label: 'ENTJ - Commander', value: 'ENTJ' },
            { label: 'ENTP - Debater', value: 'ENTP' }
        ]
    },
    {
        type: 'Diplomats',
        items: [
            { label: 'INFJ - Advocate', value: 'INFJ' },
            { label: 'INFP - Mediator', value: 'INFP' },
            { label: 'ENFJ - Protagonist', value: 'ENFJ' },
            { label: 'ENFP - Campaigner', value: 'ENFP' }
        ]
    },
    {
        type: 'Sentinels',
        items: [
            { label: 'ISTJ - Inspector', value: 'ISTJ' },
            { label: 'ISFJ - Defender', value: 'ISFJ' },
            { label: 'ESTJ - Executive', value: 'ESTJ' },
            { label: 'ESFJ - Consul', value: 'ESFJ' }
        ]
    },
    {
        type: 'Explorers',
        items: [
            { label: 'ISTP - Virtuoso', value: 'ISTP' },
            { label: 'ISFP - Adventurer', value: 'ISFP' },
            { label: 'ESTP - Entrepreneur', value: 'ESTP' },
            { label: 'ESFP - Entertainer', value: 'ESFP' }
        ]
    }
]);

const workExperiences = ref([
    {
        jobTitle: "",
        startDate: null,
        endDate: null,
        jobDescription: "",
        favoriteMemory: "",
        referencePhoneNumber: ""
    }
]);

const addExperience = () => {
    workExperiences.value.push({
        jobTitle: "",
        startDate: null,
        endDate: null,
        jobDescription: "",
        favoriteMemory: "",
        referencePhoneNumber: ""
    });
};

const removeExperience = (index) => {
    workExperiences.value.splice(index, 1);
};

</script>

<style scoped>
.center {
    margin-left: 5%;
}

.p-float-label input,
.p-dropdown {
    padding: 0.7rem;
    width: 60dvh;
}

.p-float-label,
.p-dropdown {
    margin: 2rem;
}


.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
}


.experience-container {
    margin: 11rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-field {
    padding: 0.8rem;
    width: 100%;
    margin-bottom: 20px;

}

.date-fields {
    display: flex;
    justify-content: space-between;
}

.remove-button {
    background-color: #ff4d4f;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
}

.add-button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 20px;
}

@media only screen and (max-width: 768px) {

    .p-float-label input {
        width: 100%;
        margin: 0;
        padding: 0.8rem;
    }

    .p-dropdown {
        width: 80%;
        margin-left: 10%;
        padding: 0.4rem;
    }

    .center {
        margin-left: 0%;
    }
}
</style>
