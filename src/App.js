import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Pages/Home';
import SearchPage from './components/Pages/SearchPage';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/"component={Home}/>
         <Route exact path="/search" component={SearchPage}/>
       </Switch>
       <Footer/>
     </Router>

    </div>
  );
}

export default App;
