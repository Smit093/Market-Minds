import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Book from './Book';

const theme = createTheme();

export default function Books() {
    return (
        <ThemeProvider theme={theme}>
            <Book />
        </ThemeProvider>
    );
}

