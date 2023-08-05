import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../app/accountSlice";
import { eventTargetSelector as target, preventDefault } from "../../app/utils";
import { useLogInMutation } from "../../app/accountApi";
// import { useNavigate } from "react-router-dom";

export const GuestLoginButton = ({ displayType }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logIn] = useLogInMutation();
  // eslint-disable-next-line
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );
  // check if i can remove this variable field- i think I can? on next push

  return (
    <form method="POST" onSubmit={preventDefault(logIn, target)}>
      <input
        readOnly
        required
        value="guest@guest.com"
        name="username"
        className="input"
        type="username"
        style={{ display: "none" }}
        autoComplete="on"
      />
      <input
        readOnly
        required
        value="guest"
        name="password"
        className="input"
        type="password"
        style={{ display: "none" }}
        autoComplete="on"
      />
      <button
        style={{ fontWeight: "bold", backgroundColor: "#348888" }}
        className={displayType ? "_sign-up-button" : "button is-primary"}
        type="submit"
      >
        Guest Login
      </button>
    </form>
  );
};
