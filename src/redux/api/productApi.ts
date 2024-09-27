import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        searchQuery = "",
        category = "",
        sortOrder = "",
      }) => {
        return {
          url: `/api/v1/products`,
          method: "GET",
          params: {
            search: searchQuery || undefined,
            category: category || undefined, // Ensures category is sent only when selected
            sortOrder: sortOrder || undefined, // Ensures sortOrder is sent only when selected
          },
        };
      },
      providesTags: ["nursery"],
    }),
    // getProducts: builder.query({
    //   query: ({ searchQuery = "", category = "", sortOrder = "", priceRange = "0-1000" }) => ({
    //     url: `/api/v1/products?search=${searchQuery}&category=${category}&sortOrder=${sortOrder}&priceRange=${priceRange}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["nursery"],
    // }),

    //* get single product
    getSingleProducts: builder.query({
      query: (_id: string) => {
        console.log("single product data =>", _id);
        return { url: `/api/v1/products/${_id}`, method: "GET" };
      },
    }),

    //* add product
    addProducts: builder.mutation({
      query: (data) => {
        return { url: `/api/v1/products`, method: "POST", body: data };
      },
      invalidatesTags: ["nursery"],
    }),

    //* edit product
    editProducts: builder.mutation({
      query: ({ id, updatedProduct }) => {
        return {
          url: `/api/v1/products/${id}`,
          method: "PATCH",
          body: updatedProduct,
        };
      },
      invalidatesTags: ["nursery"],
    }),

    //* delete product
    deleteTodos: builder.mutation({
      query: (_id) => {
        console.log("delete data =>", _id);
        return {
          url: `/api/v1/products/${_id}`,
          method: "DELETE",
          body: { _id },
        };
      },
      invalidatesTags: ["nursery"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useAddProductsMutation,
  useDeleteTodosMutation,
  useEditProductsMutation,
} = productApi;
