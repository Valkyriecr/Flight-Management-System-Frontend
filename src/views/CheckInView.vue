<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Check-in</h2>
      <div>
        <v-form>
          <h3>Passenger Details</h3>
          <v-text-field
            v-model="firstName"
            label="First Name"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            label="Last Name"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            v-model="passengerId"
            label="ID Number"
            hide-details="auto"
            :rules="[rules.required, rules.id]"
            maxlength="13"
            filled
          ></v-text-field>
          <v-text-field
            v-model="ticketId"
            label="Ticket ID"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            filled
          ></v-text-field>

          <v-text-field
            v-model="flightId"
            label="Flight ID"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            filled
          >
          </v-text-field>
        </v-form>
      </div>
      <v-spacer class="pa-5"></v-spacer>
      <div>
        <v-form>
          <h3>Luggage Details</h3>
          <v-spacer class="pa-2"></v-spacer>
          <v-autocomplete
            v-model="selectLuggage"
            :items="luggageTypeArray"
            label="Luggage"
            hide-selected
            clearable
            outlined
            dense
            :rules="[rules.required]"
          ></v-autocomplete>
          <v-text-field
            v-model="weight"
            class="pb-6"
            label="Luggage Weight"
            hide-details="auto"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-form>
      </div>
      <v-btn class="" outlined color="indigo" @click="checkedin"
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
      luggageTypeArray: [
        "Carry-on",
        "Hand Luggage",
        "Checked-In",
        "Sports",
        "Weapons",
        "Animals",
        "None",
      ],

      ticketId: "",
      firstName: "",
      lastName: "",
      passengerId: "",
      flightId: "",
      luggageType: "",
      weight: 0,
      email: "",
    };
  },
  methods: {
    checkedin() {
      var data = {
        ticketId: this.ticketId,
        firstName: this.firstName,
        lastName: this.lastName,
        passengerId: this.passengerId,
        flightId: this.flightId,
        weight: this.weight,
        luggageType: this.luggageType,
        passengerId: this.passengerId,
        email: this.email,
        passengerId: this.passengerId,
      };
      console.log(data);
    },
  },
};
</script>