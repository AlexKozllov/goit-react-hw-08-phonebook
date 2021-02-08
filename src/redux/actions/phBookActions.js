import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction("@phBook/signUpRequest");
const signUpSuccess = createAction("@phBook/signUpSuccess");
const signUpError = createAction("@phBook/signUpErrror");

const addContactRequest = createAction("@phBook/addRequest");
const addContactSuccess = createAction("@phBook/addSuccess");
const addContactError = createAction("@phBook/addErrror");

const getContactsRequest = createAction("@phBook/getRequest");
const getContactsSuccess = createAction("@phBook/getSuccess");
const getContactsError = createAction("@phBook/getErrror");

const removeContactRequest = createAction("@phBook/removeRequest");
const removeContactSuccess = createAction("@phBook/removeSuccess");
const removeContactError = createAction("@phBook/removeErrror");

const setFilter = createAction("@phBook/setFilter");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  setFilter,
};
