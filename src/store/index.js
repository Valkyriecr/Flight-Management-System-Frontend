import router from '@/router'
import LuggageDataService from '@/services/LuggageDataService'
import CheckInDataService from '@/services/CheckInDataService'
import PassengerDataService from '@/services/PassengerDataService'
import TicketDataService from '@/services/TicketDataService'
import UserDataService from '@/services/UserDataService'
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
    ticket:'',
    checkin:'',
    passenger:'',
    luggage:'',
    user:''

  },
  getters: {
    getUser(state){
      return state.user
    },
    getTicket(state){
      return state.ticket
    },
    getTicketId(state) {
      return state.ticketId
    }
  },
  mutations: {
    saveUser(state,user){
      state.user=user
      router.push({ path: '/admin' })
    },
    saveTicket(state, ticket){
      state.ticket=ticket
    },
    saveCheckin(state, checkin){
      state.checkin=checkin
    },
    savePassenger(state, passenger){
      state.passenger=passenger
    },
    saveCheckin(state, checkin){
      state.checkin=checkin
    },
    saveLuggage(state, luggage){
      state.luggage =luggage
    },
    saveTicketData(state, ticket) {
      state.ticketId = ticket.ticketId
      state.flightId = ticket.flightId
      state.passengerId = ticket.passengerId
    },

    addPassengerId(state, passId) {
      state.passengerId = passId
    }
  },
  actions: {
    async validateTicket({ commit }, payload) {
      const response = await TicketDataService.findByTicketId(payload.ticketId)
      const ticket = response.data
      //console.table(ticket)
      if (ticket && ticket.passengerId === payload.passengerId) {
        commit('saveTicketData', ticket)
        commit('saveTicket', ticket)
        router.push({ path: '/check-in' })
      }else{
        alert('Ticket and Id do not match')
      }

    },
    async validateUser({ commit }, payload) {
      const response = await UserDataService.findByUsername(payload.username)
      const user = response.data
      if (user && user.password === payload.password) {
        commit('saveUser', user)
        
      }else{
        alert('Username and password do not match')
      }

    },
    async validateCheckin({ commit }, payload) {

        var passenger={
        passengerId:payload.passengerId,
        firstName:payload.firstName,
        lastName:payload.lastName,
        email:payload.email,
      }
     var checkin={
        ticketId:payload.ticketId,
        reservedSeat:1,
        luggageId:(payload.flightId+"-"+payload.passengerId)
      }

      if(payload.luggageType!="None"){
        var luggage={
          luggageId:(payload.flightId+"-"+payload.passengerId),
          flightId:payload.flightId,
          passengerId:payload.passengerId,
          luggageType:payload.luggageType,
          weight:payload.weight,
      }
      
      }else{
       var luggage={
          luggageId:(payload.flightId+"-"+payload.passengerId),
          flightId:payload.flightId,
          passengerId:payload.passengerId,
          luggageType:payload.luggageType,
          weight:0
      }
      }
      commit('saveLuggage', luggage)
      const luggageResponse= await LuggageDataService.create(luggage);
      commit('savePassenger', passenger)
      const passengerResponse= await PassengerDataService.create(passenger);
      commit('saveCheckin', checkin)
      const checkinResponse= await CheckInDataService.create(checkin);
      alert('You are Checked in!')
    },
    addTicketId({ commit }, ticId) {
      commit('findTicketId', ticId)
    },
    addTicket({ commit }, tic) {
      commit('findTicket', tic)
    },
    AddPassengerId({ commit }, passId) {
      commit('findPassengerId', passId)
    },
    findTicket(state, tick) {
      state.ticket = tick
    },
  },
  modules: {
  }
})
