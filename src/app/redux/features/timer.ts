import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CountDownTimer = {
  currentValue: string;
};
const initialState: CountDownTimer = {
  currentValue: "00:00",
};
export const timer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    reset: () => initialState,
    timerChange: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload;
    },
  },
});
export const { timerChange } = timer.actions;
export default timer.reducer;
