import {useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

export const WorkTimeline = () => {
    const [experiences] = useState([
        {
            title: 'Lead Software Consultant',
            company: 'Thoughtworks',
            date: 'July 2020 - Present',
            description: 'Helping clients to reduce their time to market by bringing digital transformation.',
        },
        {
            title: 'Software Developer',
            company: 'SAP Labs',
            date: 'Feb 2017 - July 2020',
            description: 'Worked as a software developer on SuccessFactors module.',
        },
        {
            title: 'SAP ME/MII Consultant',
            company: 'ATOS India',
            date: 'June 2015 - Feb 2017',
            description: 'SAP ME/MII consultant helping bridge the gap between shop floors and ERP solutions.',
        },
    ]);

    return (
        <section className="my-8 align-middle">
            <Typography variant="h5" gutterBottom>
                Work Experience
            </Typography>
            <div className={"flex-shrink-0 text-left items-start justify-around mr-0 left-0"}>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}>
                    {experiences.map((exp) => (
                        <TimelineItem position="right" key={exp.title}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <WorkIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6">{exp.title}</Typography>
                                <Typography variant="body2" color="ghostwhite">
                                    {exp.company} - {exp.date}
                                </Typography>
                                <Typography variant="body1">{exp.description}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};