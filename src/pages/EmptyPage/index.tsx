import { FC } from "react";
import { DecorativeElement } from "../../components";
import { Link } from "react-router-dom";

const EmptyPage: FC = () => {
  return (
    <div className="empty_page relative bg-[#040A0A] pt-[120px] max-lg:pb-[150px] lg:pb-[200px]">
      <picture>
        <source
          srcSet="./img/PagesImg/EmptyImg/adaptiveFlower.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute left-0 max-lg:z-20 max-lg:top-[5rem] max-lg:h-[550px] max-lg:w-[350px] lg:h-[1000px] lg:w-[1500px] lg:top-0"
          src="./img/PagesImg/EmptyImg/EmptyIntro.png"
          srcSet="./img/PagesImg/EmptyImg/EmptyIntro.png 1280w, ./img/PagesImg/EmptyImg/adaptiveFlower.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      {/* <img
        className="absolute top-0 z-20 max-lg:h-[513px] max-lg:w-[350px]"
        src="./img/PagesImg/EmptyImg/EmptyIntro.png"
        alt="leafs"
      /> */}
      <img
        className="absolute right-0 top-8 z-20 max-lg:hidden"
        src="./img/PagesImg/EmptyImg/EmptyBgRightTop.png"
        alt="leafs"
      />
      <img
        className="absolute right-0 top-40 z-20 max-lg:hidden"
        src="./img/PagesImg/EmptyImg/EmptyBgRight.png"
        alt="leafs"
      />

      <div className="empty_page__wrapper container mx-auto">
        <div className="empty_page__error_block relative flex h-[400px]">
          <h1 className="error_title absolute font-cormorant font-normal uppercase max-lg:top-[-13rem] max-lg:z-0 max-lg:text-[300px] lg:-bottom-[115px] lg:left-[8rem] lg:z-10 lg:text-[600px]">
            4
          </h1>
          <h1 className="error_title absolute z-30 font-cormorant font-normal uppercase max-lg:left-[6rem] max-lg:top-[-6rem] max-lg:text-[300px] lg:-bottom-[19rem] lg:left-[22rem] lg:text-[600px]">
            0
          </h1>
          <h1 className="error_title absolute font-cormorant font-normal uppercase max-lg:left-[11rem] max-lg:top-[-11rem] max-lg:z-[25] max-lg:text-[300px] lg:-bottom-[3rem] lg:left-[32rem] lg:text-[600px]">
            4
          </h1>
        </div>

        <div className="relative z-40 flex flex-col gap-5 max-lg:items-center lg:mt-[16rem] lg:w-[85%] lg:items-end">
          <p className="text-[14px] font-normal uppercase">Ошибка 404</p>
          <p className="text-[14px] font-normal uppercase">
            Упс...Такой страницы нет
          </p>
          <Link
            to={"/"}
            className="text-[14px] font-bold uppercase text-[#43ffd2] underline"
          >
            на главную
          </Link>
        </div>
      </div>
      <img
        className="absolute rotate-[-14.166deg] max-lg:right-4 max-lg:top-[22rem] max-lg:h-[120px] lg:right-96 lg:top-56"
        src="./img/PagesImg/EmptyImg/EmptySign.png"
        alt="sign"
      />
      <DecorativeElement className="absolute rounded-[50%] bg-[#163d8f] max-lg:left-[-3rem] max-lg:top-[3rem] max-lg:h-[100px] max-lg:w-[200px] max-lg:rotate-[32deg] max-lg:blur-[75px] lg:right-28 lg:top-0 lg:h-[353px] lg:w-[167px] lg:rotate-[21.097deg] lg:blur-[125px]" />
      <DecorativeElement className="absolute rounded-[50%] bg-[#163d8f] max-lg:bottom-[6rem] max-lg:left-[-5rem] max-lg:h-[100px] max-lg:w-[200px] max-lg:rotate-[32deg] max-lg:blur-[75px] lg:-bottom-28 lg:right-28 lg:h-[600px] lg:w-[284px] lg:rotate-[21.097deg] lg:blur-[125px]" />
      <DecorativeElement className="absolute z-20 rotate-[21.097deg] rounded-[50%] bg-[#163d8f] max-lg:bottom-[-2rem] max-lg:right-[1rem] max-lg:h-[100px] max-lg:w-[200px] max-lg:blur-[50px] lg:-bottom-48 lg:-left-28 lg:h-[600px] lg:w-[284px] lg:blur-[125px]" />
    </div>
  );
};

export default EmptyPage;
