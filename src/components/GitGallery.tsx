import {useEffect, useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import {fetchRepositories, Repositories} from "../api/github.ts";
import ProjectCard from "./ProjectCard.tsx";
import {Button} from "@mui/material";
import {Fragment} from "preact";

export const GitGallery = () => {

    const [projects, setProjects] = useState<Repositories[]>([]);
    const [lastChunk, setLastChunk] = useState(2);
    const [showLess, setShowLess] = useState(false);

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
        if (showLess) {
            setLastChunk(2)
            setShowLess(false)
        } else {
            const newLastChunk = lastChunk + 2
            setLastChunk(newLastChunk)
            if (newLastChunk >= projectChunks.length) {
                setShowLess(true)
            }
        }
    }

    return (
        <section id="repos" className="flex-4 my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Git Gallery
            </Typography>
            <div className={"flex-row justify-center"}>
                {projectChunks.slice(0, lastChunk).map((chunk, index) => (
                    <div key={index} className="flex justify-around flex-wrap m-2">
                        {chunk.map((project) => (
                            <div key={project.name} className="flex justify-around flex-wrap m-2">
                                <ProjectCard
                                    key={project.name}
                                    title={project.name}
                                    description={project.description}
                                    tags={project.topics}
                                    link={project.html_url}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                {projects.length > 0 ?
                    <div className="flex justify-around flex-wrap m-4">
                        {!showLess ?
                            <Button variant="contained" color='primary' onClick={showMore}> Show More </Button> :
                            <Button variant="contained" color='secondary' onClick={showMore}> Show Less </Button>
                        }
                    </div>
                    :
                    <Fragment/>
                }
            </div>
        </section>
    )
        ;
};