import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    showModal: (state, action) => {
      return (state = !state);
    },

    closeModal: (state, action) => {
      return (state = false);
    },
  },
});

export const { showModal, closeModal } = modalReducer.actions;
export default modalReducer.reducer;
