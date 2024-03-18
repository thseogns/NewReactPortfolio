/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import listReducer from "../features/displaySlice";
import loginReducer from "../features/loginSlice";
import windowReducer from "../features/windowSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
    login: loginReducer,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
