/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WindowState {
  windowToggle: boolean;
  backgroundNumber: number;
  windowPageDisplay: boolean;
  windowPageName: string;
}
let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber);

const initialState: WindowState = {
  windowToggle: false,
  backgroundNumber: randomNumber,
  windowPageDisplay: false,
  windowPageName: "바탕화면",
};

export const WindowSlice = createSlice({
  name: "windowState",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.windowToggle = action.payload;
    },
    number: (state, action: PayloadAction<number>) => {
      state.backgroundNumber = action.payload;
    },
    windowDisplay: (state, action: PayloadAction<boolean>) => {
      state.windowPageDisplay = action.payload;
    },
    pageName: (state, action: PayloadAction<string>) => {
      state.windowPageName = action.payload;
    },
  },
});

export const { toggle, number, windowDisplay, pageName } = WindowSlice.actions;

export default WindowSlice.reducer;
