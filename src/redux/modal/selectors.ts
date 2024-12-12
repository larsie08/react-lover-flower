import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const modalCallStatus = (state: RootState) => state.modal.isOpenModal;
const hamburgerMenuStatus = (state: RootState) => state.modal.isOpenHamburgerMenu;

export const selectCallStatus = createSelector(
  [modalCallStatus],
  (isOpen) => isOpen
);
export const selectHamburgerMenuStatus = createSelector(
  [hamburgerMenuStatus],
  (isOpen) => isOpen
);
