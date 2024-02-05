import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // Enable devtools in all environments
});

export default store;
