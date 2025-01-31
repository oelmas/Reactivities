import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import { Header, List, ListContent, ListItem } from 'semantic-ui-react'

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  return (
    <div>
      <Header as='h2' content='Reactivities' textAlign='center'/>
      <List>
        {activities.map((activity: any) => (
          <ListContent key={activity.id}>{activity.title}</ListContent>
        ))}
      </List>
    </div>
  )
}

export default App
