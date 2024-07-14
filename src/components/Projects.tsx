import {useEffect, useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {fetchRepositories, Repositories} from "../api/github.ts";
import {Button, CardActions, CardHeader, Chip} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Projects = () => {

    const [projects, setProjects] = useState<Repositories[]>([]);

    useEffect(() => {
        (async () => {
            const projects = await fetchRepositories('jainanuj94');
            const sortedRepos = projects.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
            setProjects(sortedRepos);
        })();
    }, []);

    const chunkArray = (array: Repositories[], chunkSize: number): Repositories[][] => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const projectChunks = chunkArray(projects, 2);

    return (
        <section className="flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Projects
            </Typography>
            {projectChunks.map((chunk, index) => (
                <div key={index} className="flex justify-around flex-wrap">
                    {chunk.map((project) => (
                        <Card raised={true} variant="outlined" key={project.name} className={"p-4 m-4 w-96"}>
                            <CardHeader title={project.name}/>
                            <CardContent>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    {project.description}
                                </Typography>
                                <Typography>{project.language}</Typography>
                                {project.topics.map((topic: string) => (
                                    <Chip color="primary" label={topic} variant="outlined" className={"m-1"}/>
                                ))}
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
                </div>
            ))}
        </section>
    )
        ;
};