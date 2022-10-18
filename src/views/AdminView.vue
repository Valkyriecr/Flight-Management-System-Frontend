<template>
  <div class="pa-6">
    <v-card class="pa-6">
      <div>
        <h2>Show Table</h2>
        <div flex>
          <v-spacer class="pa-2"></v-spacer>
          <v-btn class="" @click="showFlight = !showFlight" outlined color="indigo">Flights</v-btn>

          <v-btn @click="showPassenger = !showPassenger" outlined color="indigo" flex>Passengers</v-btn>

          <v-btn @click="showCrew = !showCrew" outlined color="indigo" flex>Crews</v-btn>
          <v-btn @click="showLuggage = !showLuggage" outlined color="indigo" flex>Luggage</v-btn>
          <v-btn @click="showCity = !showCity" outlined color="indigo" flex>City</v-btn>
          <v-btn @click="showCountry = !showCountry" outlined color="indigo" flex>Country</v-btn>
          <v-btn @click="showAirport = !showAirport" outlined color="indigo" flex>Airport</v-btn>
          <v-btn @click="showFlightRoute = !showFlightRoute" outlined color="indigo" flex>FlightRoute</v-btn>
          <v-btn @click="showPlane = !showPlane" outlined color="indigo" flex>Plane</v-btn>
          <v-btn @click="showAirline = !showAirline" outlined color="indigo" flex>Airline</v-btn>
          <v-btn @click="showAvailableSeats = !showAvailableSeats" outlined color="indigo" flex>AvailableSeats</v-btn>
          <v-btn @click="showTicket = !showTicket" outlined color="indigo" flex>Ticket</v-btn>
          <v-btn @click="showCheckin = !showCheckin" outlined color="indigo" flex>Checkin</v-btn>
        </div>
      </div>
      <div>
        <div v-show="showFlight">
          <v-spacer class="pa-6"></v-spacer>
          <FlightTable></FlightTable>
        </div>
        <div v-show="showPassenger">
          <v-spacer class="pa-6"></v-spacer>
          <PassengerTable></PassengerTable>
        </div>
        <div v-show="showCrew">
          <v-spacer class="pa-6"></v-spacer>
          <CabinCrewTable></CabinCrewTable>
        </div>
        <div v-show="showLuggage">
          <v-spacer class="pa-6"></v-spacer>
          <LuggageTable></LuggageTable>
        </div>
        <div v-show="showAirline">
          <v-spacer class="pa-6"></v-spacer>
          <AirlineTable></AirlineTable>
        </div>
        <div v-show="showAirport">
          <v-spacer class="pa-6"></v-spacer>
          <AirportTable></AirportTable>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import FlightTable from "@/components/tables/FlightTable.vue";
import PassengerTable from "@/components/tables/PassengerTable.vue";
import CabinCrewTable from "@/components/tables/CabinCrewTable.vue";
import LuggageTable from "@/components/tables/LuggageTable.vue";
import AirlineTable from "@/components/tables/AirlineTable.vue";
import AirportTable from "../components/tables/AirportTable.vue";
export default {
  components: {
    FlightTable,
    PassengerTable,
    CabinCrewTable,
    LuggageTable,
    AirlineTable,
    AirportTable
  },
  data: function () {
    return {
      showFlight: false,
      showPassenger: false,
      showCrew: false,
      showLuggage: false,
      showAirline: false,
      showAirport: false,
      showCity: false,
      showCountry: false,
      showFlightRoute: false,
      showAvailableSeats: false,
      showPlane: false,
      showCheckin: false,
      showTicket: false,
    };
  },
};
</script>