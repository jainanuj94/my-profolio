import './app.css'
import Typography from '@mui/material/Typography';
import {Button, Container} from "@mui/material";
import {WorkTimeline} from "./WorkTimeline.tsx";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-custom-bg text-white p-4">
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Anuj Jain
                    </Typography>
                    <Typography variant="h6">
                        Lead Software Engineer
                    </Typography>
                    <Typography variant="body1">
                        Passionate about building high-quality software and improving development processes.
                    </Typography>
                    <div className="flex space-x-2">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LinkedInIcon/>}
                            href="https://www.linkedin.com/in/anuj-jain-5300448a/"
                            target="_blank"
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<GitHubIcon/>}
                            href="https://github.com/jainanuj94"
                            target="_blank"
                        />
                    </div>
                </Container>
            </header>

            <main className="p-4">
                <Container>
                    <WorkTimeline/>
                    {/*<Projects/>*/}
                </Container>
            </main>
        </div>
    );
};
