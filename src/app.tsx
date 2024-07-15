import './app.css'
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {WorkTimeline} from "./components/WorkTimeline.tsx";
import {Projects} from "./components/Projects.tsx";
import {Header} from "./components/Header.tsx";
import {useEffect, useState} from "preact/hooks";
import {createTheme} from "@mui/material/styles";

export const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.title = "Anuj Jain";
    }, []);


    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ?
                    '#10172A'
                    : '#ffffff'
            },
            text: {
                primary: darkMode ? '#ffffff' : '#10172A'
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
                        <WorkTimeline/>
                        <Projects/>
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
};
