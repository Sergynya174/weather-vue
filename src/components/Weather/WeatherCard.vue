<template>
    <div class="max-w-xs border-solid border-2 rounded p-2">
        <h2 class="mb-2 text-3xl font-thin">{{ weather.name }}</h2>
        <div class="flex justify-between mb-2">
            <img :src="image" class="w-24 h-24 m-0"/>
            <p class="text-5xl font-medium my-auto">{{Math.round(weather.main?.temp)}}&deg;C</p>
        </div>
        <p class="mb-2 text-base font-medium">Чувствуется, что {{Math.round(weather.main?.feels_like)}}&deg;C.</p>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex">
                <img :src="icon[2]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">{{weather.wind?.speed}}m/s</p>
            </div>
            <div class="flex">
                <img :src="icon[0]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">{{weather.main?.pressure}}hPa</p>
            </div>
            <div class="flex">
                <img :src="icon[3]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">Влажность: {{weather.main?.humidity}}%</p>
            </div>
            <div class="flex">
                <img :src="icon[1]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">Видимость: {{Math.round(weather.visibility / 1000)}}km</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import img1 from '@/assets/cloudy.png'
    import img2 from '@/assets/foog.png'
    import img3 from '@/assets/snowy.png'
    import img4 from '@/assets/sun.png'
    import icon1 from '@/assets/atmospheric.png'
    import icon2 from '@/assets/visibility.png'
    import icon3 from '@/assets/wind-socket.png'
    import icon4 from '@/assets/drops.png'
    export default {
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                baseURL: process.env.VUE_APP_BASE_URL,
                city: 'London',
                weather: {},
                image: img1,
                icon: [icon1, icon2, icon3, icon4]
            }
        },
        created(){
            this.getCurrentWeather();
        },
        methods: {
            getCurrentWeather(){
            axios.get(`${this.baseURL}weather?q=${this.city}&appid=${this.apiKey}&lang=ru&units=metric`).then(res => {
                this.weather = res.data
            }).catch(err => console.log(err))
            },
        },
    }
</script>