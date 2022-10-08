<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h1>Find Flight</h1>
      <div>
        <v-combobox
          v-model="selectCountry"
          :items="Airports"
          label="Country"
          clearable
          hide-selected
          outlined
          dense
        ></v-combobox>
        <v-combobox
          v-model="selectCity"
          :items="Airports"
          label="City"
          clearable
          hide-selected
          outlined
          dense
        ></v-combobox>
        <v-combobox
          v-model="selectDepart"
          :items="Airports"
          label="Depart"
          clearable
          hide-selected
          outlined
          dense
        ></v-combobox>
        <v-combobox
          v-model="selectArrival"
          :items="Airports"
          label="Arrive"
          clearable
          hide-selected
          outlined
          dense
        ></v-combobox>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    NameRule: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 2) || "Min 2 characters",
    ],
    IdRule: [
      (value) => !!value || "Required.",
      (value) => (value && value.length == 13) || "Min 13 characters",
    ],
  }),
  data() {
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