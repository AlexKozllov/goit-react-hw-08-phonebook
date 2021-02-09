import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";
import { contactsReusers, loading } from "./redusers/phBookRedusers";
import { authRedusers } from "./redusers/authRedusers";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const authPersistConfig = {
  key: authRedusers,
  storage,
  wtihelist: [authRedusers],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authRedusers),
  contacts: contactsReusers,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

const persistor = persistStore(store);

export { store, persistor };
