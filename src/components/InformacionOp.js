import React from 'react'
import { useState } from 'react';
import { Grid, Typography, TextField } from '@mui/material'
//import dayjs from 'dayjs'
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { TimePicker } from "@mui/x-date-pickers/TimePicker"
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function InformacionOp() {

    /* const [time, setTime] = React.useState(dayjs())
    const handleTime = (newTime) => {
        setTime(newTime)
    } */
    // otro metodo
    let fecha_prod = new Date().toLocaleDateString('en-GB')
    let hora_arranque = new Date().toLocaleTimeString('en-GB')

    const data = [{ field: 'Producto', value: 'Ron Abuelo Añejo' },
    { field: 'Fecha de produccion', value: fecha_prod },
    { field: 'Presentación', value: '70 cl' },
    { field: '# de Línea', value: '4' },
    { field: 'Hora de arranque', value: hora_arranque }]

    /* const [input, setInput] = useState(data)

    const handleInput = (event) => {
        setInput((prevInput) => ({
            ...prevInput,
            [event.target.field]: event.target.value
        }))
    } */

    const [open] = useState(true)

    return (
        <div>
            <Grid container spacing={4}>
                {open &&
                    data.map((item) => (
                        <Grid item xs={12} sm={6} xl={4}>
                            <Typography>{item.field}</Typography>
                            <TextField fullWidth InputProps={{ readOnly: true }} value={item.value} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
