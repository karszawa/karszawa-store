import { createSlice, PayloadAction } from "redux-starter-kit";

export interface CounterState {
  value: number;
}

interface IncrementPayload {
  amount: number;
}

const slice = createSlice({
  slice: "counter",
  initialState: {
    value: 0
  } as CounterState,
  reducers: {
    increment(state, action: PayloadAction<IncrementPayload>) {
      return {
        ...state,
        value: state.value + action.payload.amount
      };
    },
    decrement(state, action) {
      return {
        ...state,
        value: state.value - 1
      };
    }
  }
});

const { actions } = slice;
export const { increment, decrement } = actions;
export default slice;
