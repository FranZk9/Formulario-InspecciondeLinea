import { Box, Divider, List, ListItem, Tab} from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import React, { useState } from "react"
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
export const Nav = () => {
    const [value, setValue] = useState("1")
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
    const date = new Date()
    const showTime = date.getDate()
        + "/"+ date.getMonth()+1
        + "/" + date.getFullYear()
        + ", " + date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds()
    return <Box m="auto" sx={{width: '80%',backgroundColor: 'whitesmoke'}}>
        <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                <TabList 
                    aria-label="TiposNotis" 
                    onChange={handleChange}
                >
                    <Tab label={"Todas"} value="1" sx={{width: '25%'}}/>
                    <Tab label="Criticas" value="2" sx={{width: '25%'}}/>
                    <Tab label="Advertencias" value="3" sx={{width: '25%'}}/>
                    <Tab label="Informacion" value="4" sx={{width: '25%'}}/>
                </TabList>
            </Box>
            <TabPanel value="1">
                <List>
                    <ListItem>
                        <WarningIcon color="primary"/>
                        {showTime}:
                        &nbsp;Esta es una advertencia de prueba
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ErrorIcon color="error"/>
                        {showTime}:
                        &nbsp;Error critico en máquina 1
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <InfoIcon />
                        {showTime}:
                        &nbsp;Informacion del sistema
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <WarningIcon color="primary"/>
                        {showTime}:
                        &nbsp;Se han encontrado 11 vulnerabilidades en el sistema.
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ErrorIcon color="error"/>
                        {showTime}:
                        &nbsp;FATAL ERROR.
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <InfoIcon />
                        {showTime}:
                        &nbsp;Se han actualizado 4 paquetes
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value="2">
                <List>
                    <ListItem>
                        <ErrorIcon color="error"/>
                        {showTime}:
                        &nbsp;Error critico en máquina 1.
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ErrorIcon color="error"/>
                        {showTime}:
                        &nbsp;FATAL ERROR.
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value="3">
                <List>
                    <ListItem>
                        <WarningIcon color="primary"/>
                        {showTime}:
                        &nbsp;Esta es una advertencia de prueba.
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <WarningIcon color="primary"/>
                        {showTime}:
                        &nbsp;Se han encontrado 11 vulnerabilidades en el sistema.
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value="4">
                <List>
                    <ListItem>
                        <InfoIcon />
                        {showTime}:
                        &nbsp;Informacion del sistema
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <InfoIcon />
                        {showTime}:
                        &nbsp;Se han actualizado 4 paquetes
                    </ListItem>
                </List>
            </TabPanel>
            
        </TabContext>
    </Box>
}