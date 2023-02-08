import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export function Llenado() {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div>
            <Box sx={{ maxWidth: '80%', display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Tanque</Typography>
                        <TextField
                            fullWidth
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">SE</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Lote</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Día de Preparación</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Horas de Reposo</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Alcoholímetro</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Temperatura</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">°C</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Grado Alcohólico</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>pH</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Línea / T. de Licor</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Destino</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Balanza No de Serie</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Peso de Tapas</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Peso de Envases Vacíos</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Peso de Envases Llenos</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Peso Neto Actual</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Peso Ideal</Typography>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Dif. Peso Neto</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Límites</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={4}>
                        <Typography>Dif. Porcentual</Typography>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                </Grid>

            </Box>

        </div>
    )
}