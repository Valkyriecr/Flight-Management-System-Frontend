import router from '@/router'
import TicketDataService from '@/services/TicketDataService'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    firstName: '',
    lastName: '',
    luggageType: '',
    weight: 0,
    email: '',
    ticketId: '',
    passengerId: '',
    flightId: '',


  },
  getters: {
    getTicketId(state) {
      return state.ticketId
    }
  },
  mutations: {
    saveTicketData(state, ticket) {
      state.ticketId = ticket.ticketId
      state.flightId = ticket.flightId
      state.passengerId = ticket.passengerId
      console.log('Added Ticket: ', state.ticketId)
    },

    addPassengerId(state, passId) {
      state.passengerId = passId
      console.log('Added Passenger: ', state.passengerId)
    }
  },
  actions: {
    async validateTicket({ commit }, payload) {
      const response = await TicketDataService.findByTicketId(payload.ticketId)
      const ticket = response.data
      //console.table(ticket)
      if (ticket && ticket.passengerId === payload.passengerId) {
        console.table(ticket)
        commit('saveTicketData', ticket)
        router.push({ path: '/check-in' })
      }else{
        alert('Ticket and Id do not match')
      }

    },
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
    },
    findTicket(state, tick) {
      state.ticket = tick
    },
  },
  modules: {
  }
})
