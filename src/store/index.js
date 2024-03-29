import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*  */
    tasks: [
      {
        id: 1,
        title: "Make Burger",
        done: false,
      },
      {
        id: 2,
        title: "Make Hot Dog",
        done: false,
      },
      {
        id: 3,
        title: "Make Chamusa",
        done: false,
      },
    ],
    /*  */
    editTemp: null,
    editTempState: false,
  },
  getters: {},
  mutations: {
    /*  */
    inserir(state, title) {
      if (title) {
        let i = Number(state.tasks.length);

        state.tasks.push({
          id: i + 1,
          title,
          done: false,
        });
      }
    },
    /*  */
    deteleTask(state, id) {
      state.tasks = state.tasks.filter((tas) => tas.id !== id);
    },
    /*  */
    editTask(state, editTas) {
      let taskk = state.tasks.filter((task) => task.id == editTas.id)[0];

      taskk.title = editTas.title;
    },
  },
  actions: {},
  modules: {},
});
