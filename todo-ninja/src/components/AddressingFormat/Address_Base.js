export const address_base = {
  props: {
    address: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    // console.log(this);
    console.log("Address created: " + this.$options._componentTag);
  }
};
