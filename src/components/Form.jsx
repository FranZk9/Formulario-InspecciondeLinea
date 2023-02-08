import * as React from 'react';
import {
  Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography,
  Tooltip, Tab, IconButton, StepIcon, StepButton, makeStyles
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
/* import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel'; */
//import { width } from '@mui/system';
//import { TabsEtiquetas, TabsLlenado, TabsPersonal } from './TabsInspecciones';
//import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import InformacionOp from './InformacionOp';
import SistemaTrasiego from './SistemaTrasiego';
import { Etiquetas } from './Etiquetas';
import { Llenado } from './Llenado';
import { Personal } from './Personal';
import InspeccionMaquinas from './InspeccionMaquinas';
import AnalisisFQ from './AnalisisFQ';
import Observaciones from './Observaciones';
import Firmas from './Firmas';

const steps = [
  'INFORMACIÓN DE OPERACIONES',
  'VERIFICACIÓN DEL SISTEMA DE TRASIEGO',
  'INSPECCIÓN DE MÁQUINAS PARA EL ARRANQUE',
  'ANÁLISIS FISCO-QUIMICO PARA EL ARRANQUE',
  'INFORMACIÓN DE SUMINISTRO',
  'CALCULO DEL NIVEL DE LLENADO',
  'PERSONAL DE LÍNEA',
  'OBSERVACIONES',
  'FIRMAS'
]

export function Form() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClickedStep = (index) => {
    setActiveStep(index);
  };

  function stepLabel(steps, index) {
    return (
      <StepLabel onClick={() => handleClickedStep(index)}>
        <Typography>{steps[index]}</Typography>
      </StepLabel>
    )
  }

  const stepButtons = (index) => {
    return (
      <Box display='flex' justifyContent='flex-end' sx={{ mb: 2 }}>
        <div>
          <Button
            disabled={index === 0}
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Volver
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, mr: 1 }}
          >
            {index === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </div>
      </Box>
    )
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ok, setOk] = React.useState(0);

  const handleChangeOpt = (event) => {
    setOk(event.target.value);
  };

  /* const [time, setTime] = React.useState(dayjs());

  const handleTime = (newTime) => {
    setValue(newTime);
  }; */

  const [totalTabs, setTabs] = useState(1);
  const [tabsProdInfoContent, setTabsProdInfoContent] = useState([
    <TabPanel value={"1"}>
    </TabPanel>
  ]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  function renderTabs() {
    const tabs = [];
    for (let i = 1; i < totalTabs + 1; i++) {
      let tab_name = "Inspección " + i.toString();
      tabs.push(<Tab label={tab_name} value={i.toString()} />);
    }
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          maxWidth: { xs: 320, sm: 480, md: 600, lg: 800, xl: 800 },
        }}
      >
        <TabList
          value={value}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {tabs}
        </TabList>
      </Box>
    )
  };

  const addInspection = () => {
    if (totalTabs + 1 <= 5) {
      setTabs(totalTabs + 1);
      setTabsProdInfoContent([
        ...tabsProdInfoContent,
        <TabPanel value={(totalTabs + 1).toString()}>
        </TabPanel>
      ]);
      setValue(totalTabs + 1);
    }
  };

  const deleteInspection = () => {
    const prodInfo = [...tabsProdInfoContent];
    if (totalTabs - 1 >= 1) {
      setTabs(totalTabs - 1);
      prodInfo.pop();
      setTabsProdInfoContent(prodInfo);
      setValue(totalTabs - 1);
    }
  };

  return (
    <Box sx={{
      mt: [1, 1],
      mr: [2, 10],
      ml: [2, 10],
      mb: 5
    }}>
      <TabContext value={value.toString()}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: ['repeat(3, 68% 8% 5%)', 'auto 4% 4%'],
          gap: 3,
          mb: [1, 3]
        }}>
          {renderTabs()}
          <Tooltip title="Agregar Inspección">
            <IconButton onClick={addInspection}>
              <AddCircleRoundedIcon color='success' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar Inspección">
            <IconButton onClick={deleteInspection}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 0)}
              <StepContent>
                <InformacionOp />
                {stepButtons(0)}
              </StepContent>
            </Step>
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 1)}
              <StepContent>
                <SistemaTrasiego />
                {stepButtons(1)}
              </StepContent>
            </Step>
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 2)}
              <StepContent>
                <InspeccionMaquinas />
                {stepButtons(2)}
              </StepContent>
            </Step>
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 3)}
              <StepContent>
                <AnalisisFQ />
                {stepButtons(3)}
              </StepContent>
            </Step>
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 4)}
              <StepContent>
                <Etiquetas />
                {stepButtons(4)}
              </StepContent>
            </Step>
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'primary', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // circle's number (ACTIVE)
              },
            }}>
              {stepLabel(steps, 5)}
              <StepContent>
                <Llenado />
                {stepButtons(5)}
              </StepContent>
            </Step>
            <Step>
              {stepLabel(steps, 6)}
              <StepContent>
                <Personal />
                {stepButtons(6)}
              </StepContent>
            </Step>
            <Step>
              {stepLabel(steps, 7)}
              <StepContent>
                <Observaciones />
                {stepButtons(7)}
              </StepContent>
            </Step>
            <Step>
              {stepLabel(steps, 8)}
              <StepContent>
                <Firmas />
                {stepButtons(8)}
              </StepContent>
            </Step>
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>Terminado</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}

        </Box>
      </TabContext>
    </Box>
  );
}
