import React, { useMemo } from "react"
import { ThemeProvider, Typography, Box, Container } from "@mui/material"
import { theme } from "./theme/createTheme"
import AuthPage from "./pages/AuthPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthGuard from "./components/utilities/AuthGuard"
import Tasks from "./pages/Tasks"
import CssBaseline from "@material-ui/core/CssBaseline";

type UserContextType = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = React.createContext<UserContextType>(null)

const Main: React.FC<{}> = ({}) => {

    const [user, setUser] = React.useState<User | null>({
        id: 0,
        username: "",
        password: "",
        isAuthenticated: false
    })

    useMemo(() => console.log(user), [user])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box id="comment" sx={{margin: "100px 0 50px"}}>
                    <UserContext.Provider value={{user, setUser}}>
                        <BrowserRouter>
                            <AuthGuard>
                                <Routes>
                                    <Route path="/" element={<Tasks />}/>
                                    <Route path="/login" element={<AuthPage isRegistration={false} />}/>
                                    <Route path="/register" element={<AuthPage isRegistration={true} />}/>
                                </Routes>
                            </AuthGuard>
                        </BrowserRouter>
                    </UserContext.Provider>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Main