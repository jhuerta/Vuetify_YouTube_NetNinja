<template>
  <div class="address1">
    <h1>ALL FIELDS ARE REQUIRED WITH LIMITED IN SIZE</h1>

    <v-text-field
      :error-messages="streetNameErrors"
      @keyup="emitAnyInputKeyUp"
      name="street"
      label="Street Name"
      v-model="streetName"
      single-line
      @input="$v.streetName.$touch()"
      @blur="$v.streetName.$touch()"
    ></v-text-field>

    <v-text-field
      :error-messages="nameErrors"
      @keyup="emitAnyInputKeyUp"
      name="name"
      label="Name"
      v-model="name"
      single-line
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-text-field
      @input="$v.number.$touch()"
      @blur="$v.number.$touch()"
      :error-messages="numberErrors"
      @keyup="emitAnyInputKeyUp"
      name="number"
      label="Number"
      v-model="number"
      single-line
    ></v-text-field>
  </div>
</template>

<script>
import { address_base_in } from "./Address_Base_In.js";

import {
  required,
  maxLength,
  // email,
  minLength
  // between
} from "vuelidate/lib/validators";

export default {
  mixins: [address_base_in],
  validations: {
    number: {
      required,
      maxLength: maxLength(2)
    },
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(6)
    },
    streetName: {
      required,
      minLength: minLength(6)
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength && errors.push("Name must be more than  2");
      !this.$v.name.maxLength && errors.push("Name must be less than  6");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    streetNameErrors() {
      const errors = [];
      if (!this.$v.streetName.$dirty) return errors;
      !this.$v.streetName.minLength &&
        errors.push("Stret  must be more than 6");
      !this.$v.streetName.required && errors.push("streetName is required");

      return errors;
    },
    numberErrors() {
      const errors = [];
      if (!this.$v.number.$dirty) return errors;
      !this.$v.number.maxLength && errors.push("Number must be less 2");
      !this.$v.number.required && errors.push("NUmber is required");
      return errors;
    }
  }
};
</script>