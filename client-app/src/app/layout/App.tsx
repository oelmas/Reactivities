import axios from 'axios';
import './styles.css'
import { useEffect, useState} from 'react';

import {Container, CssBaseline, List, ListItem, ListItemText} from "@mui/material";
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  return(
      <>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl" sx={{mt: 3}}>
          <List>
            {activities.map((activity: any) => <ListItem key={activity.id}>
              <ListItemText>
                {activity.title}
              </ListItemText>
            </ListItem>)}
          </List>
        </Container>
      </>
  )

}

export default App
