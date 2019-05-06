<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm3>
        <OutputAddressingBuilder
          class="ma-4"
          :addressFormatTypeId="addressTypeSelect.addressFormatTypeId"
          :address="address"
        ></OutputAddressingBuilder>
      </v-flex>
    </v-layout>

    <v-text-field name="street" label="Street Name" v-model="streetName" single-line></v-text-field>

    <v-text-field name="name" label="Name" v-model="name" single-line></v-text-field>

    <v-text-field name="number" label="Number" v-model="number" single-line></v-text-field>

    <v-flex xs12 sm6 d-flex>
      <v-select
        item-text="country"
        item-value="addressFormatTypeId"
        :items="countries"
        label="Country"
        v-model="addressTypeSelect"
        return-object
      ></v-select>
    </v-flex>
  </div>
</template>

<script>
import OutputAddressingBuilder from "@/components/AddressingFormat/OutputAddressingBuilder";
export default {
  components: {
    OutputAddressingBuilder
  },
  data() {
    return {
      addressTypeSelect: { country: "Spain", addressFormatTypeId: 1 },
      name: "Juan Huerta",
      number: "8bis",
      streetName: "Eschenweg",
      countries: [
        { country: "Spain", addressFormatTypeId: 1 },
        { country: "France", addressFormatTypeId: 2 },
        { country: "Switzerland", addressFormatTypeId: 3 },
        { country: "Senegal", addressFormatTypeId: 4 }
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