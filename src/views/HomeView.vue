<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>My Booking</h2>
      <div>
        <v-form ref="bookingForm">
          <!--Text Fields-->
          <v-text-field
            v-model="ticketId"
            label="Ticket Number"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>

          <v-text-field
            v-model="passengerId"
            label="ID Number"
            hide-details="auto"
            :rules="[rules.required, rules.id]"
            required
          ></v-text-field>
          <v-spacer class="pa-2"></v-spacer>
          <!--button to check if the ticket exists and pass data to the other page-->
          <v-btn class="" outlined color="primary" @click="findTicket"
            >To Check in</v-btn
          >
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 Characters",
        id: (value) =>
          (value && value.length == 13) || "13 Characters Required",
      },

      ticketId: "TK-001",
      passengerId: "9510095080080",
    };
  },
  methods: {
    ...mapActions(["validateTicket"]),

    findTicket() {
      const success = this.$refs.bookingForm.validate();

      if (success) {
        var data = {
          ticketId: this.ticketId,
          passengerId: this.passengerId,
        };

        this.validateTicket(data);       
      }
    },
  },
};
</script>
