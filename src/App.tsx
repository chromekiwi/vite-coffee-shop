import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";
import routes, { URL } from "@/router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route
            path={URL.HOME}
            element={routes.find((route) => route.name === "home")?.component()}
          />
          <Route
            path={URL.SIGN_IN}
            element={routes
              .find((route) => route.name === "signin")
              ?.component()}
          />
          <Route
            path={URL.SIGN_UP}
            element={routes
              .find((route) => route.name === "signup")
              ?.component()}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
