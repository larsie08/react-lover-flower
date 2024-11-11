import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const modalCallStatus = (state: RootState) => state.modal.isOpenModal;

export const selectCallStatus = createSelector(
  [modalCallStatus],
  (isOpen) => isOpen
);
