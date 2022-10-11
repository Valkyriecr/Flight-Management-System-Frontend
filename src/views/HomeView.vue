<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>My Booking</h2>
      <div>
        <v-text-field label="Ticket Number" hide-details="auto"></v-text-field>

        <v-text-field label="ID Number" hide-details="auto"></v-text-field>
        <v-spacer class="pa-2"></v-spacer>
      </div>
      <v-btn class="" outlined color="indigo" to="/check-in">Check-in</v-btn>
    </v-card>
  </div>
</template>

<script>

export default {
  data: () => ({
    Rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 2) || "Min 2 characters",
      (value) => (value && value.length == 13) || "Min 13 characters",
    ],
  }),
  data() {
    return {};
  },
  name: "Home",
};
</script>
