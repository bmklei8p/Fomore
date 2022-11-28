import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { itineraryApi } from './itineraryApi';
import { restaurantApi } from './restaurantApi';
import { searchSlice } from './searchSlice';
// import { accountSlice } from './accountSlice';

export const store = configureStore({
  reducer: {
    [itineraryApi.reducerPath]: itineraryApi.reducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
    //[accountSlice.name]: accountSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,

  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(itineraryApi.middleware).concat(restaurantApi.middleware);

  },
});

setupListeners(store.dispatch);
