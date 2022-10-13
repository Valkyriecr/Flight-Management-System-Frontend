<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Check-in</h2>
      <div>
        <v-form>
          <h3>Passenger</h3>
          <v-text-field
            label="First Name"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            label="Last Name"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            label="ID Number"
            hide-details="auto"
            value="9510095080080"
            readonly
            :rules="[rules.required, rules.id]"
            maxlength="13"
            filled
          ></v-text-field>
          <v-text-field
            label="Ticket ID"
            hide-details="auto"
            value="TK9510"
            readonly
            :rules="[rules.required, rules.min]"
            filled
          ></v-text-field>

          <v-text-field
            label="Flight ID"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            readonly
            filled
          ></v-text-field
        ></v-form>
      </div>
      <v-spacer class="pa-5"></v-spacer>
      <div>
        <v-form>
          <h3>Luggage</h3>
          <v-spacer class="pa-2"></v-spacer>
          <v-autocomplete
            v-model="selectLuggage"
            :items="luggageType"
            label="Luggage"
            hide-selected
            clearable
            outlined
            dense
            :rules="[rules.required]"
          ></v-autocomplete>
          <v-text-field
            class="pb-6"
            label="Luggage Weight"
            hide-details="auto"
            type="number"
            :rules="[rules.required]"
          ></v-text-field
        ></v-form>
      </div>
      <v-btn class="" outlined color="indigo" to="/flight-checker"
        >Check-in</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 characters",
        id: (value) => (value && value.length == 13) || "Min 13 characters",
      },
      selectTicket: ["Select Ticket"],
      selectArrival: ["Destination Location"],
      selectLuggage: ["Select Luggage"],
      items: ["FA-262", "FA-202", "FA-200", "FA-203"],
      luggageType: [
        "Carry-on",
        "Hand Luggage",
        "Checked-In",
        "Sports",
        "Weapons",
        "Animals",
        "None",
      ],

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
        passenger: "",
      },
    };
  },
};
</script>