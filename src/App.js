import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Entry from './pages/Entry';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkMode,setDarkMode] = useState(prefersDarkMode)

  const [collect,setCollect] = useState({})

  const theme = createTheme({
    palette: {
      mode: darkMode? "dark" : "light"
    },
  });

  return (     

    <ThemeProvider theme={theme}>

    <Paper style={{height:"100vh"}}>
        <Routes>
          <Route path='/' element={<Entry setCollect={setCollect}  check={darkMode} change={()=>setDarkMode(!darkMode)} />} />
          <Route path='/home' element={<Home collect={collect} />} />
        </Routes>
    </Paper>

    </ThemeProvider>
  );
}

export default App;
