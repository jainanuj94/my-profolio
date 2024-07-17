/** @emotion/react */
import {Button, Card, CardActions, CardContent, Chip, Grid, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


interface CardDetails {
    title: string,
    description: string,
    tags: string[],
    link: string
}

const ProjectCard = (cardDetails: CardDetails) => (
        <Card sx={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}} className={"w-80"}>
            <CardContent>
                <div className="flex justify-between items-center mb-4">
                    <Typography variant="h6" className="text-xl font-semibold">{cardDetails.title}</Typography>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon/>}
                        href={cardDetails.link}
                        target="_blank"
                        sx={{color: 'var(--color-2)', borderColor: 'var(--color-3)'}}
                    >
                        View
                    </Button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <Typography variant="body2">{cardDetails.description}</Typography>
                </div>
            </CardContent>
            <CardActions>
                <div className="flex justify-between items-center mb-4">
                    <Grid container spacing={1}>
                        {cardDetails.tags.slice(0, 4).map((tag) => (
                            <Grid item key={tag}>
                                <Chip label={tag} sx={{backgroundColor: 'var(--color-1)', color: 'white'}}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </CardActions>
        </Card>
);

export default ProjectCard;
