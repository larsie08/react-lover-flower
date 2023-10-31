import { FC } from "react";

export const AboutTeamBlock: FC = () => {
  return (
    <div className="about_us__team relative flex justify-end">
      <div className="absolute right-[45rem] top-0 h-[294px] w-[235px] -rotate-[71.859deg] rounded-[294px] bg-[#C8A156] blur-[125px]" />
      <div className="wrapper flex flex-col z-20 py-8 px-5 gap-5 backdrop-blur-[10px] bg-[black]/[.20]">
        <h3 className="title text-[20px] font-light leading-[26px] tracking-[.4px] uppercase">
          молодая команда разных людей с одинаковыми ценностями.
        </h3>
        <p className="content max-w-[850px] text-[20px] font-light leading-[26px] tracking-[.8px]">
          Мы считаем, что удовольствие от качества длится дольше, чем
          удовольствие от низкой цены. И поэтому в создание нашей букетерии мы
          вложили все, чем располагаем: душу, сердце, время и мечты! Мы готовы
          обещать вам только то, что можем сделать. А делаем мы только самое
          качественное, самое интересное и обязательно уникальное. Мы всегда
          честны со своими клиентами во всем – в нашем каталоге только те
          букеты, которые вы действительно сможете купить.
        </p>
      </div>
    </div>
  );
};
