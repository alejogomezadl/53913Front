
import './App.css';
import Lista from './components/lista'
import Saludo from './components/Saludo';


const operaciones = [
  {
    "tipo": 'ingreso',
    "valor": 50000,
    "fecha": "20/11/2021",
    "mostrar": true
  },
  {
    "tipo": 'gasto',
    "valor": 10000,
    "fecha": "21/11/2021",
    "mostrar": false
  },
  {
    "tipo": 'ingreso',
    "valor": 20000,
    "fecha": "22/11/2021",
    "mostrar": false
  },
  {
    "tipo": 'gasto',
    "valor": 20000,
    "fecha": "22/11/2021",
    "mostrar": true
  }
]



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo nombre="carlos" ></Saludo>

        <Lista nombre="pedro" operacion={operaciones} ></Lista>
      </header>
    </div>
  );
}
export default App;
