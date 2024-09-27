import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nature-nest-server.vercel.app",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json"); // Add this line
      return headers;
    },
  }),
  tagTypes: ["nursery"],
  endpoints: () => ({}),
  //   completeTodos: builder.mutation({
  //     query: (options) => {
  //       return { url: `/task/${options.id}`, method: "PUT", body: options.data };
  //     },
  //     invalidatesTags: ["todo"],
  //   }),

});

