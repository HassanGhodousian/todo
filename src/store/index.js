import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
const store = createStore({
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          commit("setTasks", response.data);
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },
    async filterTasks({ commit }, limit) {
      console.log(commit, limit);

      // await axios
      //   .get("https://jsonplaceholder.typicode.com/todos")
      //   .then(function (response) {
      //     commit("setTasks", response.data);
      //   })
      //   .catch(function (error) {
      //     Swal.fire({
      //       title: error,
      //       text: "Do you want to continue",
      //       icon: "error",
      //       confirmButtonText: "Cool",
      //     });
      //   })
      //   .then(function () {
      //     // always executed
      //   });
    },
  },
  modules: {},
});

export default store;
