import Nav from './components/nav/nav';
import './css/App.css';
import Inicio from './pages/inicio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Vehiculos from './pages/vehiculos';

function App() {
  return (
    <div className="App">
      <Nav/>
      
        <Router>
          <Switch>
            <Route path="/Vehiculos"><Vehiculos/></Route>
            <Route path="/"><Inicio/></Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
