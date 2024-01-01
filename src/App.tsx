import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {Box, Container, createTheme, CssBaseline, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
// import theme from "./utils/theme";
import './styles/App.css'
import PokemonDetail from "./components/PokemonDetail";
import Link from "@mui/material/Link";
import {useMemo} from "react";


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

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() =>
        createTheme({
            typography: {
                fontFamily: 'Pokemon Solid',
                h1: {
                    lineHeight: 1.1,
                    marginBottom: '30px',
                    letterSpacing: '3px',
                    textAlign: 'center'
                }
            },
            components: {
                MuiButtonBase: {
                    defaultProps: {
                        sx: {
                            letterSpacing: '3px',
                            textTransform: 'lowercase'
                        }
                    }
                }
            },
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light'
            }
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
