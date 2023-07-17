import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./todosApi/todosApi";

const rootReducer = combineReducers({
    [todosApi.reducerPath]: todosApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})