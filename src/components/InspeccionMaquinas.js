import React from 'react'
import { Grid, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

export default function InspeccionMaquinas() {

    const data = [
        { field: 'Nivel de llenado', value: 'ok' },
        { field: 'Tapado', value: 'ok' },
        { field: 'Etiquetado', value: 'ok' },
        { field: 'Codificado de envase', value: 'ok' },
        { field: 'Codificado cajas', value: 'ok' }
    ]

    return (
        <Grid container spacing={4}>
            {data.map((item) => (
                <Grid item xs={12} xl={4}>
                    <FormControl>
                        <FormLabel required>{item.field}</FormLabel>
                        <RadioGroup
                            row
                            value={'ok'}
                        >
                            <FormControlLabel value="ok" control={<Radio />} label="OK" />
                            <FormControlLabel value="no ok" control={<Radio />} label="No OK" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    )
}
