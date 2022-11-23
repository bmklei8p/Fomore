import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clearForm } from "./accountSlice";

export const apiSlice = createApi({
  reducerPath: "itineraries",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      const selector = apiSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set("Authorization", `Bearer ${tokenData.access_token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Account", "Itineraries", "Events", "Token"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/accounts",
        method: "post",
        body: data,
        credentials: "include",
      }),
      providesTags: ["Account"],
      invalidatesTags: (result) => {
        return (result && ["Token"]) || [];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearForm());
        } catch (err) {}
      },
    }),
    logIn: builder.mutation({
      query: (info) => {
        let formData = null;
        if (info instanceof HTMLElement) {
          formData = new FormData(info);
        } else {
          formData = new FormData();
          formData.append("username", info.email);
          formData.append("password", info.password);
        }
        return {
          url: "/token",
          method: "post",
          body: formData,
          credentials: "include",
        };
      },
      providesTags: ["Account"],
      invalidatesTags: (result) => {
        return (result && ["Token"]) || [];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearForm());
        } catch (err) {}
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/token",
        method: "delete",
        credentials: "include",
      }),
      invalidatesTags: ["Account", "Token"],
    }),
    getToken: builder.query({
      query: () => ({
        url: "/token",
        credentials: "include",
      }),
      providesTags: ["Token"],
    }),
    addItinerary: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = Number.parseInt(value) || value;
          return acc;
        }, {});
        return {
          method: "post",
          url: "/api/itineraries",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Itineraries", id: "LIST" }],
    }),
    getItineraries: builder.query({
      query: () => `/api/itineraries`,
      providesTags: (data) => {
        const tags = [{ type: "Itineraries", id: "LIST" }];
        if (!data || !data.itineraries) return tags;

        const { itineraries } = data;
        if (itineraries) {
          tags.concat(
            ...itineraries.map(({ id }) => ({ type: "Itineraries", id }))
          );
        }
        return tags;
      },
    }),
    addEvent: builder.mutation({
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = Number.parseInt(value) || value;
          return acc;
        }, {});
        return {
          method: "post",
          url: "/api/events",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Events", id: "LIST" }],
    }),
    getEvents: builder.query({
      query: () => `/api/events`,
      providesTags: (data) => {
        const tags = [{ type: "Events", id: "LIST" }];
        if (!data || !data.events) return tags;

        const { events } = data;
        if (events) {
          tags.concat(...events.map(({ id }) => ({ type: "Events", id })));
        }
        return tags;
      },
    }),
  }),
});

export const {
  useGetTokenQuery,
  useLogInMutation,
  useLogOutMutation,
  useSignUpMutation,
  useGetItinerariesQuery,
  useAddItineraryMutation,
  useGetEventsQuery,
  useAddEventMutation,
} = apiSlice;
