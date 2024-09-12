import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
const colors = {
  white: "#fff",
  black: { 0: "#000", 1: "#222" },
  red: { 0: "#f00", 1: "#C53030", 2: "#ff2c2c", 3: "#b71c1c" },
};

const font = {
  body: "Poppins",
};

const theme = extendTheme({ colors, font });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
