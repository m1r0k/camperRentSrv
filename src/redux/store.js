import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./campers/slice";
import favoritesReducer from "./favorites/operations";
import filterReducer from "./filter/slice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});
