import './app.css'
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {Header} from "./components/Header.tsx";
import {useEffect, useState} from "preact/hooks";
import {createTheme} from "@mui/material/styles";
import {LandingPage} from "@/pages";
import {Route, Switch} from "wouter";
import BlogPage from "@/pages/BlogPage.tsx";

export const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.title = "Anuj Jain";
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ?
                    '#000000'
                    : '#ffffff'
            },
            text: {
                primary: darkMode ? '#ffffff' : '#000000'
            }
        },
    });

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="min-h-screen">
                <Header onThemeToggle={handleThemeToggle} darkMode={darkMode}/>
                <main className="p-4 mt-24">
                    <Container>
                        <Switch>
                            <Route path="/">
                                <LandingPage/>
                            </Route>
                            <Route path="/blog/:name">
                                <BlogPage/>
                            </Route>
                        </Switch>
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
};
