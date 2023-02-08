import React from 'react'
import {
    TextField, Typography, Grid, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel  } from '@mui/material';

export default function AnalisisFQ() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} xl={3} sm={6} md={4}>
                <Typography>Grado Alcohólico Aparente</Typography>
                <TextField fullWidth value={'38,5'} />
            </Grid>
            <Grid item xs={12} xl={3} sm={6} md={4}>
                <FormControl>
                    <FormLabel required id="filtros">Dentro del rango</FormLabel>
                    <RadioGroup
                        row
                        value={'ok'}
                    >
                        <FormControlLabel value="ok" control={<Radio />} label="OK" />
                        <FormControlLabel value="no ok" control={<Radio />} label="No OK" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} xl={3} sm={6} md={4}>
                <Typography>pH</Typography>
                <TextField fullWidth value={'4,13'}/>
            </Grid>
            <Grid item xs={12} xl={3} sm={6} md={4}>
                <FormControl>
                    <FormLabel required id="filtros">Prueba Organoléptica</FormLabel>
                    <RadioGroup
                        row
                        value={'ok'}
                    >
                        <FormControlLabel value="ok" control={<Radio />} label="OK" />
                        <FormControlLabel value="no ok" control={<Radio />} label="No OK" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}
