<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>My Booking</h2>
      <div v-if="!found">
        <v-form ref="form">
          <v-text-field
            v-model="ticket.ticketId"
            label="Ticket Number"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>

          <v-text-field
            v-model="ticket.passengerId"
            label="ID Number"
            hide-details="auto"
            :rules="[rules.required, rules.id]"
            required
          ></v-text-field>
          <v-spacer class="pa-2"></v-spacer>
        </v-form>
        <v-btn class="" outlined color="indigo" @click="findTicket"
          >Check-in</v-btn
        >
      </div>

      <div v-else>
        <v-textarea>{{ ticket }}</v-textarea>
      </div>
    </v-card>
  </div>
</template>

<script>
import TicketDataService from "../services/TicketDataService";
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
      ticket: {
        ticketId: "",
        passengerId: "",
      },
      found: false,
    };
  },
  methods: {
    findTicket() {
      var data = {
        ticketId: this.ticket.ticketId,
        passengerId: this.ticket.passengerId,
      };
      console.log(data),
        TicketDataService.create(data)
          .then((response) => {
            this.ticket.ticketId = response.data.ticketId;
            console.log(response.data);
            this.found = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};
</script>
