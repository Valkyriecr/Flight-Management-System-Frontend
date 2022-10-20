<template>
  <div class="pa-6">
    <v-card class="pa-6">
      <div>
        <h2>Show Table</h2>
        <div flex>
          <v-spacer class="pa-2"></v-spacer>
          <v-btn @click="showAirline = !showAirline" outlined color="indigo" flex
            >Airline Table</v-btn
          >
          <v-btn @click="showAirport = !showAirport" outlined color="indigo" flex
            >Airport Table</v-btn
          >
          <v-btn @click="showCheckin = !showCheckin" outlined color="indigo" flex
            >Checkin Table</v-btn
          >
          <v-btn @click="showCountry = !showCountry" outlined color="indigo" flex
            >Country Table</v-btn
          >
          <v-btn @click="showCity = !showCity" outlined color="indigo" flex
            >City Table</v-btn
          >
          <v-btn @click="showCrew = !showCrew" outlined color="indigo" flex
            >Crews Table</v-btn
          >
          <v-btn @click="showFlight = !showFlight" outlined color="indigo" flex
            >Flights Table</v-btn
          >
          <v-btn @click="showFlightRoute = !showFlightRoute" outlined color="indigo" flex
            >FlightRoute Table</v-btn
          >
          <v-btn @click="showLuggage = !showLuggage" outlined color="indigo" flex
            >Luggage Table</v-btn
          >
          <v-btn @click="showPassenger = !showPassenger" outlined color="indigo" flex
            >Passenger Table</v-btn
          >
          <v-btn @click="showPlane = !showPlane" outlined color="indigo" flex
            >Plane Table</v-btn
          >
          <v-btn @click="showSeats = !showSeats" outlined color="indigo" flex
            >Seats Table</v-btn
          >
          <v-btn @click="showTicket = !showTicket" outlined color="indigo" flex
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
        <div v-show="showCrew">
          <v-spacer class="pa-6"></v-spacer>
          <CabinCrewTable></CabinCrewTable>
        </div>
        <div v-show="showFlight">
          <v-spacer class="pa-6"></v-spacer>
          <FlightTable></FlightTable>
        </div>
        <div v-show="showLuggage">
          <v-spacer class="pa-6"></v-spacer>
          <LuggageTable></LuggageTable>
        </div><div v-show="showPassenger">
          <v-spacer class="pa-6"></v-spacer>
          <PassengerTable></PassengerTable>
        </div>
        
      </div>
    </v-card>
  </div>
</template>

<script>
import FlightTable from "@/components/tables/FlightTable.vue";
import PassengerTable from "@/components/tables/PassengerTable.vue";
import CabinCrewTable from "@/components/tables/CabinCrewTable.vue";
import CheckinTable from "@/components/tables/CheckinTable.vue";
import LuggageTable from "@/components/tables/LuggageTable.vue";
import AirlineTable from "@/components/tables/AirlineTable.vue";
import AirportTable from "../components/tables/AirportTable.vue";
export default {
  components: {
    AirlineTable,
    AirportTable,
    CabinCrewTable,
    FlightTable,
    LuggageTable,
    PassengerTable,
    CheckinTable,
  },
  data: function () {
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
      showSeats: false,
      showTicket: false,
    };
  },
};
</script>