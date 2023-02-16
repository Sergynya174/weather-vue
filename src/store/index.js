import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    location: null,
    locations: [],
  },
  mutations: {
    async getCurrentWeather(state, city) {
      state.location = await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}weather?q=${city}&appid=${process.env.VUE_APP_API_KEY}&lang=ru&units=metric`
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
      state.locations.unshift(state.location);
    },
    deleteWeather(state, id) {
      state.locations = state.locations.filter((item) => item.id !== id);
    },
  },
  actions: {},
  getters: {},
});

export default store;
