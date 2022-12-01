import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
  }),
  tagTypes: ["Events"], //maybe not in the right spot?
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
        if (data.itinerary) {
          const itinerary_id = data.itinerary.slice(0, 24);
          const location = data.itinerary.slice(25);
          data["itinerary_id"] = itinerary_id;
          data["location"] = location;
          data["date"] = data.date + "T00:00:00.000Z";
          delete data["itinerary"];
          data["category"] = "custom";
          data["rating"] = "N/A";
          console.log(data);
          return {
            method: "post",
            url: `/api/events`,
            credentials: "include",
            body: data,
          };
        } else {
          const itinerary_id = data.itineraryId;
          data["itinerary_id"] = itinerary_id;
          delete data["itineraryId"];
          console.log(data);
          return {
            method: "post",
            url: `/api/events`,
            credentials: "include",
            body: data,
          };
        }
      },
      invalidatesTags: ["Events"], //maybe in the incorrect spot?
    }),
    deleteEvent: builder.mutation({
      query: (eventId) => {
        return {
          method: "delete",
          url: `/api/events/${eventId}`,
        };
      },
    }),
    updateEvent: builder.mutation({
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
        data["date"] = data.date + "T00:00:00.000Z";
        delete data["itinerary"];
        data["category"] = "custom";
        data["rating"] = "N/A";
        const eventId = data["id"];
        console.log(data);
        return {
          method: "put",
          url: `/api/events/${eventId}`,
          credentials: "include",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} = eventApi;
