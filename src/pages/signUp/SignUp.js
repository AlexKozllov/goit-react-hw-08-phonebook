import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/operations/authOperation";

import s from "./signUp.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [dataSignUp, setDataSignUp] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSignUp({ ...dataSignUp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ ...dataSignUp }));
    setDataSignUp({ ...initialState });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={dataSignUp.name}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            value={dataSignUp.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={dataSignUp.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.btn}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
