import {Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Header = () => {
    return (<header className="bg-custom-bg text-white p-4">
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
    </header>)
}