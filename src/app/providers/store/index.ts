import { configureStore } from "@reduxjs/toolkit";
import { groupsApi } from "@/entities/Group/api";
import { filterSlice } from "@/features/Filter";

export const store = configureStore({
    reducer: {
        [groupsApi.reducerPath]: groupsApi.reducer,
        [filterSlice.name]: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(groupsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
