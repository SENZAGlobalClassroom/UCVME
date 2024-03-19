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
        <div class="experience-header">
            <h2 style="padding-bottom: 3%;">Work Experience {{ index + 1 }}</h2>
            <button @click="removeExperience(index)" class="remove-button"><i class="pi pi-times"
                    style="font-size: 1.5rem"></i>
            </button>
        </div>
        <div class="">
            <InputText v-model="experience.jobTitle" placeholder="Job Title" class="input-field" />
            <div class="center">
                <Dropdown v-model="experience.selectedCategory" :options="jobCategories" filter optionLabel="label"
                    placeholder="Select a Job Category" class="w-full md:w-14rem">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <div>{{ slotProps.value.label }}</div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <div class="date-fields">
                <Calendar v-model="experience.startDate" placeholder="Start Date" class="input-field"
                    style="margin-right: 1rem;" />
                <Calendar v-model="experience.endDate" placeholder="End Date" class="input-field" />
            </div>
            <textarea v-model="experience.jobDescription" rows="3" placeholder="Describe your work"
                class="input-field"></textarea>
            <textarea v-model="experience.favoriteMemory" rows="3" placeholder="Write about your favorite memory"
                class="input-field"></textarea>
            <InputMask v-model="experience.referencePhoneNumber" mask="+999 999 9999"
                placeholder="Reference Phone Number" class="input-field" />
        </div>
        <Divider></Divider>
    </div>
    <div class="center">
        <Button @click="addExperience" class="underline-text">Click to add more work experiences</Button>
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

const jobCategories = ref([
    { label: 'Technology', value: 'technology' },
    { label: 'Finance', value: 'finance' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
    { label: 'Education', value: 'education' },
    { label: 'Human Resources', value: 'hr' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Customer Service', value: 'customer-service' },
    { label: 'Research', value: 'research' },
    { label: 'Legal', value: 'legal' },
    { label: 'Real Estate', value: 'real-estate' },
    { label: 'Design', value: 'design' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Transportation', value: 'transportation' },
    { label: 'Non-profit', value: 'non-profit' },
    { label: 'Telecommunications', value: 'telecom' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Environment', value: 'environment' },
    { label: 'Other', value: 'other' },
]);

const workExperiences = ref([
    {
        selectedCategory: null,
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
        selectedCategory: null,
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
    margin-left: 1%;
}

.p-float-label input,
.p-dropdown {
    width: 58dvh;
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
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 20px;

}

.date-fields {
    display: flex;
    justify-content: space-between;
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.remove-button {
    background-color: #ff4d5000;
    color: #1f1f1f;
    border: none;
    padding: 8px;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 10px;
}

.underline-text {
    text-decoration: underline;
    background-color: transparent;
    color: #000;
    border: none;
}


@media only screen and (max-width: 768px) {

    .p-float-label input {
        width: 90%;
        margin: 0;
        padding: 0.8rem;
    }

    .center {
        margin-left: 0%;
    }

    .experience-container {
        margin: 0rem;
    }

    .p-float-label input,
    .p-dropdown {
        width: 39dvh;
    }
}
</style>
