import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoriteContext from "./context";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Favorite from "./pages/Favorite";
const colors = {
  white: "#fff",
  black: { 0: "#000", 1: "#222" },
  red: { 0: "#f00", 1: "#C53030", 2: "#ff2c2c", 3: "#b71c1c" },
};

const font = {
  body: "Poppins",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,

    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <ErrorPage param={`Página não Encontrada`} /> },
      { path: "favorite", element: <Favorite /> },
      { path: "search", element: <Search /> },
      { path: "watch/:id", element: <Watch /> },
    ],
  },
]);

const theme = extendTheme({ colors, font });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      {/* <App />  */}
      <FavoriteContext>
        <RouterProvider router={router} />
      </FavoriteContext>
    </ChakraProvider>
  </StrictMode>
);
