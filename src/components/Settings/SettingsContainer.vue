<template>
    <div class="p-5">
        <h1 class="text-5xl">{{ title }}</h1>
        <div class="grid grid-cols-4 gap-4 my-10">
            <SettingsCard :weather="weather" v-for="location in weather"/>
        </div>
        <div class="flex">
            <p class="mr-10 text-2xl">Добавить местоположение:</p>
            <div class="flex items-center border-b-2 border-solid w-2/4">
                <input class="w-full ml-3 outline-none" v-model="city" />
                <button @click="getCurrentWeather" class="bg-[url('@/assets/add.png')] w-4 h-4 bg-no-repeat bg-contain"></button>
            </div>
        </div>
    </div>
</template>

<script>
    import SettingsCard from '@/components/Settings/SettingsCard.vue'
    import axios from 'axios'
    import { toRaw } from 'vue'

    export default {
        data() {
            return {
                title: "Настройки",
                apiKey: process.env.VUE_APP_API_KEY,
                baseURL: process.env.VUE_APP_BASE_URL,
                weather: [],
                city: ''            
            }
        },
        // created(){
        //     this.getCurrentWeather();
        // },
        methods: {
            getCurrentWeather(){
            axios.get(`${this.baseURL}weather?q=${this.city}&appid=${this.apiKey}&lang=ru&units=metric`).then(res => {
                console.log(res.data)
                this.weather = res.data
                console.log(toRaw(this.weather))
            }).catch(err => console.log(err))
            },
        },
        components: {
            SettingsCard
        },
    }
</script>