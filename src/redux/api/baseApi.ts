import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://nature-nest-server.vercel.app",
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)?.user?.token;
      if (token && token) {
        headers.set("authorization", `Bearer ${token}`);
      }
  
      return headers;
    },
  }),
  tagTypes: ["nursery"],
  endpoints: () => ({}),

});

