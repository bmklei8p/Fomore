import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../app/accountSlice";
import { eventTargetSelector as target, preventDefault } from "../../app/utils";
import { useLogInMutation } from "../../app/accountApi";

export const GuestLoginButton = ({ displayType }) => {
  const dispatch = useDispatch();
  const [logIn] = useLogInMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );
  // check if i can remove this variable field- i think I can? on next push

  return (
    <form
      style={{ padding: "8px" }}
      method="POST"
      onSubmit={preventDefault(logIn, target)}
    >
      <input
        readOnly
        required
        value="guest@guest.com"
        name="username"
        className="input"
        type="password"
        style={{ display: "none" }}
      />
      <input
        readOnly
        required
        value="guest"
        name="password"
        className="input"
        type="password"
        style={{ display: "none" }}
      />
      <button className={"button is-primary"}>
        <strong>Guest Login</strong>
      </button>
    </form>
  );
};
