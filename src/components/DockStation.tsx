import {HomeIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Dock, DockIcon} from "@/components/magicui/dock";
import {Divider, IconButton, Tooltip} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

const DATA = {
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"}
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/jainanuj94",
                icon: GitHubIcon,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anuj-jain-5300448a/",
                icon: LinkedInIcon,
            },
            email: {
                name: "Send Email",
                url: "mailto:anujj.94@gmail.com",
                icon: EmailIcon,
            },
        },
    },
    personal: [
        {
            name: "Resume",
            url: "/resume.pdf",
            icon: ArticleIcon
        }
    ]
};

export function DockStation() {
    return (
        <Dock direction="middle">
            {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                    <Tooltip title={item.label}>
                        <IconButton
                            href={item.href}
                            className={cn(
                                "size-12 rounded-full",
                            )}
                        >
                            <item.icon className="size-4"/>
                        </IconButton>
                    </Tooltip>
                </DockIcon>
            ))}
            <Divider orientation="vertical" variant="fullWidth" className="h-full"/>
            {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                    <Tooltip title={social.name}>
                        <IconButton
                            href={social.url}
                            target="_blank"
                            className={cn(
                                "size-12 rounded-full",
                            )}
                        >
                            <social.icon className="size-4"/>
                        </IconButton>
                    </Tooltip>
                </DockIcon>
            ))}
            <Divider orientation="vertical" variant="fullWidth" className="h-full"/>
            {Object.entries(DATA.personal).map(([name, social]) => (
                <DockIcon key={name}>
                    <Tooltip title={social.name}>
                        <IconButton
                            href={social.url}
                            className={cn(
                                "size-12 rounded-full",
                            )}
                            target="_blank"
                        >
                            <social.icon className="size-4"/>
                        </IconButton>
                    </Tooltip>
                </DockIcon>
            ))}
        </Dock>
    );
}
