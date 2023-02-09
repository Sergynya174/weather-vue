<template>
    <div class="p-5">
        <h1 class="text-5xl">{{title}}</h1>
        <div class="grid grid-cols-4 auto-cols-auto gap-4 my-5">
            <WeatherCard />
        </div>
    </div>
</template>

<script>
    import WeatherCard from '@/components/Weather/WeatherCard.vue'
    export default {
        data: function(){
            return {
                title: "Погода"
            }
        },
        components: {
            WeatherCard
        },
    }
</script>