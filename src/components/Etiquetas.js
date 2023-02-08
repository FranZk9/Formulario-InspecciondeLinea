import Typography from '@mui/material/Typography'
import { FormControlLabel, TextField } from '@mui/material'
import Tab from '@mui/material/Tab'
import React, { useState } from 'react'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Switch from '@mui/material/Switch'
import dayjs from 'dayjs';
import EtiquetasComp from './EtiquetasComp'

export function Etiquetas() {
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const [time, setTime] = React.useState(dayjs());

    const handleTime = (newTime) => {
        setValue(newTime)
    }

    const data = [
        {field: 'Frente', isOn: 'on', value: 'Cola Fría'},
        {field: 'Recetario', isOn: 'on', value: 'Cola Fría'},
        {field: 'Cuello', isOn: 'off', value: ''},
        {field: 'Hombro', isOn: 'off', value: ''},
        {field: 'Ovalo', isOn: 'on', value: 'Autoadhesivo'},
        {field: 'Strip', isOn: 'off', value: ''}
      ]

    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);
    const [isChecked3, setIsChecked3] = useState(true);
    const [isChecked4, setIsChecked4] = useState(true);
    const [isChecked5, setIsChecked5] = useState(true);
    const [isChecked6, setIsChecked6] = useState(true);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <Box sx={{ maxWidth: '80%', display: 'flex', justifyContent: 'center' }}>
                    <TabContext value={value}>
                        <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="" value="1" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{ mt: 2 }}>
                            <Typography variant='h6' sx={{ m: 1 }} align='center'>Etiquetas</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={12} md={12} xl={12}>
                                    <Typography align='center' sx={{ m: 1 }}>HORA</Typography>
                                    <div align='center'>
                                        <TimePicker
                                            readOnly
                                            value={time}
                                            onChange={handleTime}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4} variant='outlined' sx={{ mt: 1 }}>
                                <Grid item xl={6} xs={12}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} />}
                                            label='Frente'
                                        />
                                        {isChecked1 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                                <Grid item xl={6} xs={12}>                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />}
                                            label='Recetario'
                                        />
                                        {isChecked2 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                                <Grid item xl={6} xs={12}>                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} />}
                                            label='Cuello'
                                        />
                                        {isChecked3 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                                <Grid item xl={6} xs={12}>                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked checked={isChecked4} onChange={() => setIsChecked4(!isChecked4)} />}
                                            label='Hombro'
                                        />
                                        {isChecked4 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                                <Grid item xl={6} xs={12}>                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked checked={isChecked5} onChange={() => setIsChecked5(!isChecked5)} />}
                                            label='Ovalo'
                                        />
                                        {isChecked5 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                                <Grid item xl={6} xs={12}>                                    
                                    <Box sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <FormControlLabel
                                        control={<Switch inline defaultChecked checked={isChecked6} onChange={() => setIsChecked6(!isChecked6)} />}
                                        label='Strip'
                                    />
                                        {isChecked6 && <EtiquetasComp />}
                                    </Box>
                                </Grid>
                            </Grid>

                            <Typography variant='h6' sx={{ mt: 3, mb: 1 }} align='center'>Pegamento</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Tipo de Goma</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Fecha de Producción</Typography>
                                    <DesktopDatePicker
                                        readOnly
                                        inputFormat="DD/MM/YYYY"
                                        value={time}
                                        onChange={handleTime}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Fecha de Expiración</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                            </Grid>
                            <Typography variant='h6' sx={{ mt: 3, mb: 1 }} align='center'>Caja de Cartón Corrugado</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Proveedor</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Fecha de producción</Typography>
                                    <DesktopDatePicker
                                        readOnly
                                        inputFormat="DD/MM/YYYY"
                                        value={time}
                                        onChange={handleTime}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Sellado</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                            </Grid>
                            <Typography variant='h6' sx={{ mt: 3, mb: 1 }} align='center'>Tapas</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Proveedor</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Modelo</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>NR/OP</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Fecha de producción</Typography>
                                    <DesktopDatePicker
                                        readOnly
                                        inputFormat="DD/MM/YYYY"
                                        value={time}
                                        onChange={handleTime}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant='h6' sx={{ mt: 3, mb: 1 }} align='center'>Tipo de Envase</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Proveedor</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Fecha de producción</Typography>
                                    <DesktopDatePicker
                                        readOnly
                                        inputFormat="DD/MM/YYYY"
                                        value={time}
                                        onChange={handleTime}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>VR/PET/Otros</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} xl={4}>
                                    <Typography>Tipo de Lavado</Typography>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                                </Grid>
                            </Grid>

                        </TabPanel>
                    </TabContext>
                </Box>

            </div>
        </LocalizationProvider >
    )
}