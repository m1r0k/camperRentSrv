import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const slice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
