import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { RootState } from "../../redux/store";
import { CartItem } from "../../redux/cart/types";

import { CartCardBlock, DecorativeElement } from "../../components";

import {
  DeliveryRadioGroupOption,
  PayRadioGroupOptions,
} from "../../components/PagesCompanents/OrderCompanents/OrderFormBlock";
import { PromoCode } from "../../components/PagesCompanents/OrderCompanents/OrderFormBlock/FormTypes/form.types";
import { IOrderForm } from "../../components/PagesCompanents/OrderCompanents/OrderFormBlock/FormTypes/form.interface";

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

const OrderPage: FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const submitOrder = (
    formData: IOrderForm,
    finalPrice: number,
    deliveryAddress: string,
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
      cartItems: items,
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
  };

  const postOrder = async (order: Order) => {
    try {
      await axios.post(
        "https://663a356f1ae792804bee79f1.mockapi.io/orders",
        order
      );
    } catch (error) {
      console.log("Ошибка подтверждения заказа", error);
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
        <div className="order__path">
          <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
            Главная / оформление заказа
          </h3>
        </div>

        <div className="order__title relative z-10 mt-16">
          <h1 className="flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            оформление
          </h1>
          <h1 className="flex items-center ml-[95px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            заказа
          </h1>
        </div>

        <div className="order_block mt-20">
          <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
            Оформление заказа
          </h2>
          <div className="order__content_block flex justify-between mt-10 w-full">
            {/* form */}
            <Outlet context={{ submitOrder, totalPrice }} />
            {/* form */}
            <div className="order__cart_items">
              <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
                Ваш заказ:
              </h3>
              <div className="cart_items flex flex-col w-[350px] [&:first-of-type]:border-t border-[#555] mt-11">
                {items.map((item) => (
                  <CartCardBlock
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    imageUrl={item.imageUrl}
                    count={item.count}
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
