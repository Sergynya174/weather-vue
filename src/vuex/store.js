import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    location: null,
  },
  mutations: {
    SET_LOCATIONS: (state, location) => {
      state.location = location;
    },
  },
  actions: {
    GET_LOCATIONS({ commit }) {
      return axios(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=34ebb765a570b348cfd194085adb08c7&lang=ru&units=metric",
        {
          method: "GET",
        }
      )
        .then((res) => {
          console.log(res);
          commit("SET_LOCATIONS", res);
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  getters: {
    LOCATIONS(state) {
      return state.location;
    },
  },
});

export default store;
