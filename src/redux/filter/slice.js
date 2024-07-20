import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filters: {},
  },
  reducers: {
    changeFilter(state, action) {
      const { key, value } = action.payload;
      if (key === "shower" && value) {
        state.filters.toilet = true;
        state.filters.shower = true;
        state.filters.bath = true;
      } else if (key === "shower" && !value) {
        delete state.filters.toilet;
        delete state.filters.shower;
        delete state.filters.bath;
      } else {
        state.filters[key] = value;
      }
    },
    removeFilter(state, action) {
      const { key } = action.payload;
      delete state.filters[key];
    },
    clearFilters(state) {
      state.filters = {};
    },
  },
});

export const { changeFilter, removeFilter, clearFilters } = slice.actions;

export default slice.reducer;
