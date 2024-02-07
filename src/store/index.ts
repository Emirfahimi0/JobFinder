import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";

export const store = configureStore({
  reducer: { global: globalReducer },
});

const { getState, dispatch } = store;

export type GlobalStoreProps = ReturnType<typeof getState>;
export type AppDispatch = ReturnType<typeof dispatch>;
