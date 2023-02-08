import React from 'react'
import { Grid, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

export default function SistemaTrasiego() {

  const data = [
    {field: 'Línea de Trasiego', value: 'ok'},
    {field: 'Mangueras', value: 'ok'},
    {field: 'Bombas', value: 'ok'},
    {field: 'Filtros', value: 'ok'}
  ]

  return (
      <Grid container spacing={6}>
        {data.map((item) => (
          <Grid item xs={12} xl={3} sm={6} md={4}>
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
