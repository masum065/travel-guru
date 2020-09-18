import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Conponents/Booking/Booking';
import Home from './Conponents/Home/Home';
import Login from './Conponents/Login/Login';
import NotFound from './Conponents/NotFound/NotFound';
import PrivateRoute from './Conponents/PrivateRoute/PrivateRoute';
import FindHotel from './Conponents/FindHotel/FindHotel';

export const UserContext = createContext();
function App() {
  const [logedInUser, setLogedInUser] = useState({});
  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/booking/:bookingKey'>
            <Booking />
          </Route>
          <PrivateRoute path='/find_hotel'>
            <FindHotel />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
