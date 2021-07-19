

import './App.css';

import Home from './components/Home'
import EditLegoForm from './components/EditLegoForm'
import NewLegoForm from './components/NewLegoForm';
import LegoList from './containers/LegoList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// class App extends Component {     // !! Important :Every single class component has a render and a return 
function App() {
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


export default App;
