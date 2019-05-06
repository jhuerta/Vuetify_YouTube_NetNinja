<script>
import Address_1_Out from "./templates/out/Address_1_Out";
import Address_2_Out from "./templates/out/Address_2_Out";
import Address_3_Out from "./templates/out/Address_3_Out";
import Address_4_Out from "./templates/out/Address_4_Out";

export default {
  components: {
    address1_out: Address_1_Out,
    address2_out: Address_2_Out,
    address3_out: Address_3_Out,
    address4_out: Address_4_Out
  },
  props: {
    addressFormatTypeId: {},
    address: {
      type: Object,
      default: () => {}
    }
  },
  render: function(createElement) {
    const elementTemplateAddressType =
      "address" + this.addressFormatTypeId + "_out";
    return createElement(elementTemplateAddressType, {
      props: {
        address: this.address
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>