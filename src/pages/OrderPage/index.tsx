import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { RootState, useAppDispatch } from "../../redux/store";
import { CartItem } from "../../redux/cart/types";

import {
  CartCardBlock,
  DecorativeElement,
  PathBlock,
  TitlePageBlock,
} from "../../components";

import OrderFormBlock, {
  DeliveryRadioGroupOption,
  PayRadioGroupOptions,
} from "./OrderFormBlock";
import { PromoCode } from "./OrderFormBlock/FormTypes/form.types";
import { IOrderForm } from "./OrderFormBlock/FormTypes/form.interface";
import { setModalState, setSeverityOption } from "../../redux/modal/slice";
import { ModalType } from "../../redux/modal/types";
import { AlertColor } from "@mui/material";

type Order = {
  name: string;
  phoneNumber: string;
  email: string;
  secondPhoneNumber: string;
  receiverName: string;
  comment: string;
  deliveryMethod: DeliveryRadioGroupOption;
  paymentMethod: PayRadioGroupOptions;
  appliedPromoCode?: PromoCode;
  cartItems: CartItem[];
  finalPrice: number;
  address?: {
    deliveryAddress: string;
    apartmentNumber: string;
    deliveryTime: string;
  };
};

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "оформление заказа", path: "/order" },
];

const TITLE_CLASSNAME =
  "flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase";
const SUBTITLE_CLASSNAME =
  "flex items-center ml-[95px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME = "order__title relative z-10 mt-16";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();

  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const submitOrder = useCallback(
    (
      formData: IOrderForm,
      finalPrice: number,
      deliveryAddress?: string,
      appliedPromoCode?: PromoCode
    ) => {
      const order: Order = {
        name: formData.name,
        phoneNumber: formData.phone,
        email: formData.email,
        secondPhoneNumber: formData.secondPhone,
        receiverName: formData.receiverName,
        comment: formData.comment,
        deliveryMethod: formData.deliveryRadioGroup,
        paymentMethod: formData.payRadioGroupOptions,
        cartItems: cartItems,
        finalPrice,
        ...(deliveryAddress && {
          address: {
            deliveryAddress,
            apartmentNumber: formData.apartmentNumber,
            deliveryTime: formData.deliveryTime,
          },
        }),
        ...(appliedPromoCode && { appliedPromoCode }),
      };

      postOrder(order);
    },
    [dispatch]
  );

  const sendAlert = useCallback(
    (severityOption: AlertColor) => {
      dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
      dispatch(setSeverityOption({ severity: severityOption }));
    },
    [dispatch]
  );

  const postOrder = async (order: Order) => {
    try {
      await axios.post("http://localhost:3000/api/order/", order);
      sendAlert("success");
    } catch (error) {
      console.log("Ошибка подтверждения заказа", error);
      sendAlert("error");
    }
  };

  return (
    <div className="order_page relative pt-[120px] pb-[200px] max-h-[3000px] bg-[#040A0A]">
      <DecorativeElement className="absolute w-[217px] h-[174px] blur-[125px] bg-light-turquoise rounded-[50%] -rotate-[71.859deg] -top-[5rem] -left-[4rem] z-10" />
      <img
        src="./img/PagesImg/OrderImg/FlowerBgLeft.png"
        className="absolute top-0 left-0 z-20"
      />
      <img
        src="./img/PagesImg/OrderImg/FlowerBgFirstRight.png"
        className="absolute top-0 right-0 z-20"
      />
      <img
        src="./img/PagesImg/OrderImg/FlowerBgSecondRight.png"
        className="absolute top-0 right-0 z-20"
      />
      <DecorativeElement className="absolute w-[504px] h-[625px] blur-[125px] bg-cherry rounded-[50%] -top-[5rem] right-0 z-10" />
      <DecorativeElement className="absolute w-[403px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] top-[80rem] right-0 z-[15]" />
      <DecorativeElement className="absolute w-[355px] h-[365px] blur-[125px] bg-cherry rounded-[50%] top-[88rem] right-[5rem] z-10" />
      <div className="order_page__wrapper mx-auto container relative z-30">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="оформление"
          subtitle="заказа"
          titleClassName={TITLE_CLASSNAME}
          subtitleClassName={SUBTITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <div className="order_block mt-20">
          <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
            Оформление заказа
          </h2>
          <div className="order__content_block flex justify-between mt-10 w-full">
            {/* form */}
            <OrderFormBlock
              submitOrder={submitOrder}
              totalPrice={totalPrice}
              sendAlert={sendAlert}
            />
            {/* form */}
            <div className="order__cart_items">
              <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
                Ваш заказ:
              </h3>
              <div className="cart_items flex flex-col w-[350px] [&:first-of-type]:border-t border-[#555] mt-11">
                {cartItems.map((item) => (
                  <CartCardBlock
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    imageUrl={item.imageUrl}
                    quantity={item.quantity}
                    dispatch={dispatch}
                  />
                ))}
              </div>
              <h3 className="text-[14px] text-light-turquoise font-bold tracking-[0.28px] uppercase mt-5">
                Предварительный итог: {totalPrice} руб.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <DecorativeElement className="absolute w-[100px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] rotate-[21.097deg] -bottom-[3rem] left-0 z-10" />
      <DecorativeElement className="absolute w-[700px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] rotate-[21.097deg] -bottom-[12rem] right-[35%] z-10" />
      <DecorativeElement className="absolute w-[355px] h-[365px] blur-[125px] bg-cherry rounded-[50%] -bottom-[8rem] right-0 z-10" />
    </div>
  );
};

export default OrderPage;
