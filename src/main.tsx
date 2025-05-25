// src/main.tsx (if using Vite)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline, } from "@mui/material";
import theme from "./theme/theme";
import CustomSnackbarProvider from "./CustomSnackbarProvider";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomSnackbarProvider>
        <App />
      </CustomSnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
