import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    location: null,
    locations: [],
  },
  mutations: {
    setCurrentWeather(state, weather) {
      state.location = weather;
      state.locations.unshift(weather);
    },
    deleteWeather(state, id) {
      state.locations = state.locations.filter((item) => item.id !== id);
    },
  },
  actions: {
    async getCurrentWeather({ commit }, city) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}weather?q=${city}&appid=${
            import.meta.env.VITE_APP_API_KEY
          }&units=metric`
        );
        commit("setCurrentWeather", response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});

export default store;
