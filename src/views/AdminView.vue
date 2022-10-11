<template>
  <div class="pa-6">
    <v-card class="pa-6">
      <div>
        <h1>Show Table</h1>
        <v-spacer class="pa-2"></v-spacer>
        <v-btn
          class=""
          @click="showFlight = !showFlight"
          outlined
          color="indigo"
          >Flights</v-btn
        >
        <v-divider flex vertical class="pa-2"></v-divider>
        <v-btn
          @click="showPassenger = !showPassenger"
          outlined
          color="indigo"
          flex
          >Passengers</v-btn
        >
        <v-divider flex vertical class="pa-2"></v-divider>
        <v-btn @click="showCrew = !showCrew" outlined color="indigo" flex
          >Crews</v-btn
        >
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
        </div></div
    ></v-card>
  </div>
</template>

<script>
import FlightTable from "@/components/FlightTable.vue";
import PassengerTable from "@/components/PassengerTable.vue";
import CabinCrewTable from "@/components/CabinCrewTable.vue";
export default {
  components: {
    FlightTable,
    PassengerTable,
    CabinCrewTable,
  },
  data: function () {
    return { showFlight: false, showPassenger: false, showCrew: false };
  },
};
</script>