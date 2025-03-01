import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fonNum: "",
  nameOfCard: "",
  numOfCard: "",
  securityCode: "",
  selectedCountry: "",
  selectedProgram: "",
  phonePrefix: "",
  paymentMethod: "",
  expiryMonth: "",
  expiryYear: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = paymentSlice.actions;
export default paymentSlice.reducer;
