import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/task",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => "/",
      providesTags: ["tasks"],
    }),
    getGiventask: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["updatetask"],
    }),
    createTask: builder.mutation({
      query(body) {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
    }),
    updateTask: builder.mutation({
      query({ id, body }) {
        return {
          url: `/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["updatetask", "tasks"],
    }),
    deleteTask: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetGiventaskQuery,
} = taskApi;
