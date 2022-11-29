import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clearForm } from "./accountSlice";

export const itineraryApi = createApi({
  reducerPath: "itineraries",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  endpoints: (builder) => ({
    getItineraries: builder.query({
      query: () => `/api/itineraries`,
    }),
  }),
});

export const { useGetItinerariesQuery, useGetItineraryQuery } = itineraryApi;
