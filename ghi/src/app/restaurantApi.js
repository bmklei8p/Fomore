import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearForm } from './accountSlice';

export const restaurantApi = createApi({
  reducerPath: 'restaurants',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  endpoints: builder => ({
    getRestaurants: builder.query({
      query: (search) => `api/restaurant_search/?location=${search.location}&date=${search.date}T18%3A43%3A56.706Z&itinerary_id=12343a8014829a865bbf700d`,
      })
    }),
  });





export const {
  useGetRestaurantsQuery,
} = restaurantApi;
