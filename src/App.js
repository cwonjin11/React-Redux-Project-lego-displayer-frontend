
import React from 'react';    

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import LegoList from './containers/LegoList';
import NewLegoForm from './containers/NewLegoForm';
import EditLegoForm from './containers/EditLegoForm'
import Footer from './components/Footer';
import Livecoding from './components/Livecoding';

  const App = () => {
    return (
      <div>
        <div className="App">
          <Router>  {/* it wraps our main application routing */}
            <Navbar />
            <Switch>
              {/* <Lego /> */}
              <Route exact path="/" component={ Home  } />
              <Route exact path="/input" component={ Livecoding  } />
              <Route exact path="/legos" component={ LegoList } />
              <Route exact path="/legos/new" component={ NewLegoForm } />
              <Route exact path="/legos/:id/edit" component={ EditLegoForm } />
            </Switch>
            <Footer />
          </Router>
         
        </div>
      </div>
    );
  }


export default App;







