<template>
    <div class="p-5">
        <h1 class="text-5xl">{{title}}</h1>
        <div class="grid grid-cols-4 gap-4 my-5">
            <WeaterCard />
            <WeaterCard />
            <WeaterCard />
            <WeaterCard />
            <WeaterCard />
            <WeaterCard />
        </div>
    </div>
</template>

<script>
    import WeaterCard from '@/components/Weather/WeatherCard.vue'
    export default {
        data: function(){
        return {
            title: "Weather"
        }
        },
        components: {
            WeaterCard
        },
    }
</script>