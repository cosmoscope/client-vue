const state = {
  plotTabs: [
    {
      name: 'Plot 1',
      x: [0, 1, 2, 3, 4, 5],
      y: [1, 3, 6, 1, 3, 0],
      mode: 'lines'
    }
  ]
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
