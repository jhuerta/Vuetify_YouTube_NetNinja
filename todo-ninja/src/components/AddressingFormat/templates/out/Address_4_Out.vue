<template>
  <div class="address1">
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="font-weight-medium title text-uppercase">
            Address 4
          </div>
          <div>
            {{ address.name }} {{ address.streetName }} {{ address.number }}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { address_base_out } from "./Address_Base_Out.js";
export default {
  mixins: [address_base_out]
};
</script>