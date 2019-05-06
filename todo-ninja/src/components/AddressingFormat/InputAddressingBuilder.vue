<script>
import Address_1_In from "./Address_1_In";
import Address_2_In from "./Address_2_In";
import Address_3_In from "./Address_3_In";
import Address_4_In from "./Address_4_In";

export default {
  components: {
    address1_in: Address_1_In,
    address2_in: Address_2_In,
    address3_in: Address_3_In,
    address4_in: Address_4_In
  },
  props: {
    addressFormatTypeId: {},
    address: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    sometingHapped(p) {
      console.log("--------------");
      console.log(p);
      console.log("--------------");
    }
  },
  render: function(createElement) {
    const elementTemplateAddressType =
      "address" + this.addressFormatTypeId + "_in";
    return createElement(elementTemplateAddressType, {
      props: {
        address: this.address
      },
      on: {
        clicked: this.sometingHapped
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>