<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>My Booking</h2>
      <div>
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
      </div>
      <v-btn class="" outlined color="indigo" @click="findTicket">Check-in</v-btn>
    </v-card>
    <v-textarea>{{ ticket }}</v-textarea>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 Characters",
        id: (value) => (value && value.length == 13) || "13 Characters Required",
      },
      ticket:{
        ticketId:'',
        passengerId:'',
      },
      
      id:'',
    };
  },
  methods:{findTicket(){
    this.ticket={};
  }},
  name: "Home",
};
</script>
