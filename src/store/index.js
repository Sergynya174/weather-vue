import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    location: null,
  },
  mutations: {
    async getCurrentWeather(state, obj) {
      state.location = await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}weather?q=${obj.city}&appid=${process.env.VUE_APP_API_KEY}&lang=ru&units=metric`
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    deleteWeather(state, id) {
      if (state.location.id === id) {
        state.splice(i, 1);
      }
    },
  },
  actions: {},
  getters: {},
});

export default store;
