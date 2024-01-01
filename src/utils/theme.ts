import {createTheme} from "@mui/material";

const theme = createTheme({
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
    // palette: {
    //     mode: "dark"
    // }
})

export default theme;