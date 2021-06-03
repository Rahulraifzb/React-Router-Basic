import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
};

const Shop = () => (
  <div>
    <h1>Shop Page</h1>
  </div>
)

export default App;
