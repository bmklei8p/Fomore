import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearForm } from './accountSlice';

export const itineraryApi = createApi({
  reducerPath: 'itineraries',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FOMORE_API_HOST,
//     prepareHeaders: (headers, { getState }) => {
//       const selector = apiSlice.endpoints.getToken.select();
//       const { data: tokenData } = selector(getState());
//       if (tokenData && tokenData.access_token) {
//         headers.set('Authorization', `Bearer ${tokenData.access_token}`);
//       }
//       return headers;
//     }
  }),
//   tagTypes: ['Itinerary'],
  endpoints: builder => ({
    getItineraries: builder.query({
      query: () => `/api/itineraries`,
    })
    //   providesTags: data => {
    //     const tags = [{type: 'Itineraries', id: 'LIST'}];
    //     if (!data || !data.itineraries) return tags;

    //     const { itineraries } = data;
    //     if (itineraries) {
    //       tags.concat(...itineraries.map(({ id }) => ({type: 'Itineraries', id})));
    //     }
    //     return tags;
    }),
  });

export const {
  useGetItinerariesQuery,
} = itineraryApi;
