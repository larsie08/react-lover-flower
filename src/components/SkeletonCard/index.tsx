import { Skeleton } from "@mui/material";
import { FC } from "react";

export const SkeletonCard: FC = () => {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ bgcolor: "grey.900", opacity: "0.6" }}
        width={255}
        height={335}
      />
      <Skeleton
        variant="text"
        animation="wave"
        height={50}
        sx={{ bgcolor: "grey.900", opacity: "0.6" }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        height={30}
        sx={{ bgcolor: "grey.900", opacity: "0.6" }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={50}
        sx={{ bgcolor: "grey.900", marginTop: "10px", opacity: "0.6" }}
      />
    </div>
  );
};
