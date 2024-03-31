import { FC } from "react";

import { useAppDispatch } from "../../../../../../redux/store";
import { setConfirm } from "../../../../../../redux/filter/slice";

export const ConfirmModal: FC = () => {
  const dispatch = useAppDispatch();

  const submitConfirm = () => dispatch(setConfirm(true));

  return (
    <div className="confirm_modal absolute -right-4 top-0 z-20">
      <div className="relative">
        <button
          onClick={submitConfirm}
          className="text-cherry p-2 bg-light-turquoise rounded-lg"
        >
          подтвердить
        </button>
      </div>
    </div>
  );
};
