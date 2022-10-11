<template>
  <div>
    <v-card>
      <h2>Check Flights Routes</h2>
      <v-btn class="" outlined color="indigo" to="/flight-checker"
        >Check Flight Routes</v-btn
      >
      <h3>Check-in</h3>
      <v-btn class="" outlined color="indigo" to="/check-in"> Check-in </v-btn>
    </v-card>

    <FlightCheckerView></FlightCheckerView>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur
      rerum ratione. Nam nostrum ipsam quo esse soluta corrupti sunt autem!
      Numquam harum iusto ea magni sunt eius tempore excepturi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur
      rerum ratione. Nam nostrum ipsam quo esse soluta corrupti sunt autem!
      Numquam harum iusto ea magni sunt eius tempore excepturi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur
      rerum ratione. Nam nostrum ipsam quo esse soluta corrupti sunt autem!
      Numquam harum iusto ea magni sunt eius tempore excepturi.
    </p>
  </div>
</template>

<script>
import FlightCheckerView from "./FlightCheckerView.vue";
export default {
  data() {
    return {
      selectDepart: ["Depart Location"],
      selectArrival: ["Destination Location"],
      items: ["Cape Town", "Johannesburg", "Bloemfontein", "Durban"],
    };
  },
  name: "Home",

  components: { FlightCheckerView },
};
</script>
