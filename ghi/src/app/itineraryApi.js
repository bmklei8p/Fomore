import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itineraryApi = createApi({
  reducerPath: "itineraries",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  endpoints: (builder) => ({
    getItineraries: builder.query({
      query: () => `/api/itineraries`,
    }),
    addItinerary: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        data["start_date"] = data.start_date + "T00:00:00.000Z"
        data["end_date"] = data.end_date + "T00:00:00.000Z"
        return {
          method: "post",
          url: `/api/itineraries`,
          credentials: "include",
          body: data,
        };
      },
    }),
    deleteItinerary: builder.mutation({
      query: (itineraryId) => {
        return {
          method: "delete",
          url: `/api/itineraries/${itineraryId}`,
        };
      },
    }),
    updateItinerary: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        data["start_date"] = data.start_date + "T00:00:00.000Z"
        data["end_date"] = data.end_date + "T00:00:00.000Z"
        const itineraryId = data["id"];
        return {
          method: "put",
          url: `/api/itineraries/${itineraryId}`,
          credentials: "include",
          body: data,
        };
      },
    }),


  }),
});

export const {
  useGetItinerariesQuery,
  useAddItineraryMutation,
  useDeleteItineraryMutation,
  useUpdateItineraryMutation
} = itineraryApi;
