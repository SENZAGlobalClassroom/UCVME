<template>
    <div class="gray-background">
        <RouterLink to="/">Home</RouterLink>
        <TopBarFT></TopBarFT>
        <Steps :model="items" :readonly="false" />

        <Card>
            <template #content>
                <h1 class="title"> Basic Information</h1>                
                <FloatLabel size="large">
                    <InputText id="firstname" v-model="value" class="InputText"/>
                    <label for="firstname">First Name</label>
                </FloatLabel>

                <FloatLabel>
                    <InputText id="lastname" v-model="value" class="InputText" />
                    <label for="lastname">Last Name</label>
                </FloatLabel>

                <FloatLabel>
                    <InputText id="phone" v-model="value" class="InputText" />
                    <label for="phone">Phone Number</label>
                </FloatLabel>

                <FloatLabel>
                    <InputText id="email" v-model="value" class="InputText"/>
                    <label for="email">Email</label>
                </FloatLabel>

                <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name"
                    placeholder="Select a Country" class="w-full md:w-14rem">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <img :alt="slotProps.value.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Dropdown>
            </template>

            <template #footer>
                <div class="Buttons">
                    <Button label="Continue" class="w-full" rounded  />
                </div>
            </template>
        </Card>

        <Footer></Footer>
    </div>

</template>

<script setup>
import { ref } from "vue";
const value = ref();
const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const items = ref([
    {
        label: 'Basic Information'
    },
    {
        label: 'Colour Scheme'
    },
    {
        label: 'About You'
    },
    {
        label: 'Video'
    }
]);

</script>

<style scoped>
.gray-background {
    padding: 1rem;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_11.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.p-card {
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    background-color: rgba(255, 255, 255, 0.792);
}

.p-float-label input, .p-dropdown{
    padding: 0.7rem;
    width: 50dvh;
}

.p-float-label,.p-dropdown	{
    margin: 2rem;
}

.Buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.p-button {
    padding: 1rem;
}

:deep .p-steps .p-steps-item .p-menuitem-link{
    background-color: transparent !important;
}


@media only screen and (max-width: 768px) {
    .p-card {
        margin-left: 0%;
        width: 100%;
        padding: 1rem;
    }

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
}
</style>

