// lib/api.js
"use client";

import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL, // .env faylini tekshirish
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return headers;
  },
});

const baseQuery = async (args, api, extraOptions) => {
  const response = await rawBaseQuery(args, api, extraOptions);

  if (response.error) {
    const { status } = response.error;
    if (status === 401 || status === 403) {
      console.log("sign out");
    }
  }

  return response;
};

const fetchBaseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQueryWithRetry,
  tagTypes: ["PRODUCTS"],
  endpoints: (builder) => ({
    // Endpoints qo‘shing
  }),
});

export const { useGetPostsQuery } = api;
