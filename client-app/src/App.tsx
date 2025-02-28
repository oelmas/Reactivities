import axios from 'axios';
import './App.css'
import { useEffect, useState} from 'react';

import {List, ListItem, ListItemText, Typography} from "@mui/material";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  return(
      <>
        <Typography variant='h3'>Reactivities</Typography>
        <List>
          {activities.map((activity: never) => <ListItem key={activity.id}>
            <ListItemText>
              {activity.title}
            </ListItemText>
          </ListItem>)}
        </List>
      </>
  )

}

export default App
