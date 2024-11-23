import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";
import routes from "@/router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={routes.find((route) => route.name === "home")?.component()}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
