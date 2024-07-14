import {useEffect, useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {fetchRepositories, Repositories} from "../api/github.ts";
import {Button, CardActions, CardHeader} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Carousel} from "react-responsive-carousel";

export const Projects = () => {

    const [projects, setProjects] = useState<Repositories[]>([]);

    useEffect(() => {
        (async () => {
            const projects = await fetchRepositories('jainanuj94');
            const sortedRepos = projects.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
            setProjects(sortedRepos);
        })();
    }, []);

    return (
        <section className="flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Projects
            </Typography>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {projects.map((project) => (
                    <Card variant="outlined" key={project.name} className={"p-4"}>
                        <CardHeader title={project.name} avatar={""}/>
                        <CardContent>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {project.description}
                            </Typography>
                            <Typography>{project.language}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<GitHubIcon/>}
                                href={project.html_url}
                                target="_blank"
                            />
                        </CardActions>
                    </Card>
                ))}
            </Carousel>
        </section>
    );
};