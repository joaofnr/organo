import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Time from './components/Time';

function App() {
  const times = [
    {
      'value': 'ti',
      'primaryColor': '#57C278',
      'secondaryColor': '#D9F7E9',
      'name': 'T.I.'
    },
    {
      'value': 'atende',
      'primaryColor': '#DB6EBF',
      'secondaryColor': '#FAE9F5',
      'name': 'Atendimento'
    },
    {
      'value': 'gestao',
      'primaryColor': '#82CFFA',
      'secondaryColor': '#E8F8FF',
      'name': 'Gestão'
    },
    {
      'value': 'mkt',
      'primaryColor': '#A6D157',
      'secondaryColor': '#F0F8E2',
      'name': 'Marketing'
    },
    {
      'value': 'op',
      'primaryColor': '#E06B69',
      'secondaryColor': '#FDE7E8',
      'name': 'Operações'
    }
  ]
  const [integrantes, setIntegrantes] = useState([]);

  const pushToIntegrantes = (integrante) => {
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times} addIntegrante={integrante => pushToIntegrantes(integrante)} />
      {
        times.map(time =>
          <Time
            key={time.value}
            nome={time.name}
            primaryColor={time.primaryColor}
            secondaryColor={time.secondaryColor}
            integrantes={integrantes.filter(integrante => integrante.atuacao === time.value)}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
