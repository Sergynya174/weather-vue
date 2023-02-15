<template>
    <div v-if="$store.state.location !== null" class="flex bg-slate-200 min-w-lg h-24 items-center justify-around">
        <button @click="" class="bg-[url('@/assets/burger-menu.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
        <h2 class="mb-2 text-3xl font-thin">{{ $store.state.location.name }}</h2>
        <button v-on:click="$store.commit('deleteWeather', $store.state.location.id)" class="bg-[url('@/assets/bin.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
    </div>
</template>

<script>
</script>