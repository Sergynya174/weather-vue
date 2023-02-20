<template>
    <div v-for="location in $store.state.locations" v-if="$store.state.location !== null" class="flex bg-slate-200 min-w-lg h-24 items-center justify-around">
        <button class="bg-[url('@/assets/burger-menu.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
        <h2 class="mb-2 text-3xl font-thin">{{ location?.name }}</h2>
        <button @click="handleClickDelete" class="bg-[url('@/assets/bin.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
    </div>
</template>

<script>
    export default {
            methods: {
                handleClickDelete(){
                    this.$store.commit('deleteWeather', this.$store.state.location.id)
                }
            }
        }
</script>