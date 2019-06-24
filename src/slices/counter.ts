import { createSlice, PayloadAction } from "redux-starter-kit";

export interface State {
  value: number;
}

interface IncrementPayload {
  amount: number;
}

const initialState: State = {
  value: 0
};

const slice = createSlice({
  slice: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action: PayloadAction<IncrementPayload>): State {
      return {
        ...state,
        value: state.value + action.payload.amount
      };
    },
    decrement(state, action: PayloadAction<{}>): State {
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
