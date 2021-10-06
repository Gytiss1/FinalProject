import { Fragment, useEffect } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import RenginiuLentele from '../../features/renginiai/dashboard/RenginiuLentele';
import Krovimasis from './Krovimasis';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {renginysStore} = useStore();

  // AXIOS
  useEffect(() => {
    renginysStore.uzkrautiRenginius();
  }, [renginysStore]) 

  if (renginysStore.krovimasisPradinis) return <Krovimasis content='Programa kraunama...' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop:'5em'}}>
        <RenginiuLentele />
        </Container>
    </Fragment>
  );
}

export default observer(App); 
