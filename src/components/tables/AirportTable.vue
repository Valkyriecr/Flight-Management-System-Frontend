<template>
  <v-data-table
    :headers="headers"
    :items="airports"
    sort-by="airportId"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Airports</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-form ref="data">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.airportId"
                      label="Airport ID"
                      :rules="[ (value) => !!value || 'Required.']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.airportName"
                      label="Airport Name"
                      :rules="[ (value) => !!value || 'Required.']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.cityId"
                      label="City ID"
                      :rules="[ (value) => !!value || 'Required.']"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import AirportDataService from '@/services/AirportDataService';

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        value: "id",
      },
      { text: "Airport ID", value: "airportId" },
      { text: "airport Name", value: "airportName" },
      { text: "City ID", value: "cityId" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    airports: [],
    editedIndex: -1,
    editedItem: {
      airportId: "",
      airportName: "",
      cityId: "",
      
    },
    defaultItem: {
      airportId: "",
      airportName: "", 
      cityId: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.airports = [];
      this.refreshTable()
    },
    async refreshTable(){
      const allAirportResponse = await AirportDataService.getAll();
      this.airports=allAirportResponse.data;
      console.table(this.airports)
    },

    editItem(item) {
      this.editedIndex = this.airports.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.itemForDelete=item
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      if(this.itemForDelete){
        const response= await AirportDataService.delete(this.itemForDelete.id)
        this.refreshTable()
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    async save() {
      const success = this.$refs.data.validate();
      
     if(success){
      const response= await AirportDataService.update(this.editedItem)
      this.refreshTable()
      this.close();
     }
    },
  },
};
</script>