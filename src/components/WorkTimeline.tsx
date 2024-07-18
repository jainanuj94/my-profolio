import {useState} from 'preact/hooks';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import ShineBorder from "@/components/magicui/shine-border.tsx";

export const WorkTimeline = () => {
    const [experiences] = useState([
        {
            title: 'Lead Software Consultant',
            company: 'Thoughtworks',
            date: 'July 2020 - Present',
            description: 'Enabled clients to accelerate their time to market through digital transformation initiatives.',
        },
        {
            title: 'Software Developer',
            company: 'SAP Labs',
            date: 'Feb 2017 - July 2020',
            description: 'Served as a software developer on the SuccessFactors recruiting module, aiding organizations in hiring top talent.',
        },
        {
            title: 'SAP ME/MII Consultant',
            company: 'ATOS India',
            date: 'June 2015 - Feb 2017',
            description: 'Served as an SAP ME/MII consultant, bridging the gap between shop floors and ERP solutions.',
        },
        {
            title: 'QAE Intern',
            company: 'Amazon',
            date: 'Jan 2014 - Jul 2014',
            description: 'Part of the Kindle Authoring Tool team, focused on enhancing product quality through automation testing.',
        },
    ]);

    return (
        <section id="timeline" className="my-8">
            <div className="my-8 m-2 flex-col flex-wrap h-full items-center justify-center">
                <Typography variant="h5" gutterBottom>
                    Work Experience
                </Typography>
                <ShineBorder
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl"
                    color={["#A07CFE"]}
                >
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
                                        <TimelineDot sx={{backgroundColor: 'var(--color-2)'}}>
                                            <WorkIcon/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6">{exp.title}</Typography>
                                        <Typography variant="body2">
                                            {exp.company} - {exp.date}
                                        </Typography>
                                        <Typography variant="body1">{exp.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </ShineBorder>
            </div>
        </section>
    );
};