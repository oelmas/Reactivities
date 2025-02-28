import axios from 'axios';
import './styles.css'
import { useEffect, useState} from 'react';

import {Box, Container, CssBaseline} from "@mui/material";
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  return(
      <Box sx={{bgcolor: "#f0f0f0"}}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl" sx={{mt: 3}}>
          <ActivityDashboard activities={activities} />
        </Container>
      </Box>
  )

}

export default App
