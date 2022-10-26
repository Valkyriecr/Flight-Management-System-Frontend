<template>
  <div class="pa-6">
    <v-card class="pa-6">
      <div>
        <h2>Show Table</h2>
        <div flex>
            <v-spacer class="pa-2"></v-spacer>
          <v-btn label="Airline Table" @click="showAirline = !showAirline" :outlined="!showAirline" color="primary" flex
            >Airline Table</v-btn
          >
            <v-btn label="Airport Table" @click="showAirport = !showAirport" :outlined="!showAirport" color="primary" flex
            >Airport Table</v-btn
          > 
          <v-btn label="Checkin Table" @click="showCheckin = !showCheckin" :outlined="!showCheckin" color="primary" flex
            >Checkin Table</v-btn
          >
          <v-btn label="City Table" @click="showCity = !showCity" :outlined="!showCity" color="primary" flex
            >City Table</v-btn
          >
          <v-btn label="Country Table" @click="showCountry = !showCountry" :outlined="!showCountry" color="primary" flex
            >Country Table</v-btn
          >
          <v-btn label="Crews Table" @click="showCrew = !showCrew" :outlined="!showCrew" color="primary" flex
            >Crews Table</v-btn
          >
          <v-btn label="Flights Table" @click="showFlight = !showFlight" :outlined="!showFlight" color="primary" flex
            >Flights Table</v-btn
          >
          <v-btn label="FlightRoute Table" @click="showFlightRoute = !showFlightRoute" :outlined="!showFlightRoute" color="primary" flex
            >FlightRoute Table</v-btn
          >
          <v-btn label="Luggage Table" @click="showLuggage = !showLuggage" :outlined="!showLuggage" color="primary" flex
            >Luggage Table</v-btn
          >
          <v-btn label="Passenger Table" @click="showPassenger = !showPassenger" :outlined="!showPassenger" color="primary" flex
            >Passenger Table</v-btn
          >
          <v-btn @click="showPlane = !showPlane" :outlined="!showPlane" color="primary" flex
            >Plane Table</v-btn
          >
          <v-btn label="Seats Table" @click="showSeat = !showSeat" :outlined="!showSeat" color="primary" flex
            >Seats Table</v-btn
          >
          <v-btn label="Ticket Table" @click="showTicket = !showTicket" :outlined="!showTicket" color="primary" flex
            >Ticket Table</v-btn
          >
        </div>
      </div>
      <div>
        <div v-show="showAirline">
          <v-spacer class="pa-6"></v-spacer>
          <AirlineTable></AirlineTable>
        </div>
        <div v-show="showAirport">
          <v-spacer class="pa-6"></v-spacer>
          <AirportTable></AirportTable>
        </div>
        <div v-show="showCheckin">
          <v-spacer class="pa-6"></v-spacer>
          <CheckinTable></CheckinTable>
        </div>
        <div v-show="showCity">
          <v-spacer class="pa-6"></v-spacer>
          <CityTable></CityTable>
        </div>
        <div v-show="showCrew">
          <v-spacer class="pa-6"></v-spacer>
          <CabinCrewTable></CabinCrewTable>
        </div><div v-show="showCountry">
          <v-spacer class="pa-6"></v-spacer>
          <CountryTable></CountryTable>
        </div>
        <div v-show="showFlight">
          <v-spacer class="pa-6"></v-spacer>
          <FlightTable></FlightTable>
        </div>
        <div v-show="showFlightRoute">
          <v-spacer class="pa-6"></v-spacer>
          <FlightRouteTable></FlightRouteTable>
        </div>
        <div v-show="showLuggage">
          <v-spacer class="pa-6"></v-spacer>
          <LuggageTable></LuggageTable>
        </div><div v-show="showPassenger">
          <v-spacer class="pa-6"></v-spacer>
          <PassengerTable></PassengerTable>
        </div>
        <div v-show="showPlane">
          <v-spacer class="pa-6"></v-spacer>
          <PlaneTable></PlaneTable>
        </div>
        <div v-show="showSeat">
          <v-spacer class="pa-6"></v-spacer>
          <SeatTable></SeatTable>
        </div>
        <div v-show="showTicket">
          <v-spacer class="pa-6"></v-spacer>
          <TicketTable></TicketTable>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import SeatTable from "@/components/tables/SeatTable.vue";
import FlightRouteTable from "@/components/tables/FlightRouteTable.vue"
import CountryTable from "@/components/tables/CountryTable.vue";
import PlaneTable from "@/components/tables/PlaneTable.vue";
import CityTable from "@/components/tables/CityTable.vue";
import FlightTable from "@/components/tables/FlightTable.vue";
import PassengerTable from "@/components/tables/PassengerTable.vue";
import CabinCrewTable from "@/components/tables/CabinCrewTable.vue";
import CheckinTable from "@/components/tables/CheckinTable.vue";
import LuggageTable from "@/components/tables/LuggageTable.vue";
import AirlineTable from "@/components/tables/AirlineTable.vue";
import AirportTable from "@/components/tables/AirportTable.vue";
import TicketTable from "@/components/tables/TicketTable.vue";
import { mapGetters } from 'vuex';
export default {
  components: {
    AirlineTable,
    AirportTable,
    CabinCrewTable,
    FlightTable,
    LuggageTable,
    PassengerTable,
    CheckinTable,
    TicketTable,
    CityTable,
    PlaneTable,
    CountryTable,
    FlightRouteTable,
    SeatTable,
  },
  data () {
    return {
      showAirline: false,
      showAirport: false,
      showCheckin: false,
      showCity: false,
      showCountry: false,
      showCrew: false,
      showFlight: false,
      showFlightRoute: false,
      showLuggage: false,
      showPassenger: false,
      showPlane: false,
      showSeat: false,
      showTicket: false,
    };
  },
  mounted(){
    const user = this.$store.getters.getUser
  if(!user){
    this.$router.push('/login')
  }

  },
  computed:{
    ...mapGetters['getUser']
  }
};
</script>