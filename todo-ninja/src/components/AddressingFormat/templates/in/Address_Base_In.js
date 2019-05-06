import { validationMixin } from "vuelidate";

export const address_base_in = {
  mixins: [validationMixin],
  props: {
    addressFormatTypeId: {
      type: Number,
      default: 1
    },
    initAddress: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    emitAnyInputKeyUp() {
      this.$emit("anyInputKeyUp", this.address);
    }
  },
  computed: {
    address() {
      return {
        name: this.name,
        number: this.number,
        streetName: this.streetName
      };
    }
  },
  data() {
    return {
      addressTypeSelect: { country: "Spain", addressFormatTypeId: 1 },
      name: this.initAddress.name,
      number: this.initAddress.number,
      streetName: this.initAddress.streetName,
      countries: [
        { country: "Spain", addressFormatTypeId: 1 },
        { country: "France", addressFormatTypeId: 2 },
        { country: "Switzerland", addressFormatTypeId: 3 },
        { country: "Senegal", addressFormatTypeId: 4 }
      ]
    };
  }
};
