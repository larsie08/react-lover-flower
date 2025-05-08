import { AlertColor } from "@mui/material";

export enum ModalType {
  Modal = "isOpenModal",
  Cart = "isOpenCart",
  HamburgerMenu = "isOpenHamburgerMenu",
  Alert = "isOpenAlertBlock",
}

export interface ModalSliceState {
  isOpenModal: boolean;
  isOpenCart: boolean;
  isOpenHamburgerMenu: boolean;
  isOpenAlertBlock: boolean;
  severityOption: AlertColor;
}
