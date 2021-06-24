// import "./App.css";
import Nav from "./Componentes/Nav/Nav";
import Footer from "./Componentes/Footer/Footer.js";
import Main from "./Componentes/Main/Main.js"
import Iphone from "./Componentes/Pages/Iphone/Iphone";
import  Mac from './Componentes/Pages/Mac/Mac';
import  Four04 from "./Componentes/Pages/Four04/Four04";
import ProductPage from "./Componentes/Pages/ProductPage/ProductPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />  
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/iphones" exact component={Iphone} />
        <Route path="/iphones/:pid" exact component={ProductPage} />
        <Route path="/mac" exact component={Mac} />
        <Route path="/" component={Four04} />
      </Switch>
      <Footer />
    </Router>
   
  );
}

export default App;
