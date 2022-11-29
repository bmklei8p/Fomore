import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/api/events`,
    }),
    addEvent: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        const itinerary_id = data.itinerary.slice(0, 24);
        const location = data.itinerary.slice(25);
        data["itinerary_id"] = itinerary_id;
        data["location"] = location;
        delete data["itinerary"];
        data["category"] = "custom";
        data["rating"] = "N/A";
        return {
          method: "post",
          url: `/api/events`,
          credentials: "include",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetEventsQuery, useAddEventMutation } = eventApi;
