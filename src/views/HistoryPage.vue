<script>
import { mapState } from "vuex";

export default {
    methods: {
        handleClickDelete(locationId){
            this.$store.commit('deleteWeather',locationId)
        }
    },
    computed: {
    ...mapState(["location", "locations"]),
    },
}

</script>

<template>
    <div class="container">
        <div class="laptop">
            <div class="container-info">
                <div v-for="location in $store.state.locations" v-if="$store.state.location !== null" :key="location.id" class="info">
                    <h2 class="title">{{location.name}}</h2>
                    <button @click="handleClickDelete(location.id)" class="button"></button>
                </div>
            </div>
        </div>
      </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.laptop
    width: 100%
    padding: 20px
    background-color: #0e100f
    border-radius: 25px
    min-height: 670px

.container-info
    display: grid
    gap: 10px
    grid-template-columns: repeat(auto-fit, minmax(150px, 0))
    padding: 0

.info
    height: 100%
    padding: 16px
    background: url(/src/assets/img/gradient-1.jpg) no-repeat 50% 50%
    background-size: cover
    border-radius: 25px
    max-width: 200px
    display: flex
    align-items: center
    justify-content: space-between

.title
    font-size: 1rem
    line-height: 2rem
    margin: 0

.button
    border: none
    background: url(/src/assets/img/delete.svg) no-repeat 50% 50%
    cursor: pointer
    background-size: contain
    padding: 0
    width: 20px
    height: 20px
</style>