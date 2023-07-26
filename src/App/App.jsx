import "./app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FavoritesContext } from "../contexts";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import queryClient from "./queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FavoritesContext.Provider>
          <RouterProvider router={router} />
        </FavoritesContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
