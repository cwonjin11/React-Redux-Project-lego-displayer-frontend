
import React from 'react';      // we are importing this "React" object from 'react' library. 
// import React, {Component} from 'react';      // class function =>we are importing this "React" object from 'react' library. 
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import LegoList from './containers/LegoList';
import NewLegoForm from './containers/NewLegoForm';
import EditLegoForm from './containers/EditLegoForm'
import Footer from './components/Footer';
 
// class App extends Component {     // !! Important :Every single class component has a render and a return 
// function App() { // no render()
// class App extends React.Component { render() {
// class App extends Component { 
  const App = () => {
    return (
      <div>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              {/* <Lego /> */}
              <Route exact path="/" component={ Home } />
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









            // {/* <AnotherComponent name="Buzz" /> */}
            // {/* <h2>{names[0]}</h2>
            // <ul>
            //   {names.map (name => { 
            //     return < AnotherComponent name={name} age={21}/> 
            //   })}
            // </ul> */}

// !! Important :functional component only has a return 
// "rcc" to get entire class component
// class AnotherApp extends Component {
//   render() {
//     return (
//       <div>
//         <h1>another component</h1>
//       </div>
//     );
//   }
// }

// export default App;