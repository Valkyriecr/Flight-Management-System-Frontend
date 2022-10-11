<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Check-in</h2>
      <div>
        <h3>Passenger</h3>
        <v-text-field
          label="First Name"
          
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Last Name"
          
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="ID Number"
          hide-details="auto"
          
          value="9510095080080"
          readonly
          maxlength="13"
        ></v-text-field>
        <v-text-field
          label="Ticket ID"
          hide-details="auto"
          
          value="TK9510"
          readonly
        ></v-text-field>

        <v-text-field label="Flight ID" hide-details="auto"></v-text-field>
      </div>
      <v-spacer class="pa-5"></v-spacer>
      <div>
        <h3>Luggage</h3>
        <v-spacer class="pa-2"></v-spacer>
        <v-combobox
          v-model="selectLuggage"
          :items="luggageType"
          label="Luggage"
          hide-selected
          clearable
          outlined
          dense
        ></v-combobox>
        <v-text-field
          class="pb-6"
          label="Luggage Weight"
          hide-details="auto"
          type="number"
          
        ></v-text-field>
      </div>
      <v-btn class="" outlined color="indigo" to="/flight-checker"
        >Check-in</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    
  }),
  data() {
    return {
      selectTicket: ["Select Ticket"],
      selectArrival: ["Destination Location"],
      selectLuggage: ["Select Luggage"],
      items: ["FA-262", "FA-202", "FA-200", "FA-203"],
      luggageType: ["Carry-on", "Checked-In","Sports","Weapons","Animals"],

      checkin: {
        ticketId: null,
        FirstName: "",
        LastName: "",
        IdNumber: "",
        FlightId: "",
      },
      luggage: {
        weight: null,
        luggageType: "",
        passenger: "????",
      },
    };
  },
};
</script>