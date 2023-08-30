import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])
const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
      </ThemeProvider>
  );
}

export default App;
