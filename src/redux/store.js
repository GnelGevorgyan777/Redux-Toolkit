import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducer";

const logger = createLogger();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;