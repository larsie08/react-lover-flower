import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalSliceState {
  isOpenModal: boolean;
  isOpenCart: boolean;
}

const initialState: ModalSliceState = {
  isOpenModal: false,
  isOpenCart: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
    setIsOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpenCart = action.payload;
    },
  },
});

export const { setIsOpenModal, setIsOpenCart } = modalSlice.actions;

export default modalSlice.reducer;
