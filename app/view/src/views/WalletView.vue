<template>
    <div class="gray-background">
        <Card class="card-container">
            <template #header>
                <h3 >Saved CVs</h3>
            </template>
            <template #content>
                <Wallet :collections="collections"></Wallet>
            </template>
        </Card>
        <Navbar></Navbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Wallet from '@/components/Wallet.vue';

//test data imports
import test1 from '@/assets/test1.mp4';
import test2 from '@/assets/test2.mp4';
import test3 from '@/assets/test3.mp4';
import test4 from '@/assets/test4.mp4';

import cat1 from '@/assets/cat1.jpg';
import cat2 from '@/assets/cat2.jpg';
import cat3 from '@/assets/cat3.jpg';
import cat4 from '@/assets/cat4.jpg';

// test data
const collections = ref([
    {
        id: 1,
        name: 'Gardening CVs',
        cvs: [
            {
                id: 'cv1',
                name: 'Erica Lee',
                video: test1,
                stillImage: cat1,
                workExperience: [
                    {
                        jobTitle: 'Hairstylist',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Hairstyle.',
                        memory: 'A client once gave me a tip',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv2',
                name: 'John Doe',
                video: test2,
                stillImage: cat2,
                workExperience: [
                    {
                        jobTitle: 'Gardener',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Maintained and beautified gardens.',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            }
        ]
    },
    {
        id: 2,
        name: 'Pet Sitter CVs',
        cvs: [
            {
                id: 'cv1',
                name: 'Erica Lee',
                video: test1,
                stillImage: cat1,
                workExperience: [
                    {
                        jobTitle: 'Hairstylist',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Hairstyle.',
                        memory: 'A client once gave me a tip',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv2',
                name: 'John Doe',
                video: test2,
                stillImage: cat2,
                workExperience: [
                    {
                        jobTitle: 'Gardener',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Maintained and beautified gardens.',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv3',
                name: 'Amanda Doe',
                video: test3,
                stillImage: cat3,
                workExperience: [
                    {
                        jobTitle: 'Pet Sitter',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Taking care of cats and dogs',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            }
        ]
    },
    {
        id: 3,
        name: 'Artist CVs',
        cvs: [
            {
                id: 'cv1',
                name: 'Erica Lee',
                video: test1,
                stillImage: cat1,
                workExperience: [
                    {
                        jobTitle: 'Hairstylist',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Hairstyle.',
                        memory: 'A client once gave me a tip',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv2',
                name: 'John Doe',
                video: test2,
                stillImage: cat2,
                workExperience: [
                    {
                        jobTitle: 'Gardener',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Maintained and beautified gardens.',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv3',
                name: 'Amanda Doe',
                video: test3,
                stillImage: cat3,
                workExperience: [
                    {
                        jobTitle: 'Pet Sitter',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Taking care of cats and dogs',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv4',
                name: 'Jenny Smith',
                video: test4,
                stillImage: cat4,
                workExperience: [
                    {
                        jobTitle: 'Marketing Expert',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Sales and marketing stuff for businesses',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },

        ]
    },
    {
        id: 4,
        name: 'Musician CVs',
        cvs: [
            {
                id: 'cv1',
                name: 'Erica Lee',
                video: test1,
                stillImage: cat1,
                workExperience: [
                    {
                        jobTitle: 'Hairstylist',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Hairstyle.',
                        memory: 'A client once gave me a tip',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv2',
                name: 'John Doe',
                video: test2,
                stillImage: cat2,
                workExperience: [
                    {
                        jobTitle: 'Gardener',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Maintained and beautified gardens.',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv3',
                name: 'Amanda Doe',
                video: test3,
                stillImage: cat3,
                workExperience: [
                    {
                        jobTitle: 'Pet Sitter',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Taking care of cats and dogs',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },
            {
                id: 'cv4',
                name: 'Jenny Smith',
                video: test4,
                stillImage: cat4,
                workExperience: [
                    {
                        jobTitle: 'Marketing Expert',
                        startDate: '2020-01',
                        endDate: '2021-12',
                        description: 'Sales and marketing stuff for businesses',
                        memory: 'A client once...',
                        referencePhone: '000000'
                    },
                ],
            },

        ]
    }

]);
</script>

<style scoped>
.card-container {
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.808);
    align-items: center;
}

.button-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

.gray-background {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10dvw;
    padding-right: 10dvw;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_13.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}

@media (max-width: 767px) {
    .gray-background {
        padding-top: 0rem;
        padding-bottom: 0rem;
        padding-left: 0dvw;
        padding-right: 0dvw;
    }
}
</style>