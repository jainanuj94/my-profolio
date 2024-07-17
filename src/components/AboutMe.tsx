import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent} from "@mui/material";
import {
    faAws,
    faCss3,
    faJava,
    faJs,
    faMarkdown,
    faNodeJs,
    faNpm,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AboutMe = () => {
    return (
        <section id="about">
            <div className={"my-8"}>
                <Card sx={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}
                      className={"w-full h-full"}>
                    <CardContent>
                        <Typography variant="h2" color={"#A07CFE"}>Anuj Jain</Typography>
                        <Typography variant="h6" color={"#FE8FB5"}>That's me</Typography>
                        <Typography variant="overline" sx={{color: 'var(--foreground)'}}>
                            I'm a dedicated Software Engineer currently serving as a Lead Consultant/Lead
                            Engineer. In this role, I am responsible for bringing projects to successful completion,
                            architecting robust designs, and collaborating with stakeholders to ensure timely delivery.
                            <br/><br/>
                            My expertise primarily lies in working with distributed systems and web applications. Over
                            the years, I have gained significant experience with technologies such as Kafka, Redis, and
                            various NoSQL solutions.
                            <br/><br/>
                            Beyond my professional responsibilities, I am a passionate technologist who loves to explore
                            and learn about new advancements in the tech world. Recently, I have been delving into the
                            fascinating realms of Artificial Intelligence/Machine Learning and Blockchain, aiming to
                            expand my skillset and stay ahead in the ever-evolving technology landscape.
                            <br/><br/>
                            Feel free to explore my portfolio to learn more about my work and the projects I've been a
                            part of.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div className="flex space-x-4">
                            <FontAwesomeIcon icon={faJava} size="2x" title="Java"/>
                            <FontAwesomeIcon icon={faJs} size="2x" title="Javascript"/>
                            <FontAwesomeIcon icon={faReact} size="2x" title="React"/>
                            <FontAwesomeIcon icon={faNodeJs} size="2x" title="Node.js"/>
                            <FontAwesomeIcon icon={faCss3} size="2x" title="CSS"/>
                            <FontAwesomeIcon icon={faNpm} size="2x" title="NPM"/>
                            <FontAwesomeIcon icon={faPython} size="2x" title="Python"/>
                            <FontAwesomeIcon icon={faAws} size="2x" title="AWS"/>
                            <FontAwesomeIcon icon={faMarkdown} size="2x" title="Markdown"/>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}

export default AboutMe;