import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import {Renginys} from '../layout/models/renginys';
import NavBar from './NavBar';
import RenginiuLentele from '../../features/renginiai/dashboard/RenginiuLentele';

function App() {
  const [renginiai, setRenginiai] = useState<Renginys[]>([]);

  useEffect(() => {
    axios.get<Renginys[]>('http://localhost:5000/api/renginiai').then(response => {
      console.log(response);  
      setRenginiai(response.data);
    })
  }, [])

  return (
    <Fragment>
      <NavBar/>
      <Container style={{marginTop:'5em'}}>
        <RenginiuLentele renginiai={renginiai} />
        </Container>
    </Fragment>
  );
}

export default App;
