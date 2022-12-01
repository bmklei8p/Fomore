import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itineraryApi } from "./itineraryApi";
import { eventApi } from "./eventApi";
import { yelpApi } from "./yelpApi";
import { searchSlice } from "./searchSlice";
import { accountSlice } from './accountSlice';
import { itinerarySlice } from "./itinerarySlice";

export const store = configureStore({
  reducer: {
    [itineraryApi.reducerPath]: itineraryApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [yelpApi.reducerPath]: yelpApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
    [itinerarySlice.name]: itinerarySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(itineraryApi.middleware)
      .concat(yelpApi.middleware)
      .concat(eventApi.middleware);
  },
});

setupListeners(store.dispatch);
