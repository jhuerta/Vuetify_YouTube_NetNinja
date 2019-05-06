export const address_base_in = {
  props: {
    addressFormatTypeId: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      addressTypeSelect: { country: "Spain", addressFormatTypeId: 1 },
      name: "Juan Huerta",
      number: "8bis",
      streetName: "Eschenweg",
      countries: [
        { country: "Spain", addressFormatTypeId: 1 },
        { country: "France", addressFormatTypeId: 2 },
        { country: "Switzerland", addressFormatTypeId: 3 },
        { country: "Senegal", addressFormatTypeId: 4 }
      ]
    };
  }
};
