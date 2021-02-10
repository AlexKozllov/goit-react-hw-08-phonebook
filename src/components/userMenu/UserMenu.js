import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/operations/authOperation";

const UserMenu = () => {
  const curentToken = useSelector((state) => state.auth.token);
  const userEmail = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    console.log("curentToken", curentToken);
    dispatch(logoutUser(curentToken));
  };

  return (
    <div>
      <h3>{userEmail}</h3>
      <button type="submit" onClick={handleLogout}>
        Logaut
      </button>
    </div>
  );
};

export default UserMenu;
