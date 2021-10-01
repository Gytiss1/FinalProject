import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
  const [renginiai, setRenginiai] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/renginiai').then(response => {
      console.log(response);  
      setRenginiai(response.data);
    })
  }, [])



  return (
    <div>
      <Header as='h2' icon='hand spock' content='Ką veikti Lietuvoje?' />
        <List>
          {renginiai.map((renginys:any) => (
            <ListItem key={renginys.id}>
              {renginys.pavadinimas}
            </ListItem>
          ))}
        </List>
    </div>
  );
}

export default App;
