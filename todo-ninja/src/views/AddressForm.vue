<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm3>
        <AddresssingBuilder
          class="ma-4"
          :addressTypeId="addressTypeSelect.addressId"
          :address="address"
        ></AddresssingBuilder>
      </v-flex>
    </v-layout>

    <v-text-field
      name="street"
      label="Street Name"
      v-model="streetName"
      single-line
    ></v-text-field>

    <v-text-field
      name="name"
      label="Name"
      v-model="name"
      single-line
    ></v-text-field>

    <v-text-field
      name="number"
      label="Number"
      v-model="number"
      single-line
    ></v-text-field>

    <v-flex xs12 sm6 d-flex>
      <v-select
        item-text="country"
        item-value="addressId"
        :items="countries"
        label="Country"
        v-model="addressTypeSelect"
        return-object
      ></v-select>
    </v-flex>
  </div>
</template>

<script>
import AddresssingBuilder from "@/views/AddressingBuilder";
export default {
  components: {
    AddresssingBuilder
  },
  data() {
    return {
      addressTypeSelect: { country: "Spain", addressId: 1 },
      name: "Juan Huerta",
      number: "8bis",
      streetName: "Eschenweg",
      countries: [
        { country: "Spain", addressId: 1 },
        { country: "France", addressId: 2 },
        { country: "Switzerland", addressId: 3 },
        { country: "Senegal", addressId: 4 }
      ]
    };
  },
  computed: {
    address() {
      return {
        name: this.name,
        number: this.number,
        streetName: this.streetName
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>