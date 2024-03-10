<script setup>
import { RouterLink, RouterView  } from 'vue-router'
</script>

<template>
    <header>
        <img alt="UCVME logo" class="logo" src="@/assets/UCVME_logo-removebg-preview.png" width="300" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/cv">C Process</RouterLink>
            </nav>
        </div>
    </header>

</template>