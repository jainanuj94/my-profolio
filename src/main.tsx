import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./mui-theme.ts";

render(<ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
</ThemeProvider>, document.getElementById('app')!)
