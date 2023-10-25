import { FC } from "react";

const steps = [
  { step: 1, info: "Выберите какие цветы или подарки вы хотите купить" },
  {
    step: 2,
    info: "Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp",
  },
  {
    step: 3,
    info: "Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне",
  },
  {
    step: 4,
    info: "Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен",
  },
  {
    step: 5,
    info: "Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга",
  },
];

export const AboutOrderBlock: FC = () => {
  return (
    <div className="about_order relative h-[1000px]">
      <img
        className="absolute top-10 w-[562px] h-[845px]"
        src="./img/bgElements/HomeBg/flowerBg.png"
        alt="Flower"
      />

      <div className="about_order__wrapper container mx-auto">
        <div className="about_order__title">
          <h1 className="title flex items-center text-[100px] h-[100px] font-normal tracking-[2px] uppercase font-cormorant">
            Как сделать
          </h1>
          <h1 className="title flex items-center text-[100px] h-[100px] font-normal tracking-[2px] uppercase font-cormorant">
            заказ
          </h1>
        </div>
        <div className="mb-5 ml-28 flex justify-center">
          <div className="bg-pink w-[65px] h-[10px]" />
        </div>
        <div className="about_order__content relative flex content-end flex-col gap-10 gap-x-[110px] h-[500px] flex-wrap">
          {steps.map((obj) => (
            <div key={obj.step} className="content_block flex flex-col gap-3">
              <h1 className="title text-pink text-[30px] font-bold tracking-[1.2px] uppercase">
                {obj.step} шаг
              </h1>
              <p className="text-[14px] max-w-[260px] font-normal tracking-[.56px] uppercase">
                {obj.info}
              </p>
            </div>
          ))}
          <img className="absolute right-0 -bottom-[4rem] rotate-[-11.947deg]" src="./img/signature.png" />
          <div className="relative z-10 border-r-[1px] border-pink w-0 h-[437px] float-right" />
        </div>
      </div>
    </div>
  );
};
