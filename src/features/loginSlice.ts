/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  user: { userName: string; password: string } | null;
}

const initialState: LoginState = {
  user: null,
};

export const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userName: string; password: string } | null>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
