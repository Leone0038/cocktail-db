import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.tsx";
import Root from "./pages/Root.tsx";
import { cocktailLoader } from "./loaders/cocktailLoader.ts";
import filterLoader from "./loaders/filterLoader.ts";
import rootLoader from "./loaders/rootLoader.ts";
import AboutPage from "./pages/AboutPage";
import CocktailInfoPage from "./pages/CocktailInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cocktails/:cocktailId",
    element: <CocktailInfoPage />,
    loader: cocktailLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/filter/:filterOption",
    element: <Root />,
    loader: filterLoader,
    errorElement: <ErrorPage />,
  },
]);
