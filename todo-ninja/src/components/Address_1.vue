<template>
  <div class="address1">
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="font-weight-medium title text-uppercase">
            Address 1
          </div>
          <div class="font-weight-medium text-uppercase">
            {{ address.name }}
          </div>
          <div>{{ address.streetName }}, {{ address.number }}</div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: () => {}
    }
  }
};
</script>