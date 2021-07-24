import './App.css';
import BarraNavegacao from './Componente/BarraNavegacao';
import Footer from './Componente/Footer';
import Home from './Componente/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaProdutos from './Componente/ListaProdutos';
import CreateUpdate from './Componente/CreateUpdate';


function App() {
    return ( 
        <div className="App">
            <BarraNavegacao/>
            <Router>
                <Switch>
                    <Route exact path ="/" component={Home} ></Route>
                    <Route exact path ="/produtos" component={ListaProdutos} ></Route>
                    <Route path="/addprod/:id" component={CreateUpdate}></Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;