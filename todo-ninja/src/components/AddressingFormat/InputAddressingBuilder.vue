<script>
import Address_1_In from "./templates/in/Address_1_In";
import Address_2_In from "./templates/in/Address_2_In";
import Address_3_In from "./templates/in/Address_3_In";
import Address_4_In from "./templates/in/Address_4_In";

export default {
  components: {
    address1_in: Address_1_In,
    address2_in: Address_2_In,
    address3_in: Address_3_In,
    address4_in: Address_4_In
  },
  props: {
    addressFormatTypeId: {},
    initAddress: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    anyInputKeyUp(address) {
      this.$emit("keyup", address);
    }
  },
  render: function(createElement) {
    const elementTemplateAddressType =
      "address" + this.addressFormatTypeId + "_in";
    return createElement(elementTemplateAddressType, {
      on: {
        anyInputKeyUp: this.anyInputKeyUp
      },
      props: {
        initAddress: this.initAddress
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>