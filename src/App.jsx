import './App.css';
//import { Nav } from './components/Nav.tsx';
import { Box, Paper } from "@mui/material"
import Typography from '@mui/material/Typography';
//import { Form } from './components/temp';
import { Form } from './components/Form';
//import Inspecciones from './components/Inspecciones';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
//import { TabsInspecciones } from './components/TabsInspecciones';

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{ m: 2 , minWidth:'80%'}}>
          <Typography variant='h5' sx={{ m: 2 }} align='center'>FORMULARIO INSPECCIÓN DE LÍNEA</Typography>
        </Paper>
      </Box>

      <Box sx={{display:'flex',justifyContent:'center'}}>
        <Form/>
      </Box>
      {/* <Box sx={{ justifyContent: 'center' }}>
        <TabsInspecciones />
      </Box> */}
    </div>
  )
}

export default App;
