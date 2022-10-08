<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h1>Check-in</h1>
      <div>
        <h3>Passenger</h3>
        <v-text-field
          label="First Name"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Last Name"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="ID Number"
          hide-details="auto"
          :rules="IdRule"
        ></v-text-field>
        <v-spacer class="pa-5"></v-spacer>
        <v-combobox
          v-model="selectTicket"
          :tickets="Ticket"
          label="Tickets"
          hide-selected
          outlined
          dense
        ></v-combobox>
        <v-text-field label="Flight ID" hide-details="auto"></v-text-field>
      </div>
      <v-spacer class="pa-5"></v-spacer>
      <div>
        <h3>Luggage</h3>
        <v-text-field
          label="Luggage Type"
          hide-details="auto"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          class="pb-6"
          label="Luggage Weight"
          hide-details="auto"
          type="number"
          :rules="weightRule"
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
    NameRule: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 2) || "Min 2 characters",
    ],
    IdRule: [
      (value) => !!value || "Required.",
      (value) => (value && value.length == 13) || "Min 13 characters",
    ],
    weightRule: [(value) => !!value || "Required."],
  }),
  data() {
    return {
      selectTicket: ["Select Ticket"],
      selectArrival: ["Destination Location"],
      items: ["FA-262", "FA-202", "FA-200", "FA-203"],
      ticket:["Tk1234"],

      checkin:{
        ticketId:null,
        FirstName:"",
        LastName:"",
        IdNumber:"",
        FlightId:"",
      },
      luggage:{
        weight:null,
        luggageType:"",
        passenger:"????",
      }
    };
  },
  
};
</script>