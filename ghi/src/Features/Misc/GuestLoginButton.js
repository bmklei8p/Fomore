import { useDispatch } from "react-redux"
import { updateField } from "../../app/accountSlice";


export const GuestLoginButton = () => {
    const dispatch = useDispatch();



    const handleGuestLoginClick = () => {
        const guestUserName = "guest@guest.com";
        const guestPassword = "guest";
        dispatch(updateField({ field: "username", value: guestUserName }));
        dispatch(updateField({ field: "password", value: guestPassword }));

        }


    return (
        <>
            <button className="button is-primary" onClick={handleGuestLoginClick()}>
                <strong>Guest Login</strong>
            </button>
        </>
    )
}