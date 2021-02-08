import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
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
  signUpSuccess,
  signUpRequest,
  signUpError,
} from "../actions/phBookActions";

const user = createReducer(
  {},
  {
    [signUpSuccess]: (state, action) => action.payload,
  }
);

const items = createReducer([], {
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [getContactsSuccess]: (state, action) => [...action.payload],
  [removeContactSuccess]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});
const filter = createReducer("", {
  [setFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const contactsReusers = combineReducers({ items, filter });

export { contactsReusers, loading, user };
