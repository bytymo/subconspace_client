import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from '/pages/home';
import Navbar from '/components/navbar';
import Booking from '/pages/booking';

function App() {
  return (
    <Router>
      <div className='App'>
         <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/booking'>
              <Booking />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
