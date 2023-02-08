import React from 'react'
import { TextField, Typography, Grid } from '@mui/material';

export default function Firmas() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} xl={4}>
        <Typography>Inspector (a)</Typography>
        <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} xl={4}>
        <Typography>Verificado</Typography>
        <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} xl={4}>
        <Typography>Informado</Typography>
        <TextField fullWidth id="outlined-basic" variant="outlined" />
      </Grid>
    </Grid>
  )
}


