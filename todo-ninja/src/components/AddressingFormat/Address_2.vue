<template>
  <div class="address1 text-xs-right">
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="font-weight-medium title text-uppercase">
            Address 2
          </div>
          <div>{{ address.streetName }}</div>
          <div>{{ address.number }}</div>
          <div class="font-weight-medium text-uppercase">
            {{ address.name }}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { address_base } from "./Address_Base.js";
export default {
  mixins: [address_base]
};
</script>