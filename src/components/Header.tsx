import {AppBar, Avatar, IconButton} from "@mui/material";
import {DockStation} from "@/components/DockStation.tsx";
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
                        <Avatar sx={{backgroundColor: 'var(--color-3)'}} aria-label="recipe">
                            AJ
                        </Avatar>
                    </div>

                    <div className="flex-grow mx-4 align-text-top">
                        <DockStation/>
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