import React from 'react'
import {
    TextField, Typography, Grid, FormControlLabel,
    FormGroup, Checkbox
} from '@mui/material';

export default function Observaciones() {
    return (
        <Grid container>
            <Grid item xl={12} xs={12}>
                <Typography>Observaciones</Typography>
                <TextField fullWidth multiline rows={3} />
            </Grid>
            <Grid item xl={12} xs={12}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Sin observaciones" />
                </FormGroup>
            </Grid>
        </Grid>
    )
}


