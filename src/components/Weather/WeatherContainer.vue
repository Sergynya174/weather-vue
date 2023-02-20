<template>
    <div class="p-5">
        <h1 class="text-5xl">{{title}}</h1>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 my-5">
            <WeatherCard />
        </div>
    </div>
</template>

<script>
    import WeatherCard from '@/components/Weather/WeatherCard.vue'
    export default {
        data() {
            return {
                title: "Погода"
            }
        },
        components: {
            WeatherCard
        },
    }
</script>