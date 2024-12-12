export enum ModalType {
  Modal = "isOpenModal",
  Cart = "isOpenCart",
  HamburgerMenu = "isOpenHamburgerMenu",
}

export interface ModalSliceState {
  isOpenModal: boolean;
  isOpenCart: boolean;
  isOpenHamburgerMenu: boolean;
}
