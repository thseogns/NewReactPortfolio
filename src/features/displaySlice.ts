/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  listNumber: string;
  toggle: boolean;
  router: number;
  hover: string | null;
}

const initialState: CounterState = {
  listNumber: "...",
  toggle: false,
  router: 0,
  hover: null,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    list: (state, action: PayloadAction<string>) => {
      state.listNumber = action.payload;
    },
    toggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
    route: (state, action: PayloadAction<number>) => {
      state.router = action.payload;
    },
    hover: (state, action: PayloadAction<string | null>) => {
      state.hover = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { list, toggle, route, hover } = listSlice.actions;

export default listSlice.reducer;
