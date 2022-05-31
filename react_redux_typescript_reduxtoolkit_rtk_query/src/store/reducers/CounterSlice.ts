import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
  error: null | string;
}

const initialState: CounterState = {
  counter: 0,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(
      state: CounterState,
      action: PayloadAction<CounterState["counter"]>
    ) {
      state.counter += action.payload;
    },
    decrement(
      state: CounterState,
      action: PayloadAction<CounterState["counter"]>
    ) {
      state.counter -= action.payload;
    },
  },
});

export default counterSlice.reducer;
