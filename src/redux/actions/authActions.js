import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction("@phBook/signUpRequest");
const signUpSuccess = createAction("@phBook/signUpSuccess");
const signUpError = createAction("@phBook/signUpErrror");

const signInRequest = createAction("@phBook/signInRequest");
const signInSuccess = createAction("@phBook/signInSuccess");
const signInError = createAction("@phBook/signInErrror");

const logoautRequest = createAction("@phBook/logoauRequest");
const logoutSuccess = createAction("@phBook/logoauSuccess");
const logoutError = createAction("@phBook/logoauErrror");

const refreshUserRequest = createAction("@phBook/refreshUserRequest");
const refreshUserSuccess = createAction("@phBook/refreshUserSuccess");
const refreshUserError = createAction("@phBook/refreshUserErrror");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  logoautRequest,
  logoutSuccess,
  logoutError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
};
