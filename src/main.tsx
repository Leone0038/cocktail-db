import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AnyAction } from "@reduxjs/toolkit";
import {
  fetchAlcoholic,
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
} from "./features/filter/filterSlice";

store.dispatch(fetchAlcoholic() as unknown as AnyAction);
store.dispatch(fetchCategories() as unknown as AnyAction);
store.dispatch(fetchGlasses() as unknown as AnyAction);
store.dispatch(fetchIngredients() as unknown as AnyAction);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
