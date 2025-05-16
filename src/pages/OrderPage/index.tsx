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
  "flex items-center lg:h-[100px] lg:text-[100px] font-normal max-lg:text-[40px] font-cormorant tracking-[2px] uppercase";
const SUBTITLE_CLASSNAME =
  "flex items-center lg:ml-[95px] lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME =
  "order__title lg:mt-16 relative z-10 max-lg:mt-5";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();

  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart,
  );

  const submitOrder = useCallback(
    (
      formData: IOrderForm,
      finalPrice: number,
      deliveryAddress?: string,
      appliedPromoCode?: PromoCode,
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
    [dispatch],
  );

  const sendAlert = useCallback(
    (severityOption: AlertColor) => {
      dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
      dispatch(setSeverityOption({ severity: severityOption }));
    },
    [dispatch],
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
    <div className="order_page relative bg-[#040A0A] pt-[120px] max-lg:px-4 max-lg:pb-[150px] lg:pb-[200px]">
      <DecorativeElement className="absolute z-10 w-[217px] -rotate-[71.859deg] rounded-[50%] bg-light-turquoise max-lg:left-[-3rem] max-lg:top-0 max-lg:h-[100px] max-lg:blur-[100px] lg:-left-[4rem] lg:-top-[5rem] lg:h-[174px] lg:blur-[125px]" />
      <DecorativeElement className="absolute -top-[5rem] right-0 z-10 h-[625px] w-[504px] rounded-[50%] bg-cherry blur-[125px] max-lg:hidden" />
      <DecorativeElement className="absolute right-0 z-[15] h-[211px] w-[403px] rounded-[50%] bg-light-turquoise max-lg:top-[70rem] max-lg:h-[100px] max-lg:w-[100px] max-lg:blur-[75px] lg:top-[80rem] lg:blur-[125px]" />
      <DecorativeElement className="absolute z-10 rounded-[50%] bg-cherry max-lg:right-0 max-lg:top-[73rem] max-lg:h-[180px] max-lg:w-[170px] max-lg:blur-[75px] lg:right-[5rem] lg:top-[88rem] lg:h-[365px] lg:w-[355px] lg:blur-[125px]" />
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
      <div className="order_page__wrapper container relative z-30 mx-auto">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="оформление"
          subtitle="заказа"
          titleClassName={TITLE_CLASSNAME}
          subtitleClassName={SUBTITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <div className="order_block mt-20">
          <h2 className="text-[30px] font-bold uppercase text-light-turquoise max-lg:hidden">
            Оформление заказа
          </h2>
          <div className="order__content_block mt-10 flex w-full justify-between">
            {/* form */}
            <OrderFormBlock
              submitOrder={submitOrder}
              totalPrice={totalPrice}
              sendAlert={sendAlert}
            />
            {/* form */}
            <div className="order__cart_items max-lg:hidden">
              <h3 className="form_title text-[14px] font-bold uppercase text-light-turquoise">
                Ваш заказ:
              </h3>
              <div className="cart_items mt-11 flex w-[350px] flex-col border-[#555] [&:first-of-type]:border-t">
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
              <h3 className="mt-5 text-[14px] font-bold uppercase tracking-[0.28px] text-light-turquoise">
                Предварительный итог: {totalPrice} руб.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <DecorativeElement className="absolute z-10 rotate-[21.097deg] rounded-[50%] bg-light-turquoise max-lg:bottom-[-5rem] max-lg:left-[-6rem] max-lg:h-[100px] max-lg:w-[250px] max-lg:blur-[50px] lg:-bottom-[3rem] lg:left-0 lg:h-[211px] lg:w-[100px] lg:blur-[125px]" />
      <DecorativeElement className="absolute -bottom-[12rem] right-[35%] z-10 h-[211px] w-[700px] rotate-[21.097deg] rounded-[50%] bg-light-turquoise blur-[125px] max-lg:hidden" />
      <DecorativeElement className="absolute right-0 z-10 rounded-[50%] bg-cherry max-lg:bottom-[-3rem] max-lg:h-[190px] max-lg:w-[180px] max-lg:blur-[55px] lg:-bottom-[8rem] lg:h-[365px] lg:w-[355px] lg:blur-[125px]" />
    </div>
  );
};

export default OrderPage;
