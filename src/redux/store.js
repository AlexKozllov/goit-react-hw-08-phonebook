import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import { contactsReusers, loading, user } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({
  user,
  contacts: contactsReusers,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export { store };
