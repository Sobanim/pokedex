import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {Box, Container, createTheme, CssBaseline, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
// import theme from "./utils/theme";
import './styles/App.css'
import PokemonDetail from "./components/PokemonDetail";
import Link from "@mui/material/Link";
import {FC, useMemo} from "react";
import themeProps from "./utils/theme";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },{
        path: 'pokemon/:pokemonName',
        element: <PokemonDetail />,
    }
])
const App = ():JSX.Element => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() =>
        createTheme({
            ...themeProps,
            // TODO - Fix text color
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light'
            },
        }), [prefersDarkMode])

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
