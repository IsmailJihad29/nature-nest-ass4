import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nature-nest-server.vercel.app",
    // baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json"); // Add this line
      return headers;
    },
  }),
  tagTypes: ["nursery"],
  endpoints: () => ({}),

});

