<template>
  <div class="address1">
    <v-text-field
      @keyup="click"
      name="street"
      label="Street Name"
      v-model="streetName"
      single-line
    ></v-text-field>

    <v-text-field
      @keyup="click"
      name="name"
      label="Name"
      v-model="name"
      single-line
    ></v-text-field>

    <v-text-field
      @keyup="click"
      name="number"
      label="Number"
      v-model="number"
      single-line
    ></v-text-field>
  </div>
</template>

<script>
import { address_base_in } from "./Address_Base_In.js";
export default {
  mixins: [address_base_in],
  methods: {
    click() {
      this.$emit("clicked", this.address);
    }
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