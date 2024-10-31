import { FC } from "react";
import { Skeleton } from "@mui/material";
import { ArrowSvg } from "../../../../assets";
import { useNavigate } from "react-router-dom";

export const BouquetSkeletonBlock: FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/catalog");
  };

  return (
    <div className="flex gap-20 mt-16 h-[450px]">
      <div className="flex flex-col items-center justify-between gap-5">
        <ArrowSvg className="h-[20px] w-[20px] rotate-90" />
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            animation="wave"
            sx={{ bgcolor: "grey.900", opacity: "0.6" }}
            width={160}
            height={185}
          />
        ))}
        <ArrowSvg className="h-[20px] w-[20px] -rotate-90" />
      </div>
      <div className="flex gap-14">
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ bgcolor: "grey.900", opacity: "0.6" }}
          width={350}
          height={450}
        />
        <div className="flex flex-col justify-between">
          <button
            onClick={goBack}
            className="flex gap-2 items-center text-[10px] font-normal tracking-[0.4px] uppercase"
          >
            <ArrowSvg className="w-[16px] h-[16px]" /> назад
          </button>
          <div className="title mt-5">
            <Skeleton
              variant="text"
              animation="wave"
              width={400}
              height={50}
              sx={{ bgcolor: "grey.900", opacity: "0.6" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={120}
              height={50}
              sx={{ bgcolor: "grey.900", opacity: "0.6" }}
            />
          </div>
          <div className="flex flex-col">
            <Skeleton
              variant="text"
              animation="wave"
              width={450}
              height={60}
              sx={{ bgcolor: "grey.900", opacity: "0.7" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={450}
              height={60}
              sx={{ bgcolor: "grey.900", opacity: "0.6" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={450}
              height={60}
              sx={{ bgcolor: "grey.900", marginTop: "10px", opacity: "0.6" }}
            />
          </div>

          <div className="flex gap-8">
            <button
              disabled
              className="border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase text-[#555555] border-[#555555] "
            >
              В корзину
            </button>
            <form className="flex justify-around items-center w-[160px] border-[0.5px] border-[#555]">
              <button
                disabled
                className="h-full w-[8px] text-[#555] cursor-pointer"
              >
                –
              </button>
              <b>1</b>
              <button
                disabled
                className="h-full w-[8px] text-[#555] cursor-pointer"
              >
                +
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
