<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Find Flight</h2>
      <div>
        <v-autocomplete
          v-model="selectCountry"
          :items="Airports"
          label="Country"
          clearable
          hide-selected
          outlined
          dense
          
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectCity"
          :items="Airports"
          label="City"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectDepart"
          :items="Airports"
          label="Depart"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectArrival"
          :items="Airports"
          label="Arrive"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
      </div>
      <div>
        <v-autocomplete
          v-model="selectCountry"
          :items="Airports"
          label="Country"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectCity"
          :items="Airports"
          label="City"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectDepart"
          :items="Airports"
          label="Depart"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
        <v-autocomplete
          v-model="selectArrival"
          :items="Airports"
          label="Arrive"
          clearable
          hide-selected
          outlined
          dense
        ></v-autocomplete>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data()  {
    
    return {
      selectCountry: ["Select Country"],
      selectCity: ["Select City"],
      selectDepart: ["Departure Airport"],
      selectArrival: ["Destination Airport"],
      Airports: ["FA-262", "FA-202", "FA-200", "FA-203"],
    };
  },
};
</script>