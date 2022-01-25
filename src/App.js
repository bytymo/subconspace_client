import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import Book from './pages/book';
import Booking from './pages/booking';
import Thankyou from './pages/thankyou';
import UserAgreement from './pages/user-agreement';

const App = () => {
  return (
    <Router>
      <div className='App'>
         <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/agreement' component={UserAgreement} />
            <Route exact path='/booking' component={Booking} />
            <Route exact path='/book' component={Book} />
            <Route exact path='/thankyou' component={Thankyou} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
