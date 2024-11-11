import { FC, memo } from "react";

const balls = [
  { title: "ШАР “ЗВЕЗДА”", url: "./img/balls/star.png" },
  { title: "ШАР “СЕРДЦЕ”", url: "./img/balls/heart.png" },
];

export const CartBallsBlock: FC = memo(() => {
  return (
    <div className="top_block flex flex-col gap-3">
      <div className="title">
        <h2 className="text-[12px] font-normal tracking-[0.24px] uppercase">
          Добавьте к заказу
          <span className="text-light-turquoise"> Шары:</span>
        </h2>
      </div>
      <div className="cards flex justify-between">
        {balls.map((obj, id) => (
          <div key={id} className="card flex h-[60px] gap-3">
            <img src={obj.url} alt="star" />
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-[12px] font-normal tracking-[0.24px] uppercase">
                {obj.title}
              </h3>
              <p className="text-[12px] text-light-turquoise font-bold tracking-[0.48px] uppercase">
                11.00 ₽
              </p>
              <button className="text-[10px] text-light-turquoise font-normal tracking-[0.4px] underline uppercase">
                Добавить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
