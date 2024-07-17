import IconCloud from "@/components/magicui/icon-cloud";
import Typography from "@mui/material/Typography";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "kotlin",
    "python",
    "react",
    "html5",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    'azuredevops',
    "postgresql",
    'mongodb',
    "firebase",
    "nginx",
    "vercel",
    'elasticsearch',
    "cypress",
    "docker",
    'kubernetes',
    "git",
    "jira",
    "visualstudiocode",
    "sonarqube",
    "figma",
];

const Skills = () => {
    return (
        <div className="my-8 m-2 flex-col flex-wrap h-full items-center justify-center">
            <Typography variant="h5" gutterBottom>
                Technical Toolkit
            </Typography>
            <div
                className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden
                rounded-lg border bg-background text-foreground px-20 pb-20 pt-8">
                <IconCloud iconSlugs={slugs}/>
            </div>
        </div>
    )
}

export default Skills;