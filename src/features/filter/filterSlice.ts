import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterState, StoreState } from "../../types";

const categories_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const alcoholic_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list";

const glasses_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";

const ingredients_url =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

const initialState: FilterState = {
  status: "idle",
  categories: [],
  alcoholic: [],
  glasses: [],
  ingredients: [],
};

export const fetchCategories = createAsyncThunk(
  "filter/fetchCategories",
  async () => {
    const resp = await axios.get(categories_url);
    return resp.data.drinks;
  }
);
export const fetchAlcoholic = createAsyncThunk(
  "filter/fetchAlcoholic",
  async () => {
    const resp = await axios.get(alcoholic_url);
    return resp.data.drinks;
  }
);
export const fetchGlasses = createAsyncThunk(
  "filter/fetchGlasses",
  async () => {
    const resp = await axios.get(glasses_url);
    return resp.data.drinks;
  }
);
export const fetchIngredients = createAsyncThunk(
  "filter/fetchIngredients",
  async () => {
    const resp = await axios.get(ingredients_url);
    return resp.data.drinks;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "success";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchAlcoholic.fulfilled, (state, action) => {
        state.alcoholic = action.payload;
      })
      .addCase(fetchAlcoholic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAlcoholic.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
      })
      .addCase(fetchGlasses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGlasses.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default filterSlice.reducer;

export const getStatus = (state: StoreState) => state.filter.status;

export const selectAllCategories = (state: StoreState) =>
  state.filter.categories;
export const selectAllAlcoholic = (state: StoreState) => state.filter.alcoholic;
export const selectAllGlasses = (state: StoreState) => state.filter.glasses;
export const selectAllIngredients = (state: StoreState) =>
  state.filter.ingredients;
