import { FC } from "react";
import { DecorativeElement } from "../../components";
import { Link } from "react-router-dom";

const EmptyPage: FC = () => {
  return (
    <div className="empty_page relative pt-[120px] h-[1100px] bg-[#040A0A]">
      <img
        className="absolute top-0 z-20"
        src="./img/PagesImg/EmptyImg/EmptyIntro.png"
        alt="leafs"
      />
      <img
        className="absolute right-0 top-8 z-20"
        src="./img/PagesImg/EmptyImg/EmptyBgRightTop.png"
        alt="leafs"
      />
      <img
        className="absolute right-0 top-40 z-20"
        src="./img/PagesImg/EmptyImg/EmptyBgRight.png"
        alt="leafs"
      />

      <div className="empty_page__wrapper mx-auto container">
        <div className="empty_page__error_block flex relative h-[400px]">
          <h1 className="error_title text-[600px] -bottom-[115px] left-[8rem] font-normal uppercase font-cormorant absolute z-10">
            4
          </h1>
          <h1 className="error_title text-[600px] -bottom-[19rem] left-[22rem] font-normal uppercase font-cormorant absolute z-30">
            0
          </h1>
          <h1 className="error_title text-[600px] -bottom-[3rem] left-[32rem] font-normal uppercase font-cormorant absolute z-10">
            4
          </h1>
        </div>

        <div className="flex flex-col gap-5 mt-[16rem] items-end w-[85%] relative z-40">
          <p className="text-[14px] font-normal uppercase">Ошибка 404</p>
          <p className="text-[14px] font-normal uppercase">
            Упс...Такой страницы нет
          </p>
          <Link
            to={"/"}
            className="text-[14px] font-bold uppercase underline text-[#43ffd2]"
          >
            на главную
          </Link>
        </div>
      </div>
      <img
        className="absolute top-56 right-96 rotate-[-14.166deg]"
        src="./img/PagesImg/EmptyImg/EmptySign.png"
        alt="sign"
      />
      <DecorativeElement className="absolute bg-[#163d8f] w-[167px] h-[353px] right-28 top-0 rotate-[21.097deg] blur-[125px] rounded-[50%]" />
      <DecorativeElement className="absolute bg-[#163d8f] w-[284px] h-[600px] right-28 -bottom-28 rotate-[21.097deg] blur-[125px] rounded-[50%]" />
      <DecorativeElement className="absolute bg-[#163d8f] w-[284px] h-[600px] -left-28 -bottom-48 rotate-[21.097deg] blur-[125px] rounded-[50%] z-20" />
    </div>
  );
};

export default EmptyPage;
