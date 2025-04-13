import { use } from "react";
import { api } from "./index";

const allProductsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["PRODUCTS"],
    }),
    getProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["PRODUCTS"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body: {
          ...body,
        },
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
    updateProduct: build.mutation({
      query: ({ body, id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: {
          ...body,
        },
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation
} = allProductsApi;
