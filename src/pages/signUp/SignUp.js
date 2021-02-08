import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpContact } from "../../redux/operations/phBookOperations";

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
    dispatch(signUpContact({ ...dataSignUp }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            value={dataSignUp.value}
            onChange={handleChange}
          />
        </label>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;