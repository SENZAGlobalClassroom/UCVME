<template>
    <h1 class="title"> Basic Information</h1>
    <div class="center">
        <FloatLabel size="large">
            <InputText id="firstname" v-model="firstname" class="InputText"
                @change="$emit('firstName', $event.target.value)" />
            <label for="firstname">First Name</label>
        </FloatLabel>
    </div>

    <div class="center">
        <FloatLabel>
            <InputText id="lastname" v-model="lastname" class="InputText"
                @change="$emit('lastName', $event.target.value)" />
            <label for="lastname">Last Name</label>
        </FloatLabel>
    </div>

    <div class="center">
        <FloatLabel>
            <InputMask id="phone" v-model="phone" mask="+999 999 9999" placeholder="(999) 999-9999"
                @change="$emit('phone', $event.target.value)" />
            <label for="phone">Phone Number</label>
        </FloatLabel>

    </div>

    <div class="center">
        <FloatLabel>
            <InputText id="email" v-model="email" class="InputText" 
                @change="$emit('email', $event.target.value)" />
            <label for="email">Email</label>
        </FloatLabel>
    </div>

    <div class="center">
        <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name"
            placeholder="Select a Country" class="w-full md:w-14rem"
            @change="$emit('country', $event.value)" >
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
    </div>

</template>

<script setup>
import { ref } from "vue";

const firstname = ref("");
const lastname = ref("");
const phone = ref("");
const email = ref("");
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

</script>

<style scoped>
.center {
    margin-left: 15%;
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
    padding: 1rem;
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
