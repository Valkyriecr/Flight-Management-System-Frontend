<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h1>My Booking</h1>
      <div>
        <v-text-field
          label="Ticket Number"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        
        <v-text-field
          label="ID Number"
          hide-details="auto"
          :rules="IdRule"
        ></v-text-field>
        <v-spacer class="pa-2"
        ></v-spacer>
      </div>
      <v-btn class="" outlined color="indigo" to="/check-in">Check-in</v-btn>
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
      
    };
  },
  name:"Home",
};
</script>
