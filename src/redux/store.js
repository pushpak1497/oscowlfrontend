import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { taskApi } from "./api/taskApi";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      taskApi.middleware,
      userApi.middleware,
    ]),
});
