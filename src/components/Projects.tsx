import {useEffect, useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import {fetchRepositories, Repositories} from "../api/github.ts";
import ProjectCard from "./ProjectCard.tsx";
import {Button} from "@mui/material";

export const Projects = () => {

    const [projects, setProjects] = useState<Repositories[]>([]);
    const [lastChunk, setLastChunk] = useState(2);

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

    const projectChunks = chunkArray(projects, 3);

    const showMore = () => {
        setLastChunk(lastChunk + 2)
    }

    return (
        <section className="flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Projects
            </Typography>
            {projectChunks.slice(0, lastChunk).map((chunk, index) => (
                <div key={index} className="flex justify-around flex-wrap m-4">
                    {chunk.map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            tags={project.topics}
                            link={project.html_url}/>
                    ))}
                </div>
            ))}
            <Button variant="contained" className={"align-middle"} onClick={showMore}>Show More</Button>
        </section>
    )
        ;
};