<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <img alt="UCVME logo" class="logo" src="@/assets/UCVME_logo-removebg-preview.png" width="300" height="125" />

        <div class="wrapper">
            <p>This is /home, here are shortcut dev links, we need to implement the routing logic after all the pages are done:
            </p>
            <ul>
                <li>when user opens page for the first time -> Login Page</li>
                <li>When user is already logged in -> Home page</li>
                <li>After sign up user is redirected to -> CV process page</li>
            </ul>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/cvProcess">CV Process</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">Login</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/signup">Sign Up</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

</template>