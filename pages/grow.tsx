import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';

const icon = (
    <Grid container spacing={1} sx={{ m: 1 }}>
    <Grid item xs={12} sm={12}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', p: 4 }}>
        primary.main
        </Box>
    </Grid>
    </Grid>
);

export default function SimpleGrow() {
const [checked, setChecked] = React.useState(false);

const handleChange = () => {
    setChecked((prev) => !prev);
};

return (
    <Box sx={{ height: 300 }}>
    <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
    />
    <Box sx={{ display: 'flex'}}>
        <Grow in={checked}>{icon}</Grow>
        <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 500 } : {})}
        >
        {icon}
        </Grow>
        <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
        >
        {icon}
        </Grow>
        <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1500 } : {})}
        >
        {icon}
        </Grow>
        <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 2000 } : {})}
        >
        {icon}
        </Grow>
    </Box>
    </Box>
);
}