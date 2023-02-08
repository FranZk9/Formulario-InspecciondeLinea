import { Grid } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

export default function EtiquetasComp() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={12} xl={12}>
                <TextField fullWidth sx={{ mr: 2 }} id="outlined-basic" variant="outlined" label="Proveedor" />
                <FormControl fullWidth>
                    <InputLabel id="ot-oc-frente-label">OT/OC</InputLabel>
                    <Select
                        labelId="ot-oc-frente-label"
                        id="ot-oc-frente"
                        label="OT/OC"
                    >
                        <MenuItem>OT</MenuItem>
                        <MenuItem>OC</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth id="outlined-basic" variant="outlined" label="Número" />
            </Grid>
            <Grid item xl={12} sx={{ mb: 2 }}>
                <FormControl>
                    <FormLabel required id="forma-pegago-frente">Forma de Pegado</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="forma-pegago-frente"
                        name="forma-pegago-frente-group"
                    >
                        <FormControlLabel value="Autoadhesivo" control={<Radio />} label="Autoadhesivo" />
                        <FormControlLabel value="Cola Fría" control={<Radio />} label="Cola Fría" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}
