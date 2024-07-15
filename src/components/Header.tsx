import {IconButton} from "@mui/material";
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
        <header className="bg-custom-bg text-white">
            <div className="flex items-center justify-between p-4 bg-gray-900">
                {/* Left Div (Small 2-character logo) */}
                <div
                    className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                    <Typography variant="h6">
                        <img src="/aj.svg" alt="Logo" className="h-8"/>
                    </Typography>
                </div>

                {/* Middle Div (Flexible, grows to fill space) */}
                <div className="flex-grow mx-4 align-text-top">
                    <DockStation/>
                </div>

                {/* Right Div (Small 2-character logo) */}
                <div
                    className="flex-shrink-0 text-center w-12 h-12 flex items-center justify-center rounded-full">
                    <IconButton sx={{ml: 1}} onClick={onThemeToggle} color="inherit">
                        {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                </div>
            </div>


            {/*<AppBar position="static" sx={{backgroundColor: '#10172A'}}>*/}
            {/*    <Toolbar>*/}
            {/*        <Typography variant="h6">*/}
            {/*            <img src="public/aj.svg" alt="Logo" className="h-8"/>*/}
            {/*        </Typography>*/}

            {/*        <DockStation/>*/}

            {/*        <IconButton sx={{ml: 1}} onClick={onThemeToggle} color="inherit">*/}
            {/*            {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}*/}
            {/*        </IconButton>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
        </header>
    )
}