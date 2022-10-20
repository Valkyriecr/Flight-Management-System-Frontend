import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticketId: 'ticketId',
    passengerId: 'passengerId',
    flightId: '',
    ticket: {
      ticketId: '',
      passengerId: '',
      flightId: '',
    }

  },
  getters: {
  },
  mutations: {
    AddTicketId(state, ticId) {
      state.ticketId = ticId
      console.log('Added Ticket: ',state.ticketId)
    }, 
    findTicket(state, tick) {
      state.ticket = tick
    },
    AddPassengerId(state, passId) {
      state.passengerId = passId
      console.log('Added Passenger: ',state.passengerId)
    }
  },
  actions: {
    addTicketId({ commit }, ticId) {
      commit('findTicketId', ticId)
      console.log(ticId)
    },
    addTicket({ commit }, tic) {
      commit('findTicket', tic)
      console.log(tic)
    },
    AddPassengerId({ commit }, passId) {
      commit('findPassengerId', passId)
      console.log(passId)
    }

  },
  modules: {
  }
})
