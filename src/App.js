
import { BrowserRouter,Link,Route ,Routes} from 'react-router-dom';
import './App.css';
import Lista from './components/lista'
import Saludo from './components/Saludo';
import Registro from './pages/Registro';
import Usuarios from './pages/usuarios';
import Validacion from './pages/Validacion';


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
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/operaciones">Lista</Link>
          <br/>
          <Link to="/validacion">validacion</Link>
          <br/>
          <Link to="/registro">registro</Link>
          <br/>
          <Link to="/usuarios">usuarios</Link>
        </nav>
        <Routes>
          <Route path='/'  element={ <Saludo nombre="carlos" apellido="Gomez" />}/>
          <Route path='/operaciones'  element={ <Lista nombre="pedro" operacion={operaciones} />}/>
          <Route path='/validacion'  element={ <Validacion />}/>
          <Route path='/registro'  element={ <Registro />}/>
          <Route path='/usuarios'  element={ <Usuarios />}/>
        </Routes>     
      </BrowserRouter>
    </div>
  );
}
export default App;
