<template>
    <div class="gray-background">
        <TopBar></TopBar>
        <Card class="card-container">
            <template #header>
                <h3>History</h3>
            </template>
            <template #content>

            </template>
        </Card>
        <Navbar></Navbar>
    </div>
</template>


<script>

</script>

<style scoped>
.card-container {
    margin: auto;
    margin-top: 2dvw;
    width: 30dvw;
    min-width: 500px;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.53);
    backdrop-filter: blur(5px);
    align-items: center;
}

.gray-background {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 20dvw;
    padding-right: 20dvw;
    background-color: #ededed98;
    background-image: url('@/assets/Pastel_15.png');
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

    .card-container {
        max-width: 500px;
        min-width: 425px;
        width: 75dvw;
    }
}
</style>