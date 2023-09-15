import React from "react"
import { ThemeProvider, Typography,  Box } from "@mui/material"
import { theme } from "./theme/createTheme"

const Main: React.FC<{}> = ({}) => {

    return (
        <Box id="comment" sx={{margin: "100px 0 50px"}}>
            <ThemeProvider theme={theme}>
                <Typography variant="h4" sx={{margin: "25px 0", fontWeight: "400", textAlign: "center" }}>
                    To Do management
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default Main