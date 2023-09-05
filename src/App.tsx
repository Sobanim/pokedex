import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./utils/theme";
import './styles/App.css'
import PokemonDetail from "./components/PokemonDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },{
        path: 'pokemon/:pokemonName',
        element: <PokemonDetail />,
    }
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
