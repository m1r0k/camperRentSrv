import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://668a8c7c2c68eaf3211d1d83.mockapi.io";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/catalog");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
