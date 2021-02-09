import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction("@phBook/signUpRequest");
const signUpSuccess = createAction("@phBook/signUpSuccess");
const signUpError = createAction("@phBook/signUpErrror");

const signInRequest = createAction("@phBook/signInRequest");
const signInSuccess = createAction("@phBook/signInSuccess");
const signInError = createAction("@phBook/signInErrror");

const logoauRequest = createAction("@phBook/logoauRequest");
const logoutSuccess = createAction("@phBook/logoauSuccess");
const logoutError = createAction("@phBook/logoauErrror");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  logoauRequest,
  logoutSuccess,
  logoutError,
};
