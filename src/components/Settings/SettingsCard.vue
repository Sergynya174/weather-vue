<template>
    <div  class="flex bg-slate-200 min-w-lg h-24 items-center justify-around">
        <button @click="" class="bg-[url('@/assets/burger-menu.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
        <h2 class="mb-2 text-3xl font-thin">{{ title }}</h2>
        <button class="bg-[url('@/assets/bin.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                title: "Лондон",
            }
        },
    }
</script>