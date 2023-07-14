"use client";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "@/store/hooks";
import { selectLoadingCount } from "@/store/features/loadingCountSlice";

const LoadingMask = (): JSX.Element => {
  const open = useAppSelector(selectLoadingCount) > 0;

  return (
    <Backdrop open={open} style={{ zIndex: 1350 }}>
      <CircularProgress />
    </Backdrop>
  );
};

export default LoadingMask;
