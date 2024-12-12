import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ModalSliceState, ModalType } from "./types";

const initialState: ModalSliceState = {
  isOpenModal: false,
  isOpenCart: false,
  isOpenHamburgerMenu: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModalState(
      state,
      action: PayloadAction<{ modalType: ModalType; isOpen: boolean }>
    ) {
      const { modalType, isOpen } = action.payload;
      state[modalType] = isOpen;
    },
  },
});

export const { setModalState } = modalSlice.actions;

export default modalSlice.reducer;
