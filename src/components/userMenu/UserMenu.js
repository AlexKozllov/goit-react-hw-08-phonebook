import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations/authOperation";

const UserMenu = () => {
  const curentToken = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logoutUser(curentToken));
  };

  return (
    <div>
      <h3>dsadsdsa@mail.com</h3>
      <button type="submit" onClick={handleLogout}>
        Logaut
      </button>
    </div>
  );
};

export default UserMenu;
