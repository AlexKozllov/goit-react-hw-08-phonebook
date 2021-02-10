import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  logoutError,
  logoutSuccess,
  refreshUserError,
  refreshUserSuccess,
  signInError,
  signInSuccess,
  signUpError,
  signUpSuccess,
} from "../actions/authActions";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(
  {},
  {
    [signUpSuccess]: (state, action) => action.payload.user,
    [signInSuccess]: (state, action) => action.payload.user,
    [refreshUserSuccess]: (state, action) => action.payload,
    [logoutSuccess]: (state, action) => initialUserState,
  }
);

const token = createReducer(null, {
  [signUpSuccess]: (state, action) => action.payload.token,
  [signInSuccess]: (state, action) => action.payload.token,
  [logoutSuccess]: (state, action) => null,
});

const error = createReducer(null, {
  [signUpError]: (state, action) => action.payload,
  [signUpSuccess]: (state, action) => null,
  [signInError]: (state, action) => action.payload,
  [signInSuccess]: (state, action) => null,
  [logoutError]: (state, action) => action.payload,
  [logoutSuccess]: (state, action) => null,
  [refreshUserError]: (state, action) => action.payload,
  [refreshUserSuccess]: (state, action) => null,
});

const authRedusers = combineReducers({
  user,
  token,
  error,
});

export { authRedusers };
