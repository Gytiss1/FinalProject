import { Fragment } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import RenginiuLentele from '../../features/renginiai/dashboard/RenginiuLentele';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import Pradinis from '../../features/home/HomePage';
import RenginioForma from '../../features/renginiai/forma/RenginioForma';
import RenginioDetales from '../../features/renginiai/detales/RenginioDetales';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Container style={{marginTop:'5em'}}>
        <Route exact path='/' component={Pradinis} />
        <Route exact path='/renginiai' component={RenginiuLentele} />
        <Route path='/renginiai/:id' component={RenginioDetales} />
        <Route key={location.key} path={['/sukurtiRengini', '/redaguoti/:id']} component={RenginioForma} />
      </Container>
    </>
  );
}

export default observer(App); 
