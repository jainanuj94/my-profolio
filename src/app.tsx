import './app.css'
import {Container} from "@mui/material";
import {WorkTimeline} from "./components/WorkTimeline.tsx";
import {Projects} from "./components/Projects.tsx";
import {Header} from "./components/Header.tsx";
import {useEffect} from "preact/hooks";

export const App = () => {
    useEffect(() => {
        document.title = "Anuj Jain";
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <main className="p-4 bg-custom-bg text-white">
                <Container>
                    <WorkTimeline/>
                    <Projects/>
                </Container>
            </main>
        </div>
    );
};
