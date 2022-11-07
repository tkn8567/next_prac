import { Grid, Box } from '@mui/material';


function Colors() {
    return (
    <Grid container spacing={1}>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', p: 4 }}>
        primary.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box
        sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'secondary.main', color: 'secondary.contrastText', p: 4 }}>
        secondary.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'error.main', color: 'error.contrastText', p: 4 }}>
        error.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'warning.main', color: 'warning.contrastText', p: 4 }}>
        warning.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'info.main', color: 'info.contrastText', p: 4 }}>
        info.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'success.main', color: 'success.contrastText', p: 4 }}>
        success.main
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'text.primary', color: 'background.paper', p: 4 }}>
        text.primary
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'text.secondary', color: 'background.paper', p: 4 }}>
        text.secondary
        </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
        <Box sx={{ boxShadow: 3, borderRadius: '16px', bgcolor: 'text.disabled', color: 'background.paper', p: 4 }}>
        text.disabled
        </Box>
    </Grid>

    </Grid>
        
    )
}
export default Colors;