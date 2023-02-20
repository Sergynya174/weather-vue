<template>
    <div v-for="location in $store.state.locations" v-if="$store.state.location !== null" class="w-64 border-solid border-2 rounded p-2">
        <h2 class="mb-2 text-3xl font-thin">{{ location?.name }}, {{ location?.sys.country }}</h2>
        <p class="mb-2 text-xl font-thin">{{ dateBuilder() }}</p>
        <div class="flex justify-between mb-2">
            <img :src="imageBuilder(location)" class="w-24 h-24 m-0"/>
            <p class="text-5xl font-medium my-auto">{{Math.round(location?.main.temp)}}&deg;C</p>
        </div>
        <p class="mb-2 text-base font-medium">Чувствуется, что {{Math.round(location?.main.feels_like)}}&deg;C.</p>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex">
                <img :src="icon[2]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">{{location?.wind.speed}}m/s</p>
            </div>
            <div class="flex">
                <img :src="icon[0]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">{{location?.main.pressure}}hPa</p>
            </div>
            <div class="flex">
                <img :src="icon[3]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">Влажность: {{location?.main.humidity}}%</p>
            </div>
            <div class="flex">
                <img :src="icon[1]" class="w-6 h-6 mr-2"/>
                <p class="text-xs">Видимость: {{Math.round(location?.visibility / 1000)}}km</p>
            </div>
        </div>
    </div>
</template>

<script>
    import img1 from '@/assets/cloudy.png'
    import img2 from '@/assets/foog.png'
    import img3 from '@/assets/snowy.png'
    import img4 from '@/assets/sun.png'
    import img5 from '@/assets/cloud.png'
    import img6 from '@/assets/rain.png'
    import icon1 from '@/assets/atmospheric.png'
    import icon2 from '@/assets/visibility.png'
    import icon3 from '@/assets/wind-socket.png'
    import icon4 from '@/assets/drops.png'
    export default {
        data() {
            return {
                apiKey: process.env.VUE_APP_API_KEY,
                baseURL: process.env.VUE_APP_BASE_URL,
                city: '',
                icon: [icon1, icon2, icon3, icon4]
            }
        },
        methods: {
            dateBuilder() {
                let d = new Date();
                let months = [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь",
                ];
                let date = d.getDate();
                let month = months[d.getMonth()];
                let year = d.getFullYear();
                return `${date} ${month} ${year}`;
            },
            imageBuilder({weather}) {
                const weatherMain = weather[0].description
                if(weatherMain === 'пасмурно'){
                    return img5
                } else if(weatherMain === 'облачно с прояснениями'){
                    return img1
                } else if(weatherMain === 'ясно'){
                    return img4
                } else if(weatherMain === 'небольшой проливной дождь'){
                    return img6
                } else if(weatherMain === 'небольшой снег'){
                    return img3
                } else if(weatherMain === 'туман'){
                    return img2
                }
            }
        }
    }
</script>