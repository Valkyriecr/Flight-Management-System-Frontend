<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Find Flight</h2>
      <v-spacer class="pa-4"></v-spacer>
      <div>
        <h3>Departure</h3>
        <v-spacer></v-spacer>
        <v-checkbox label="Domestic Flight" v-model="domestic" />
        <v-autocomplete
          v-model="selectDepCountry"
          :items="countries"
          label="Departure Country"
          clearable
          outlined
          dense
        />
        <v-autocomplete
          v-model="selectDepAirport"
          :items="airports"
          label="Departure Airport"
          clearable
          hide-selected
          outlined
          dense
        />
      </div>
      <h3>Destination</h3>
      <v-spacer class="pa-2"></v-spacer>
      <div>
        <v-autocomplete
          v-show="!domestic"
          v-model="selectDestCountry"
          :items="countries"
          label="Destination Country"
          clearable
          hide-selected
          outlined
          dense
        />
        <v-autocomplete
          v-model="selectDestAirport"
          :items="airports"
          label="Destination Airport"
          clearable
          hide-selected
          outlined
          dense
        />
      </div>
      <v-btn class="" outlined color="primary" @click="findFlight"
        >Find Flight</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      destinationCountry: "",
      departureCountry: "",
      departureAirport: "",
      destinationAirport: "",

      domestic: false,
      selectDepCountry: ["Select Departure Country"],
      selectDestCountry: ["Select Departure Country"],
      selectDepCity: ["Select Departure City"],
      selectDestCity: ["Select Destination City"],
      selectDepAirport: ["Departure Airport"],
      selectDestAirport: ["Destination Airport"],
      airports: [
        "Cape Town International",
        "OR Tambo International",
        "Placeholder",
        "Placeholder-203",
      ],
      countries: ["South Africa", "England", "America", "Brazil"],
    };
  },
  methods: {
    findFlight() {
      if ((this.domestic = true)) {
        var data = {
          departureCountry: this.selectDepCountry,
          departureAirport: this.selectDepAirport,
          destinationCountry: this.selectDepCountry,
          destinationAirport: this.selectDestAirport,
        };
      } else {
        var data = {
          departureCountry: this.selectDepCountry,
          departureAirport: this.selectDepAirport,
          destinationCountry: this.selectDestCountry,
          destinationAirport: this.selectDestAirport,
        };
      }
      console.log(data)
    },
  },
};
</script>