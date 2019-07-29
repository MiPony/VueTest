import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	mo: []
  },
  mutations: {
  	updateDay(state, mon) {
  		state.mo.push(mon)
  	}
  },
  actions: {
  	async fetchDay(ctx, mon) {
 		ctx.commit('updateDay', mon)
  	}
  },
  getters: {
  	allDay(state) {
  		return state.DayNo
  	}
  }
})
