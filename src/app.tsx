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
                default: darkMode ? '#10172A' : '#ffffff',
            },
        },
    });

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="min-h-screen bg-gray-100">
                <Header onThemeToggle={handleThemeToggle} darkMode={darkMode}/>
                <main className="p-4 bg-custom-bg text-white">
                    <Container>
                        <WorkTimeline/>
                        <Projects/>
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
};
