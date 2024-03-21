<template>
    <div class="work-experience">
        <h3 style="float: right; padding-left: 1rem;"> {{ startDate }} - {{ endDate }}</h3>
        <h3>{{ jobTitle }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    jobTitle: String,
    description: String,
    startDate: String,
    endDate: String
})

</script>

<style scoped>
.work-experience {
    margin-bottom: 2rem;
}
</style>