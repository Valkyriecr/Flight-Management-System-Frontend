<template>
  <div class="about pa-6">
    <v-card class="about pa-6">
      <h2>LOGIN</h2>
      <div>
        <v-form ref="form" @submit.prevent="isRegister ? register() : login()">
          <!--Text Fields-->
          <v-text-field
            v-model="user.username"
            label="Username"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            label="Password"
            hide-details="auto"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>
          <v-spacer class="pa-2"></v-spacer>
          <v-text-field
            v-if="isRegister"
            v-model="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="cocnfirm password"
            required
          ></v-text-field>
          <div class="red--text">{{ errorMessage }}</div>
          <!--Login Button-->
          <v-btn type="submit" outlined color="primary" value="log in">{{
            isRegister ? stateObj.register.name : stateObj.login.name
          }}</v-btn>
          <div class="grey--text mt-4" v-on:click="isRegister = !isRegister">
            {{ toggleMessage }}
          </div>
        </v-form>
        
      </div>
    </v-card>
  </div>
</template>

<script>
//import TicketDataService from "../services/TicketDataService";
//import {mapState, mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => (value && value.length >= 2) || "Min 2 Characters",
      },
      user: {
        username: "",
        password: "",
      },
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Register",
          message: "Aleady have an Acoount? login.",
        },
        login: {
          name: "Login",
          message: "Register",
        },
      },
    };
  },
  methods: {
    login() {
      //this.$store.dispatch("auth/loginUser", this, user);
      const { username } = this;
      this.$router.replace({ name: "home", params: { username: username } });
    },
    logout() {
      //this.$store.dispatch("auth/logout");

    },
    register() {
       if(this.password == this.confirmPassword){
          this.isRegister = false;
          this.errorMessage = "";
          this.$refs.form.reset();
       }
       else {
         this.errorMessage = "password did not match"
       }
    }
  },
  computed: {
       toggleMessage : function() { 
          return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
    }
};
</script>