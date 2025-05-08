import { FC, memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../redux/store";
import { ModalType } from "../../../redux/modal/types";
import { setModalState } from "../../../redux/modal/slice";
import {
  selectModalStatus,
  selectSeverityOption,
} from "../../../redux/modal/selectors";

import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

enum AlertText {
  "success" = "Операция выполнена успешно.",
  "info" = "Обратите внимание на дополнительную информацию.",
  "warning" = "Предупреждение: проверьте введённые данные.",
  "error" = "Произошла ошибка. Попробуйте позже.",
}

const SCROLL_HIDE_THRESHOLD = 80;

export const AlertBlock: FC = memo(() => {
  const dispatch = useAppDispatch();

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showHeader, toggleShowHeader] = useState<boolean>(false);

  const severityOption = useSelector(selectSeverityOption);
  const { isOpenAlertBlock } = useSelector(selectModalStatus);

  const onCloseAlert = () => {
    dispatch(setModalState({ modalType: ModalType.Alert, isOpen: false }));
  };

  const handleLastScrollY = () => {
    toggleShowHeader(window.scrollY > lastScrollY ? false : true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (!isOpenAlertBlock) return;
    const timer = setTimeout(() => onCloseAlert(), 10000);
    return () => clearTimeout(timer);
  }, [isOpenAlertBlock]);

  useEffect(() => {
    window.addEventListener("scroll", handleLastScrollY);

    return () => {
      window.removeEventListener("scroll", handleLastScrollY);
    };
  }, [lastScrollY]);

  return createPortal(
    <Box
      sx={{
        position: "fixed",
        top: lastScrollY > SCROLL_HIDE_THRESHOLD && showHeader ? 100 : 40,
        right: 0,
        zIndex: 1300,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: isOpenAlertBlock ? 1 : 0,
        transform: `translate(-50%, ${isOpenAlertBlock ? "0" : "-10px"})`,
      }}
    >
      {isOpenAlertBlock && (
        <Alert
          severity={severityOption}
          onClose={onCloseAlert}
          variant="filled"
        >
          {AlertText[severityOption]}
        </Alert>
      )}
    </Box>,
    document.getElementById("portal") as Element
  );
});
