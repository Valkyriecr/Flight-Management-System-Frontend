<template>
  <v-data-table
    :headers="headers"
    :items="checkins"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Checkin</v-toolbar-title>
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
                      v-model="editedItem.ticketId"
                      label="Ticket ID"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.luggageId"
                      label="Luggage ID"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.reservedSeat"
                      label="Reserved Seat"
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
import CheckInDataService from '@/services/CheckInDataService';
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
      { text: "Ticket ID", value: "ticketId" },
      { text: "Luggage ID", value: "luggageId" },
      { text: "Reserved Seat", value: "reservedSeat" },
      
      { text: "Actions", value: "actions", sortable: false },
    ],
    checkins: [],
    editedIndex: -1,
    editedItem: {
      id:"",
      ticketId: "",
      luggageId: "",
      reservedSeat: "",
    },
    defaultItem: {
      id:"",
      ticketId: "",
      luggageId: "",
      reservedSeat: "",
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
      this.checkins = [ ];
    this.refreshTable()
    },
    async refreshTable(){
      const allCheckInResponse = await CheckInDataService.getAll();
      this.checkins=allCheckInResponse.data;
    },

    editItem(item) {
      this.editedIndex = this.checkins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.itemForDelete=item
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      if(this.itemForDelete){
        const response= await CheckInDataService.delete(this.itemForDelete.id)
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
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
    const success = this.$refs.data.validate();
      
      if(success){
       const response= await CheckInDataService.update(this.editedItem)
       this.refreshTable()
       this.close();
      }
    },
  },
};
</script>