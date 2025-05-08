import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ModalSliceState, ModalType } from "./types";
import { AlertColor } from "@mui/material";

const initialState: ModalSliceState = {
  isOpenModal: false,
  isOpenCart: false,
  isOpenHamburgerMenu: false,
  isOpenAlertBlock: false,
  severityOption: "success",
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

    setSeverityOption(state, action: PayloadAction<{ severity: AlertColor }>) {
      const { severity } = action.payload;
      state.severityOption = severity;
    },
  },
});

export const { setModalState, setSeverityOption } = modalSlice.actions;

export default modalSlice.reducer;
