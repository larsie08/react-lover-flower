import { RootState } from "../store";

export const selectModalStatus = (state: RootState) => state.modal;

export const selectSeverityOption = (state: RootState) =>
  state.modal.severityOption;
