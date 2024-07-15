import {AppBar, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import {DockStation} from "@/components/DockStation.tsx";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
    onThemeToggle: () => void;
    darkMode: boolean;
}

export const Header = ({onThemeToggle, darkMode}: HeaderProps) => {

    return (
        <header className="text-white">
            <AppBar position="fixed">
                <div className="flex items-center justify-between p-4 bg-gray-900">
                    <div
                        className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                        <Typography variant="h6">
                            <img src="/aj.svg" alt="Logo" className="h-8"/>
                        </Typography>
                    </div>

                    <div className="flex-grow mx-4 align-text-top">
                        <DockStation/>
                    </div>

                    <div
                        className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                        <IconButton sx={{ml: 1}} onClick={onThemeToggle} color="inherit">
                            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </div>
                </div>
            </AppBar>
        </header>

    )
}