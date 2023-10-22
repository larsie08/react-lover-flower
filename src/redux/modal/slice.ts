import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalSliceState } from "./types";

const initialState: ModalSliceState = {
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
  },
});

export const { setIsOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
