import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations/authOperation";
import {
  getCurentToken,
  getUserEmail,
} from "../../redux/selectors/contactsSelectors";

import s from "./userMenu.module.css";

const UserMenu = () => {
  const curentToken = useSelector((state) => getCurentToken(state));
  const userEmail = useSelector((state) => getUserEmail(state));
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logoutUser(curentToken));
  };

  return (
    <div className={s.container}>
      <h3 className={s.mail}>{userEmail}</h3>
      <button type="submit" onClick={handleLogout} className={s.btn}>
        Logaut
      </button>
    </div>
  );
};

export default UserMenu;
