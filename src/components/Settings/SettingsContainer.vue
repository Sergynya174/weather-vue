<template>
    <div class="p-5">
        <h1 class="text-5xl">{{ title }}</h1>
        <div class="grid grid-cols-4 auto-cols-auto gap-4 my-10">
            <SettingsCard />
            <SettingsCard />
            <SettingsCard />
            <SettingsCard />
        </div>
        <div class="flex">
            <p class="mr-10 text-2xl">Добавить местоположение:</p>
            <div class="flex items-center border-b-2 border-solid w-2/4">
                <input class="w-full ml-3 outline-none" v-model="location" />
                <button @click="" class="bg-[url('@/assets/add.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
            </div>
        </div>
    </div>
</template>

<script>
    import SettingsCard from '@/components/Settings/SettingsCard.vue'
    export default {
        data: function(){
            return {
                location: '',
                title: "Настройки",
                showCard: true
            }
        },
        methods: {
            handleShowClick(){
                this.showCard = !this.showCard
            }
        },
        components: {
            SettingsCard
        },
    }
</script>