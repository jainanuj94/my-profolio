import { Card, CardContent, CardActions, Typography, Button, Grid, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface CardDetails{
    title: string,
    description: string,
    tags: string[],
    link: string
}
const ProjectCard = (cardDetails: CardDetails) => (
    <Card sx={{ backgroundColor: '#1e293b', color: 'white' }} className={"w-80"}>
        <CardContent>
            <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="text-xl font-semibold">{cardDetails.title}</Typography>
                <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={cardDetails.link}
                    target="_blank"
                    sx={{ color: 'teal', borderColor: 'teal' }}
                >
                    View
                </Button>
            </div>
            <Typography variant="body2" className="text-gray-400">{cardDetails.description}</Typography>
        </CardContent>
        <CardActions>
            <Grid container spacing={1}>
                {cardDetails.tags.slice(0, 4).map((tag) => (
                    <Grid item key={tag}>
                        <Chip label={tag} sx={{ backgroundColor: 'teal', color: 'white' }} />
                    </Grid>
                ))}
            </Grid>
        </CardActions>
    </Card>
);

export default ProjectCard;
