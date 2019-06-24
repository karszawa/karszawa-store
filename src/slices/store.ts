import { getDefaultMiddleware, configureStore } from "redux-starter-kit";
import logger from "redux-logger";
import reducer from "./reducer";
import { CounterState } from "~/slices/counter";

export interface RootState {
  counter: CounterState;
}

export const createStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];
  const store = configureStore({
    reducer: reducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== "production"
  });

  return store;
};
