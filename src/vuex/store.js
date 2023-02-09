// import axios from "axios";

// const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
// const apiKey = "34ebb765a570b348cfd194085adb08c7";

// export const getWeatherData = async (items) => {
//   try {
//     const data = await axios.get(
//       baseUrl + `lat=${items.lat}&lon=${items.lon}&appid=${apiKey}`
//     );
//     return data;
//   } catch (err) {
//     throw err;
//   }
//

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.useAttrs(Vuex);

let store = new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, data) => {
      state.data = data;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("https://api.openweathermap.org/data/2.5/weather?", {
        method: "GET",
      })
        .then((data) => {
          commit("SET_PRODUCTS_TO_STATE", data.data);
          return data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.data;
    },
  },
});

export default store;
