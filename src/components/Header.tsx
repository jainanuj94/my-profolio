import {AppBar, Avatar, Divider, IconButton, Link} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
    onThemeToggle: () => void;
    darkMode: boolean;
}

export const Header = ({onThemeToggle, darkMode}: HeaderProps) => {

    return (
        <header className="text-foreground">
            <AppBar sx={{backgroundColor: 'var(--background)'}} position="fixed">
                <div className="flex items-center justify-between p-4">
                    <div
                        className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                        <a href={"#"}>
                            <Avatar sx={{backgroundColor: 'var(--color-3)'}} aria-label="recipe">
                                AJ
                            </Avatar>
                        </a>
                    </div>
                    <div className="flex mx-4 justify-center items-center mb-2">
                        <Link href="#about" underline="hover" color="#FE8FB5" className={"p-2 font-semibold"}>About
                            Me</Link>
                        <Divider orientation="vertical" variant="fullWidth" className="h-full"/>
                        <Link href="#timeline" underline="hover" color="#FE8FB5" className={"p-2 font-semibold"}>Work
                            Experience</Link>
                        <Divider orientation="vertical" variant="fullWidth" className="h-full"/>
                        <Link href="#blogs" underline="hover" color="#FE8FB5"
                              className={"p-2 font-semibold"}>Blogs</Link>
                    </div>
                    <div
                        className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                        <IconButton sx={{ml: 1}} onClick={onThemeToggle}>
                            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </div>
                </div>
            </AppBar>
        </header>

    )
}