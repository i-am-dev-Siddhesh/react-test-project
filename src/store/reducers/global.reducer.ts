import { IData } from "@/src/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  data: IData[];
}

const initialState: IState = {
  data: [],
};

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLatestData: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setLatestData } = global.actions;

export default global.reducer;
