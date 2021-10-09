import { Fragment } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import RenginiuLentele from '../../features/renginiai/dashboard/RenginiuLentele';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import Pradinis from '../../features/home/HomePage';
import RenginioForma from '../../features/renginiai/forma/RenginioForma';

function App() {

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop:'5em'}}>
        <Route exact path='/' component={Pradinis} />
        <Route path='/renginiai' component={RenginiuLentele} />
        <Route path='/sukurtiRengini' component={RenginioForma} />
      </Container>
    </Fragment>
  );
}

export default observer(App); 
