import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { itineraryApi } from './yelpApi';
// import { accountSlice } from './accountSlice';

export const store = configureStore({
  reducer: {
    [itineraryApi.reducerPath]: itineraryApi.reducer,
    // [accountSlice.name]: accountSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(itineraryApi.middleware);
  },
});

setupListeners(store.dispatch);
