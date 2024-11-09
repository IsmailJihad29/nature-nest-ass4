import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from "./features/productSlice";
import paginationReducer from "./features/paginationSlice";
import cartReducer from "./features/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";


const persistUserConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    products: productReducer,
    pagination: paginationReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
