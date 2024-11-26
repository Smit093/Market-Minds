import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({value}) {

    return (
        <Box>
            <Typography component="legend">Ratings</Typography>
            <Rating name="read-only" value={value} readOnly />
        </Box>
    );
}
