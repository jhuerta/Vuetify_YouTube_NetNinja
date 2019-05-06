<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm3>
        <OutputAddressingBuilder
          class="ma-4"
          :addressFormatTypeId="addressTypeSelect.addressFormatTypeId"
          :address="sharedAddress"
        ></OutputAddressingBuilder>
      </v-flex>
    </v-layout>

    <InputAddressingBuilder
      class="ma-4"
      :addressFormatTypeId="addressTypeSelect.addressFormatTypeId"
      @clicked="updateAddress"
    ></InputAddressingBuilder>

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
import OutputAddressingBuilder from "@/components/AddressingFormat/OutputAddressingBuilder";
import InputAddressingBuilder from "@/components/AddressingFormat/InputAddressingBuilder";
export default {
  methods: {
    updateAddress(newAddress) {
      console.log(newAddress);
      this.sharedAddress = {
        name: "new",
        number: "new",
        streetName: "new"
      };
    }
  },
  components: {
    OutputAddressingBuilder,
    InputAddressingBuilder
  },
  data() {
    return {
      addressTypeSelect: { country: "Spain", addressFormatTypeId: 1 },
      countries: [
        { country: "Spain", addressFormatTypeId: 1 },
        { country: "France", addressFormatTypeId: 2 },
        { country: "Switzerland", addressFormatTypeId: 3 },
        { country: "Senegal", addressFormatTypeId: 4 }
      ],
      sharedAddress: {
        name: "this the address name",
        number: "here the address number",
        streetName: "and here the street name"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>