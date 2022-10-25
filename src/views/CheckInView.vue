<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>Check-in for Ticket: {{ getTicket.ticketId }}</h2>
      <v-spacer class="pa-2" />
      <div>
        <v-form ref="checkinForm">
          <h3>Passenger Details</h3>
          <v-text-field
            v-model="getTicket.ticketId"
            label="Ticket ID"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            readonly
            filled
          ></v-text-field>
          <v-text-field
            v-model="getTicket.flightId"
            label="Flight ID"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            readonly
            filled
          ></v-text-field>
          <v-text-field
            v-model="getTicket.passengerId"
            label="ID Number"
            hide-details="auto"
            :rules="[rules.required, rules.id]"
            maxlength="13"
            readonly
            filled
          ></v-text-field>
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
        </v-form>
      </div>
      <v-spacer class="pa-5"></v-spacer>
      <div>
        <v-form>
          <h3>Luggage Details</h3>
          <v-spacer class="pa-2"></v-spacer>
          <v-autocomplete
            v-model="luggageType"
            :items="luggageTypes"
            label="Luggage Type"
            hide-selected
            clearable
            auto-select-first
            outlined
            dense
            :rules="[rules.requiredAutocomplete]"
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
      <v-btn class="" outlined color="primary" @click="checkin">Check-in</v-btn>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import router from "@/router";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        requiredAutocomplete: (value) => !(value === "") || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 characters",
        id: (value) => (value && value.length == 13) || "Min 13 characters",
        email: (value) => (value && value) || "Email is Required",
      },
      luggageTypes: [
        { text: "None", value: "None" },
        { text: "Carry-on", value: "Carry-on" },
        { text: "Hand Luggage", value: "Hand Luggage" },
        { text: "Sports", value: "Sports" },
        { text: "Weapons", value: "Weapons" },
        { text: "Animals", value: "Animals" },
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
    ...mapActions(["validateCheckin"]),
    checkin() {
      const success = this.$refs.checkinForm.validate();
      if (this.luggageType != "") {
        console.log(this.luggageType);
        if (success) {
          var data = {
            ticketId: this.ticketId,
            firstName: this.firstName,
            lastName: this.lastName,
            passengerId: this.passengerId,
            flightId: this.flightId,
            weight: this.weight,
            luggageType: this.luggageType,
            email: this.email,
          };
          console.log(data);
          this.validateCheckin(data)
        }
      } else {
        alert("Luggage Type not entered!");
      }
    },
  },
  computed: {
    ...mapGetters(["getTicketId", "getTicket"]),
  },
  mounted() {
    if (this.getTicket) {
      this.ticketId = this.getTicket.ticketId;
      this.flightId = this.getTicket.flightId;
      this.passengerId = this.getTicket.passengerId;
    } else {
      router.push({ path: "/" });
    }
    //this.selectLuggage=this.luggageTypeArray[0]
    // if(this.getTicketId){
    //   this.ticketId=this.getTicketId
    // }
  },
};
</script>