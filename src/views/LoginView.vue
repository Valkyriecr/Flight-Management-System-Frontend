<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>User Login</h2>
      <div>
        <v-form ref="loginForm">
          <!--Text Fields-->
          <v-text-field
            v-model="username"
            label="Username"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>
          <v-spacer class="pa-2"></v-spacer>
          <!--button to check if the User exists and pass data to the other page-->
          <v-btn class="" outlined color="primary" @click="findUser"
            >Login</v-btn
          >
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import UserDataService from '@/services/UserDataService'
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 Characters",
      },

      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["validateUser"]),

    findUser() {
      const success = this.$refs.loginForm.validate();

      if (success) {
        var data = {
          username: this.username,
          password: this.password,
        };

        this.validateUser(data);       
      }
    },
  },
};
</script>
