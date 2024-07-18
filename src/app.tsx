import './app.css'
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {Header} from "./components/Header.tsx";
import {useEffect, useState} from "preact/hooks";
import {createTheme} from "@mui/material/styles";
import {LandingPage} from "@/pages";
import {Route, Switch} from "wouter";
import BlogPage from "@/pages/BlogPage.tsx";
import Footer from "@/components/Footer.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";

export const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.title = "Anuj Jain";
        const darkModeFromSession = sessionStorage.getItem("_darkMode") === null
            ? true : sessionStorage.getItem("_darkMode") === 'true';
        setDarkMode(darkModeFromSession);

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
        setDarkMode((prevMode) => {
            sessionStorage.setItem("_darkMode", String(!prevMode));
            return !prevMode
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="min-h-screen">
                <Header onThemeToggle={handleThemeToggle} darkMode={darkMode}/>
                <main className="p-4 mt-24 mb-12">
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
                <ScrollToTop/>
                <Footer/>
            </div>
        </ThemeProvider>
    );
};
