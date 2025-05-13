import { FC } from "react";
import { DecorativeElement } from "../../../../components";

export const AboutTeamBlock: FC = () => {
  return (
    <div className="about_us__team relative flex justify-end">
      <DecorativeElement className="absolute md:right-[45rem] max-md:left-0 md:top-0 max-md:top-[15rem] md:h-[294px] max-md:h-[180px] w-[235px] -rotate-[71.859deg] rounded-[294px] bg-[#C8A156] blur-[125px]" />

      <div className="wrapper max-md:w-[260px] flex flex-col z-20 md:py-8 max-md:py-4 px-5 gap-5 backdrop-blur-[10px] bg-[black]/[.20]">
        <h3 className="title md:text-[20px] max-md:text-[14px] font-light leading-[26px] tracking-[.4px] uppercase">
          молодая команда разных людей с одинаковыми ценностями.
        </h3>
        <p className="content max-w-[850px] md:text-[20px] max-md:text-[14px] font-light leading-[26px] tracking-[.8px]">
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
