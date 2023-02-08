import React, { useState } from 'react';
import {
    Tab, Button
} from '@mui/material';
import {
    TabList,
    TabContext, TabPanel
} from '@mui/lab';

import { Etiquetas } from './Etiquetas';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Inspecciones() {
    const [selectedTab, setSelectedTab] = useState("Main");

    const [tabs, setTabs] = useState([])
    //const [panels, setPanels] = useState([])
    const [tabIndex, setTabIndex] = useState(2)

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleTabOptions = (value) => {
        setSelectedTab(value)
        setTabIndex(tabIndex + 1)
    }

    const nuevaInspeccion = () => {
        const value = `Inspección ${tabIndex}`
        const newTab = {
            value: value,
            child: () => <div> <Etiquetas /> </div>
        }

        setTabs([...tabs, newTab])

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}} />
        //     }
        // ])

        handleTabOptions(value);

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'red'}} />
        //     }
        // ])

        handleTabOptions(value);
    }


    const handleTabClose = (event, value) => {
        tabs.map(e => console.log(e.value))
        const tabArr = tabs.filter(x => x.value !== value)
        console.log(tabArr)
        setTabs(tabArr)

        // const panelArr = panels.filter(p => p.value !== value)
        // setPanels(panelArr);

        setSelectedTab('Main')
    }

    return (
        <div>
            <TabContext value={selectedTab}>
                <TabList onChange={handleChange}>
                    <Button
                        onClick={nuevaInspeccion}
                        variant='contained' color='primary'>
                        <AddCircleIcon />
                    </Button>
                    <Tab label="Inspección 1" value="Main" />


                    {tabs.map(tab => (
                        <Tab
                            icon={
                                <DeleteForeverIcon onClick={(e) => handleTabClose(e, tab.value)} />
                            } iconPosition='end'
                            key={tab.value} label={tab.value}
                            value={tab.value}
                        />
                    ))}
                </TabList>


                {tabs.map(panel => (
                    <TabPanel key={panel.value} value={panel.value}>
                        {panel.child()}
                    </TabPanel>
                ))}


            </TabContext>



        </div>
    );
}