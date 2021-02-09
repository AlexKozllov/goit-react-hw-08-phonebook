import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  logoutSuccess,
  signInError,
  signInSuccess,
  signUpError,
  signUpSuccess,
} from "../actions/authActions";

const initialUserState = {
  name: "",
  email: "",
  password: "",
};

const user = createReducer(
  {},
  {
    [signUpSuccess]: (state, action) => ({ ...action.payload.user }),
    [signInSuccess]: (state, action) => ({ ...action.payload.user }),
    [logoutSuccess]: (state, action) => ({ ...initialUserState }),
  }
);

const token = createReducer("", {
  [signUpSuccess]: (state, action) => action.payload.token,
  [signInSuccess]: (state, action) => action.payload.token,
  [logoutSuccess]: (state, action) => "",
});

const error = createReducer(
  {},
  {
    [signUpError]: (state, action) => ({ ...action.payload.token }),
    [signInError]: (state, action) => ({ ...action.payload.token }),
  }
);

const authRedusers = combineReducers({
  user,
  token,
  error,
});

export { authRedusers };
