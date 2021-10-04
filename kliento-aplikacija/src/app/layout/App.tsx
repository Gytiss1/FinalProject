import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, StrictGridColumnProps } from 'semantic-ui-react';
import {Renginys} from '../layout/models/renginys';
import NavBar from './NavBar';
import RenginiuLentele from '../../features/renginiai/dashboard/RenginiuLentele';

function App() {
  const [renginiai, setRenginiai] = useState<Renginys[]>([]);
  const [pasirinktasRenginys, setPasirinktasRenginys] = useState<Renginys | undefined>(undefined);
  const [redagavimas, setRedagavimas] = useState(false);

  useEffect(() => {
    axios.get<Renginys[]>('http://localhost:5000/api/renginiai').then(response => {
      console.log(response);  
      setRenginiai(response.data);
    })
  }, [])

  // surandu rengini pagal id kuris perduotas is mygtuko paspaudimo
  function handlePasirinktasRenginys(id: string){
    setPasirinktasRenginys(renginiai.find(x => x.id === id))
  }
  
  // nunulinu id ir detaes dingsta
  // https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react
  function handleAtsauktiPasirinktasRenginys(){
    setPasirinktasRenginys(undefined);
  }

  // perduodamas id is renginio objekto ir nustatomas pasirinkimo funkcijai
  function handleFormosAtidaryma(id?: string){
    id ? handlePasirinktasRenginys(id) : handleAtsauktiPasirinktasRenginys();
    setRedagavimas(true);
  }

  // paspaudus atsaukti nunulinamas metodas
  function handleFormosUzdarymas(){
    setRedagavimas(false);
  }

  // tikrinu ar yra toks renginys duombazeje ir jeigu yra, pakeiciu ji tokiu pat objektu is formos
  function handleSukurtiArPakeistiRengini(renginys: Renginys) {
    renginys.id ? setRenginiai([...renginiai.filter(x => x.id !== renginys.id), renginys])
    : setRenginiai([...renginiai, renginys]);
    setRedagavimas(false);
    setPasirinktasRenginys(renginys);
  }

  return (
    <Fragment>
      <NavBar atidarytiForma={handleFormosAtidaryma}/>
      <Container style={{marginTop:'5em'}}>
        <RenginiuLentele 
          renginiai={renginiai}
          pasirinktasRenginys={pasirinktasRenginys}
          pasirinktiRengini={handlePasirinktasRenginys}
          atsauktiPasirinktaRengini={handleAtsauktiPasirinktasRenginys}
          redaguoti={redagavimas}
          atidarytiForma={handleFormosAtidaryma}
          uzdarytiForma={handleFormosUzdarymas}
          sukurtiArRedaguoti={handleSukurtiArPakeistiRengini}
        />
        </Container>
    </Fragment>
  );
}

export default App;
