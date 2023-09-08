<script>
import WeatherSummary from '../components/WeatherSummary.vue';
import Highlights from '../components/Highlights.vue';
import { mapState } from "vuex";

export default {
  data() {
    return {
      city: ""
    };
  },
  components: {
    WeatherSummary,
    Highlights,
  },
  methods: {
    handleClickWeater() {
      if (this.city !== "") {
        this.$store.dispatch("getCurrentWeather", this.city);
      }
    },
  },
  mounted() {
    if (!this.location || !this.location.name) {
      this.city = "Moscow";
      this.handleClickWeater();
    }
  },
  computed: {
  ...mapState(["location", "locations"]),
  },
}
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="laptop">
        <div class="sections">
          <section class="section section-left">
            <div class="info">
              <div class="city-inner">
                <input type="text" class="search" v-model="city" @keydown.enter="handleClickWeater">
              </div>
              <WeatherSummary :location="location" />
            </div>
          </section>
          <section class="section section-right">
            <Highlights :location="location" />
          </section> 
        </div>
        <div class="sections">
          <section class="section-bottom">
            <div
              class="block-bottom"
            >
              <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-coords"></div>
                <div class="block-bottom-texts">
                  <div class="block-bottom-text-block">
                    <div class="block-bottom-text-block-title">
                      Longitude: {{ location?.coord.lat }}
                    </div>
                    <div class="block-bottom-text-block-desc">
                      Longitude measures distance east or west of the prime meridian.
                    </div>
                  </div>
                  <div class="block-bottom-text-block">
                    <div class="block-bottom-text-block-title">
                      Latitude: {{ location?.coord.lon }}
                    </div>
                    <div class="block-bottom-text-block-desc">
                      Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section-bottom">
            <div
              class="block-bottom"
            >
              <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-humidity"></div>
                <div class="block-bottom-texts">
                  <div class="block-bottom-text-block">
                    <div class="block-bottom-text-block-title">
                      Humidity: {{ location?.main.humidity }}
                    </div>
                    <div class="block-bottom-text-block-desc">
                      Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.
                      <br /><br />
                      The same amount of water vapor results in higher relative humidity in cool air than warm air.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%
  gap: 10px

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('../assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('../assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>