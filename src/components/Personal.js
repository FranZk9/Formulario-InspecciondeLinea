import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import Tab from '@mui/material/Tab'
import React, { useState } from 'react'
import {
    TabList,
    TabContext, TabPanel
} from '@mui/lab'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'

export function Personal() {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div>
            <Box sx={{ maxWidth: '80%', display: 'flex', justifyContent: 'center' }}>
                <TabContext value={value}>
                    <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Inspeccion 1" value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ mt: 2 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Enjuag./Lavadora</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>1ra Inspección</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Llenadora</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>2da Inspección</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Tapadora</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Etiquetadora</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Mesa de Inspección </Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Recogiendo</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} xl={4}>
                                <Typography>Estibando</Typography>
                                <TextField fullWidth id="outlined-basic" variant="outlined" />
                            </Grid>
                        </Grid>

                    </TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}