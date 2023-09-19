import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {Box, Container, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import theme from "./utils/theme";
import './styles/App.css'
import PokemonDetail from "./components/PokemonDetail";
import Link from "@mui/material/Link";


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
          <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
              <CssBaseline />
              <RouterProvider router={router} />
              <Box
                  sx={{
                      backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                              ? theme.palette.grey[200]
                              : theme.palette.grey[800],
                      p: 6, mt: 'auto'
                  }}
                  component="footer"
              >
                  <Container maxWidth="sm" sx={{marginTop: 'auto'}}>
                      <Typography variant="body2" color="text.secondary" align="center">
                          {"Copyright © "}
                          <Link color="inherit" href="/">
                              Pokedex
                          </Link>{" "}
                          {new Date().getFullYear()}
                          {"."}
                      </Typography>
                  </Container>
              </Box>
          </Box>
      </ThemeProvider>
  );
}

export default App;
