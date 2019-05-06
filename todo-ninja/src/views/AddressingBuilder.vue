<script>
import Address_1 from "@/components/Address_1";
import Address_2 from "@/components/Address_2";
import Address_3 from "@/components/Address_3";
import Address_4 from "@/components/Address_4";

export default {
  components: {
    address1: Address_1,
    address2: Address_2,
    address3: Address_3,
    address4: Address_4
  },
  props: {
    addressTypeId: {},
    address: {
      type: Object,
      default: () => {}
    }
  },
  render: function(createElement) {
    const elementTemplateAddressType = "address" + this.addressTypeId;
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