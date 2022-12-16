import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface CounterState{
  value: number;
}
const initalState: CounterState = {
  value:1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:initalState,
  reducers: {
    increment: (state) => { 
      state.value++;
    },
    decrement: (state) => { 
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => { 
      state.value += action.payload;
    }
  }
})
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
